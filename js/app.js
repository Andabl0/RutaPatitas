/* Patitas Unidas — interacciones del prototipo */
document.addEventListener('DOMContentLoaded', () => {

  /* --- Mostrar / ocultar contraseña --- */
  document.querySelectorAll('[data-toggle-password]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const input = document.getElementById(btn.dataset.togglePassword);
      const showing = input.type === 'text';
      input.type = showing ? 'password' : 'text';
      btn.setAttribute('aria-pressed', String(!showing));
      btn.setAttribute('aria-label', showing ? 'Mostrar contraseña' : 'Ocultar contraseña');
    });
  });

  /* --- Validación accesible de formularios ---
     Mensajes de error comprensibles, asociados con aria-describedby,
     y foco enviado al primer campo con error. */
  document.querySelectorAll('form[data-validate]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let firstInvalid = null;
      form.querySelectorAll('[required]').forEach((input) => {
        const field = input.closest('.field');
        if (!field) return;
        const errorEl = field.querySelector('.error-msg');
        const isCheckbox = input.type === 'checkbox';
        const valid = isCheckbox ? input.checked : input.value.trim() !== '';
        field.classList.toggle('has-error', !valid);
        if (errorEl) errorEl.hidden = valid;
        input.setAttribute('aria-invalid', String(!valid));
        if (!valid && !firstInvalid) firstInvalid = input;
      });
      if (firstInvalid) {
        firstInvalid.focus();
      } else {
        const successBanner = form.querySelector('[data-success-banner]');
        if (successBanner) {
          successBanner.hidden = false;
          successBanner.focus();
        } else {
          const redirect = form.dataset.validate;
          if (redirect && redirect !== 'true') window.location.href = redirect;
        }
      }
    });
  });

  /* --- Chat: enviar mensaje de demostración --- */
  const chatForm = document.querySelector('[data-chat-form]');
  if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = chatForm.querySelector('input[type="text"]');
      const text = input.value.trim();
      if (!text) return;
      const list = document.querySelector('[data-chat-list]');
      const row = document.createElement('div');
      row.className = 'chat-bubble-row me';
      row.innerHTML = `<div><div class="chat-bubble">${text.replace(/</g, '&lt;')}</div><p class="chat-time sr-only">Enviado ahora</p></div>`;
      list.appendChild(row);
      row.scrollIntoView({ behavior: 'smooth', block: 'end' });
      input.value = '';
    });
  }

  /* --- Me gusta en Momentos --- */
  document.querySelectorAll('[data-like]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const pressed = btn.getAttribute('aria-pressed') === 'true';
      btn.setAttribute('aria-pressed', String(!pressed));
      btn.classList.toggle('liked', !pressed);
    });
  });

  /* --- Solicitudes: cancelar / aceptar con retroalimentación --- */
  document.querySelectorAll('[data-request-cancel]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.request-card');
      card.style.transition = 'opacity .2s ease';
      card.style.opacity = '0';
      setTimeout(() => card.remove(), 200);
      announce('Solicitud cancelada.');
    });
  });

  function announce(msg) {
    let live = document.getElementById('live-region');
    if (!live) {
      live = document.createElement('div');
      live.id = 'live-region';
      live.setAttribute('role', 'status');
      live.className = 'sr-only';
      document.body.appendChild(live);
    }
    live.textContent = msg;
  }
});
