const html_code8 = document.querySelector('.html-code textarea');
const css_code8 = document.querySelector('.css-code textarea');
const js_code8 = document.querySelector('.js-code textarea');
const result = document.querySelector('#result');

function run() {
    //Storing Data In Local Storage
    localStorage.setItem('html_code8', html_code8.value);
    localStorage.setItem('css_code8', css_code8.value);
    localStorage.setItem('js_code8', js_code8.value);

    result.contentDocument.body.innerHTML = `<style> ${localStorage.css_code8}</style>` + localStorage.html_code8;
    result.contentWindow.eval(localStorage.js_code8);
}

html_code8.onkeyup = () => run();
css_code8.onkeyup = () => run();
js_code8.onkeyup = () => run();

html_code8.value = localStorage.html_code8;
css_code8.value = localStorage.css_code8;
js_code8.value = localStorage.js_code8;
