document.addEventListener('scroll', function () {
    const fadeIns = document.querySelectorAll('._scr-item');
    fadeIns.forEach((el, index) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            setTimeout(() => {
                el.classList.add('visible');
            }, index * 500); // Delay animasi
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var copyButton = document.getElementById('copy-button');
    var copyTextElement = document.getElementById('copy-text');

    if (copyTextElement) {
        var copyText = copyTextElement.textContent;

        copyButton.addEventListener('click', function() {
            var textArea = document.createElement('textarea');
            textArea.value = copyText;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                alert('Text copied to clipboard!');
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
            document.body.removeChild(textArea);
        });
    } else {
        console.error('Text element not found');
    }

    document.getElementById('mobile-menu').addEventListener('click', function() {
        var navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    });
});