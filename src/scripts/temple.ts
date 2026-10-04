// Home-page hero: the logo's temple in 3D. The three pillars are the firm's values.
// index.astro loads this module (and these parts of three.js) only on devices that will show it.
import {
  WebGLRenderer, Scene, PerspectiveCamera, HemisphereLight, DirectionalLight, PointLight, Group, Shape,
  ExtrudeGeometry, MeshStandardMaterial, Mesh, Vector3, Vector2, Raycaster, MathUtils,
} from 'three';
import { TEMPLE, VALUES } from '../data/firm';

export function initTemple(stage: HTMLElement) {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const fallback = stage.querySelector<HTMLElement>('.fallback');
  const label = stage.querySelector<HTMLElement>('.plabel');
  if (!label) return;

  let renderer: WebGLRenderer;
  try {
    renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  } catch {
    return;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  const canvas = renderer.domElement;
  canvas.setAttribute('aria-hidden', 'true');
  stage.insertBefore(canvas, label);

  // Light levels match the approved prototype (three.js now uses physical light units, hence the PI factors).
  const PI = Math.PI;
  const scene = new Scene();
  const camera = new PerspectiveCamera(26, 1, 0.1, 60);
  scene.add(new HemisphereLight(0xe9f0dc, 0x0f130e, 0.42 * PI));
  const key = new DirectionalLight(0xffffff, 0.9 * PI);
  key.position.set(-3, 4, 6);
  scene.add(key);
  const rim = new DirectionalLight(0xb8e06a, 0.55 * PI);
  rim.position.set(4, 2, -5);
  scene.add(rim);
  const sweep = new PointLight(0xffffff, 0.6 * PI * 4, 12, 2);
  sweep.position.set(-3, 0.6, 2.6);
  scene.add(sweep);

  const W = 2168, H = 2597, S = 1 / 1000;
  const depth: Record<string, number> = { p1: 0.3, p2: 0.3, p3: 0.3, beam: 0.24, pediment: 0.18, base: 0.22 };
  const group = new Group();
  group.rotation.set(0.05, -0.38, 0);
  scene.add(group);
  const meshes: Record<string, Mesh> = {};
  const mats: Record<string, MeshStandardMaterial> = {};
  for (const [k, pts] of Object.entries(TEMPLE)) {
    const shape = new Shape();
    pts.forEach(([px, py], i) => {
      const x = (px - W / 2) * S, y = -(py - H / 2) * S;
      if (i) shape.lineTo(x, y); else shape.moveTo(x, y);
    });
    const d = depth[k];
    const geo = new ExtrudeGeometry(shape, { depth: d, bevelEnabled: true, bevelThickness: 0.012, bevelSize: 0.01, bevelSegments: 2, curveSegments: 1 });
    geo.translate(0, 0, -d / 2);
    const grey = k === 'beam' || k === 'base';
    const mat = new MeshStandardMaterial({ color: grey ? 0x67675f : 0x70a424, roughness: grey ? 0.55 : 0.45, metalness: 0.05, transparent: true, opacity: 1 });
    const m = new Mesh(geo, mat);
    group.add(m);
    meshes[k] = m;
    mats[k] = mat;
  }
  const pillars = [meshes.p1, meshes.p2, meshes.p3];
  pillars.forEach((m, i) => { m.userData.idx = i; });
  const mids = pillars.map((m) => {
    m.geometry.computeBoundingBox();
    const b = m.geometry.boundingBox!;
    return new Vector3((b.min.x + b.max.x) / 2, (b.min.y + b.max.y) / 2 - 0.15, b.max.z);
  });

  // Build: pillars rise, beam and pediment slide in, base settles.
  const plan: Record<string, { x?: number; y?: number; rz?: number; delay: number; dur: number }> = {
    p1: { y: -2.4, delay: 0, dur: 0.95 },
    p2: { y: -2.8, delay: 0.1, dur: 1.0 },
    p3: { y: -2.4, delay: 0.2, dur: 0.95 },
    beam: { x: -2.6, delay: 0.55, dur: 0.85 },
    pediment: { x: -3, y: 0.35, rz: 0.18, delay: 0.7, dur: 0.9 },
    base: { x: 2.4, delay: 0.85, dur: 0.75 },
  };
  const ease = (t: number) => 1 - Math.pow(1 - t, 3);
  const setBuild = (t: number) => {
    let done = true;
    for (const [k, p] of Object.entries(plan)) {
      const raw = Math.min(1, Math.max(0, (t - p.delay) / p.dur));
      if (raw < 1) done = false;
      const e = ease(raw);
      const m = meshes[k];
      m.position.x = (p.x ?? 0) * (1 - e);
      m.position.y = (p.y ?? 0) * (1 - e);
      m.rotation.z = (p.rz ?? 0) * (1 - e);
      mats[k].opacity = Math.min(1, raw * 2.2);
    }
    return done;
  };

  let built = false, buildStart = -1, running = false, visible = true;
  let mx = 0, my = 0, hot = -1;
  let touring = false, tourStart = 0;
  const TOUR_DELAY = 0.4, TOUR_STEP = 1.15;
  const finishBuild = (now: number) => {
    setBuild(99);
    for (const m of Object.values(mats)) { m.transparent = false; m.needsUpdate = true; }
    built = true;
    if (!reduce) { touring = true; tourStart = now; }
  };

  const tmp = new Vector3();
  const placeLabel = () => {
    if (hot < 0) return;
    tmp.copy(mids[hot]);
    pillars[hot].localToWorld(tmp);
    tmp.project(camera);
    const w = stage.clientWidth, h = stage.clientHeight;
    const half = label.offsetWidth / 2;
    label.style.left = Math.max(half, Math.min(w - half, ((tmp.x + 1) / 2) * w)) + 'px';
    label.style.top = ((1 - tmp.y) / 2) * h + 'px';
  };

  const setHot = (i: number) => {
    if (i === hot) return;
    hot = i;
    canvas.style.cursor = i >= 0 ? 'pointer' : '';
    if (i >= 0) { label.textContent = VALUES[i].name; label.classList.add('on'); }
    else label.classList.remove('on');
    schedule();
  };

  const t0 = performance.now();
  const frame = (now: number) => {
    running = false;
    if (!built) {
      if (buildStart < 0) { buildStart = now; fallback?.classList.add('gone'); }
      if (setBuild((now - buildStart) / 1000)) finishBuild(now);
    } else if (touring) {
      const s = (now - tourStart) / 1000 - TOUR_DELAY;
      const step = Math.floor(s / TOUR_STEP);
      if (step >= 3) { touring = false; setHot(-1); } else setHot(s < 0 ? -1 : step);
    }
    const t = (now - t0) / 1000;
    const live = fine && !reduce;
    const ty = -0.38 + (live ? mx * 0.42 : 0);
    const tx = 0.05 + (live ? my * 0.18 : 0);
    group.rotation.y += (ty - group.rotation.y) * 0.06;
    group.rotation.x += (tx - group.rotation.x) * 0.06;
    group.position.y = live ? Math.sin(t * 0.7) * 0.03 : group.position.y * 0.9;
    if (live) sweep.position.x = Math.sin(t * 0.32) * 3.4;
    let settling = Math.abs(ty - group.rotation.y) > 0.0006 || Math.abs(tx - group.rotation.x) > 0.0006 || Math.abs(group.position.y) > 0.0005;
    pillars.forEach((m, i) => {
      const tz = i === hot ? 0.16 : 0;
      m.position.z += (tz - m.position.z) * 0.15;
      const g = i === hot ? 0.09 : 0;
      const em = (m.material as MeshStandardMaterial).emissive;
      em.setRGB(em.r + (g * 0.4 - em.r) * 0.15, em.g + (g - em.g) * 0.15, em.b + (g * 0.1 - em.b) * 0.15);
      if (Math.abs(tz - m.position.z) > 0.001 || Math.abs(g - em.g) > 0.001) settling = true;
    });
    renderer.render(scene, camera);
    placeLabel();
    if (visible && (!built || touring || live || settling)) schedule();
  };
  function schedule() { if (!running) { running = true; requestAnimationFrame(frame); } }

  const resize = () => {
    const w = Math.max(1, stage.clientWidth), h = Math.max(1, stage.clientHeight);
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    const tanHalf = Math.tan(MathUtils.degToRad(camera.fov / 2));
    camera.position.set(0, 0.04, Math.max(1.7 / tanHalf, 1.55 / (tanHalf * camera.aspect)));
    camera.updateProjectionMatrix();
    schedule();
  };
  new ResizeObserver(resize).observe(stage);
  resize();
  if (reduce) { finishBuild(performance.now()); fallback?.classList.add('gone'); }
  schedule();

  const ray = new Raycaster();
  const v2 = new Vector2();
  const hitAt = (ev: PointerEvent | MouseEvent) => {
    const r = canvas.getBoundingClientRect();
    v2.set(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(v2, camera);
    const hit = ray.intersectObjects(pillars, false)[0];
    return hit ? (hit.object.userData.idx as number) : -1;
  };
  stage.closest('.hero')?.addEventListener('pointermove', (ev) => {
    const e = ev as PointerEvent;
    if (e.pointerType !== 'mouse' || !fine || reduce) return;
    mx = (e.clientX / innerWidth) * 2 - 1;
    my = (e.clientY / innerHeight) * 2 - 1;
    schedule();
  });
  canvas.addEventListener('pointermove', (ev) => {
    if (ev.pointerType !== 'mouse' || !built) return;
    const i = hitAt(ev);
    if (i >= 0) touring = false;
    if (!touring) setHot(i);
  });
  canvas.addEventListener('pointerleave', () => { if (!touring) setHot(-1); });
  canvas.addEventListener('click', (ev) => {
    const i = hitAt(ev);
    if (i < 0) return;
    touring = false;
    setHot(i);
    // Take the visitor to that value on the page.
    setTimeout(() => {
      const el = document.getElementById(`value-${i}`);
      if (!el) return;
      el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
      document.querySelectorAll('.value').forEach((v) => v.classList.remove('is-on'));
      el.classList.add('is-on');
      setTimeout(() => el.classList.remove('is-on'), 2400);
    }, 250);
  });
  new IntersectionObserver(([en]) => { visible = en.isIntersecting; if (visible) schedule(); }).observe(stage);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) schedule(); });
}
