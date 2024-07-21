const html_code7 = document.querySelector('.html-code7 textarea');
const css_code7 = document.querySelector('.css-code7 textarea');
const js_code7 = document.querySelector('.js-code7 textarea');
const result = document.querySelector('#result');

function run() {
    //Storing Data In Local Storage
    localStorage.setItem('html_code7', html_code7.value);
    localStorage.setItem('css_code7', css_code7.value);
    localStorage.setItem('js_code7', js_code7.value);

    result.contentDocument.body.innerHTML = `<style> ${localStorage.css_code7776}</style>` + localStorage.html_code7;
    result.contentWindow.eval(localStorage.js_code7);
}

html_code7.onkeyup = () => run();
css_code7.onkeyup = () => run();
js_code7.onkeyup = () => run();

html_code7.value = localStorage.html_code7;
css_code7.value = localStorage.css_code7;
js_code7.value = localStorage.js_code7;
