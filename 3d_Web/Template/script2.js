const html_code2 = document.querySelector('.html-code2 textarea');
const css_code2 = document.querySelector('.css-code2 textarea');
const js_code2 = document.querySelector('.js-code2 textarea');
const result = document.querySelector('#result');

function run() {
    //Storing Data In Local Storage
    localStorage.setItem('html_code2', html_code2.value);
    localStorage.setItem('css_code2', css_code2.value);
    localStorage.setItem('js_code2', js_code2.value);

    result.contentDocument.body.innerHTML = `<style> ${localStorage.css_code2}</style>` + localStorage.html_code2;
    result.contentWindow.eval(localStorage.js_code2);
}

html_code2.onkeyup = () => run();
css_code2.onkeyup = () => run();
js_code2.onkeyup = () => run();

html_code2.value = localStorage.html_code2;
css_code2.value = localStorage.css_code2;
js_code2.value = localStorage.js_code2;
