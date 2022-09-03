const nav = document.getElementById('nav');
const content = document.getElementById('content');
const form_div = document.getElementById('form');
const add_btn = document.getElementById('add');
const search_input = document.getElementById('search');
const search_results = document.getElementById('search_results');
const hostname = window.location.origin + '/';
const obtener = document.getElementById('obtener');
const lista = document.getElementById('lista');
const cancelar = document.getElementById('cancelar')
const agregar = document.getElementById('agregar')

const hideAndSeek = () => {
    [...form_div.children].forEach(e=>{
        let el = document.getElementById(e.id);
    if(el.id != 'agregar' && el.id != 'cancelar'){el.value = ''}
    })
    form_div.classList.toggle("none");
    (form_div.classList.contains('none')^search_results.style.display=='grid')?switchDisplay() : null;
};
const switchDisplay = () => (search_results.style.display=="grid") ? search_results.style.display ='none' : search_results.style.display = 'grid'; 
const hideForm = () => form_div.classList.contains('none') ? null : form_div.classList.add('none');
const redirect = direction => direction ? window.location.href = hostname + direction : null;
const checkSize = e => e.innerWidth < e.innerHeight ? content.style.width = '100%' : content.style.width = '68%';



checkSize(window);
window.addEventListener('resize', ()=>checkSize(window))
nav.addEventListener('click',({target}) => redirect(target.innerText.toLowerCase()))
add_btn.addEventListener('click', hideAndSeek)
cancelar.addEventListener('click',hideAndSeek)
search_input.addEventListener('click', hideForm)