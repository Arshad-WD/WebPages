const html_code6 = document.querySelector('.html-code6 textarea');
const css_code6 = document.querySelector('.css-code6 textarea');
const js_code6 = document.querySelector('.js-code6 textarea');
const result = document.querySelector('#result');

function run() {
    //Storing Data In Local Storage
    localStorage.setItem('html_code6', html_code6.value);
    localStorage.setItem('css_code6', css_code6.value);
    localStorage.setItem('js_code6', js_code6.value);

    result.contentDocument.body.innerHTML = `<style> ${localStorage.css_code6}</style>` + localStorage.html_code6;
    result.contentWindow.eval(localStorage.js_code6);
}

html_code6.onkeyup = () => run();
css_code6.onkeyup = () => run();
js_code6.onkeyup = () => run();

html_code6.value = localStorage.html_code6;
css_code6.value = localStorage.css_code6;
js_code6.value = localStorage.js_code6;
