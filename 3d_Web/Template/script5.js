const html_code5 = document.querySelector('.html-code5 textarea');
const css_code5 = document.querySelector('.css-code5 textarea');
const js_code5 = document.querySelector('.js-code5 textarea');
const result5 = document.querySelector('#result');

function run() {
    //Storing Data In Local Storage
    localStorage.setItem('html_code5', html_code5.value);
    localStorage.setItem('css_code5', css_code5.value);
    localStorage.setItem('js_code5', js_code5.value);

    result.contentDocument.body.innerHTML = `<style> ${localStorage.css_code5}</style>` + localStorage.html_code5;
    result.contentWindow.eval(localStorage.js_code5);
}

html_code5.onkeyup = () => run();
css_code5.onkeyup = () => run();
js_code5.onkeyup = () => run();

html_code5.value = localStorage.html_code5;
css_code5.value = localStorage.css_code5;
js_code5.value = localStorage.js_code5;
