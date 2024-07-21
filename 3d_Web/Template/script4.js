const html_code4 = document.querySelector('.html-code4 textarea');
const css_code4 = document.querySelector('.css-code4 textarea');
const js_code4 = document.querySelector('.js-code4 textarea');
const result = document.querySelector('#result');

function run() {
    //Storing Data In Local Storage
    localStorage.setItem('html_code4', html_code4.value);
    localStorage.setItem('css_code4', css_code4.value);
    localStorage.setItem('js_code4', js_code4.value);

    result.contentDocument.body.innerHTML = `<style> ${localStorage.css_code4}</style>` + localStorage.html_code4;
    result.contentWindow.eval(localStorage.js_code4);
}

html_code4.onkeyup = () => run();
css_code4.onkeyup = () => run();
js_code4.onkeyup = () => run();

html_code4.value = localStorage.html_code4;
css_code4.value = localStorage.css_code4;
js_code4.value = localStorage.js_code4;
