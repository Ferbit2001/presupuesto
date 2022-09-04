this.url = 'v1/ingredient/' 

const create = (tag,text,id,...classes) => {
    let e = document.createElement(tag)
    text ? e.innerText = text : null;
    classes ? e.classList.add(...classes) : null;
    id ? e.setAttribute('data-id',id) : null;
    return e
}
const search_ingredient = ({target}) => {
    target.value.length >= 3 ? 
    (search_results.classList.remove('none'), search(target.value).then(renderIngredients))
    :
    (search_results.innerHTML = '', search_results.classList.contains('none') ? null : search_results.classList.add('none'))
}

const renderIngredients = (e) => {
    search_results.innerHTML = ''
    e.forEach(f => search_results.append(create('div', f.name, f._id, 'element')));
}
agregar.addEventListener('click',()=>{
    let name = document.getElementById('name').value
    let carbs = document.getElementById('carbs').value
    let protein = document.getElementById('protein').value
    let fat = document.getElementById('fat').value
    let calories = document.getElementById('calories').value
    let grams_per_unit = document.getElementById('grams_per_unit').value
    add({name,carbs,protein,fat,calories,grams_per_unit}).then(console.log)
})
obtener.addEventListener('click',()=>all().then(renderIngredients))
search_input.addEventListener('input',search_ingredient)
search_results.addEventListener('click',({target:{className:c,dataset:{id}}})=>(c=="element")?get(id).then(e=>{
    hideAndSeek()
    let ke = Object.keys(e)
    ke.shift()
    ke.forEach(e=>console.log(document.getElementById(e)))
}):null)