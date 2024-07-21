const html_code1 = document.querySelector('.html-code1 textarea');
const css_code1 = document.querySelector('.css-code1 textarea');
const js_code1 = document.querySelector('.js-code1 textarea');
const result1 = document.querySelector('#result');

function run() {
    //Storing Data In Local Storage
    localStorage.setItem('html_code1', html_code1.value);
    localStorage.setItem('css_code1', css_code1.value);
    localStorage.setItem('js_code1', js_code1.value);

    result1.contentDocument.body.innerHTML = `<style> ${localStorage.css_code1}</style>` + localStorage.html_code1;
    result1.contentWindow.eval(localStorage.js_code1);
}

html_code1.onkeyup = () => run();
css_code1.onkeyup = () => run();
js_code1.onkeyup = () => run();

html_code1.value = localStorage.html_code1;
css_code1.value = localStorage.css_code1;
js_code1.value = localStorage.js_code1;
