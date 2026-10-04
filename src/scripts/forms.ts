// Sends Formspree forms in the page (no redirect) and shows the result.
// Without JavaScript the forms still post normally to Formspree.
export function wireForms() {
  document.querySelectorAll<HTMLFormElement>('form.js-form').forEach((form) => {
    form.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const msg = form.querySelector<HTMLElement>('.form-msg');
      const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
      const show = (text: string, kind: 'ok' | 'err' | '') => {
        if (!msg) return;
        msg.textContent = text;
        msg.className = `form-msg ${kind}`;
      };
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      btn?.setAttribute('disabled', '');
      show('Sending…', '');
      try {
        const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
        if (res.ok) {
          form.reset();
          show(form.dataset.ok ?? 'Thank you.', 'ok');
        } else {
          show('That did not go through. Please try again, or message us on WhatsApp.', 'err');
        }
      } catch {
        show('That did not go through. Check your connection and try again, or message us on WhatsApp.', 'err');
      } finally {
        btn?.removeAttribute('disabled');
      }
    });
  });
}
