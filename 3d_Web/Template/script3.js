const html_code3 = document.querySelector('.html-code3 textarea');
const css_code3 = document.querySelector('.css-code3 textarea');
const js_code3 = document.querySelector('.js-code3 textarea');
const result = document.querySelector('#result');

function run() {
    //Storing Data In Local Storage
    localStorage.setItem('html_code3', html_code3.value);
    localStorage.setItem('css_code3', css_code3.value);
    localStorage.setItem('js_code3', js_code3.value);

    result.contentDocument.body.innerHTML = `<style> ${localStorage.css_code3}</style>` + localStorage.html_code3;
    result.contentWindow.eval(localStorage.js_code3);
}

html_code3.onkeyup = () => run();
css_code3.onkeyup = () => run();
js_code3.onkeyup = () => run();

html_code3.value = localStorage.html_code3;
css_code3.value = localStorage.css_code3;
js_code3.value = localStorage.js_code3;
