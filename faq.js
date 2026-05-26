(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', initFaq);

    function initFaq() {
        const items = document.querySelectorAll('.faq-item');
        if (!items.length) return;

        items.forEach(function (item) {
            const btn    = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            if (!btn || !answer) return;

            btn.addEventListener('click', function () {
                const isOpen = item.classList.contains('is-open');

                closeAll(items);

                if (!isOpen) {
                    openItem(item, answer, btn);
                }
            });
        });
    }

  // ── Abre um item ─────────────────────────────────────────
    function openItem(item, answer, btn) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');

        // Define max-height com a altura real do conteúdo
        answer.style.maxHeight = answer.scrollHeight + 'px';
    }

  // ── Fecha todos os itens ─────────────────────────────────
    function closeAll(items) {
        items.forEach(function (item) {
        const btn    = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
    
        item.classList.remove('is-open');
        if (btn)    btn.setAttribute('aria-expanded', 'false');
        if (answer) answer.style.maxHeight = '0';
        });
    }
})();
