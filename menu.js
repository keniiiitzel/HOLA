fetch(menu.json)

.then(response => response.json())
//que hace? esta linea toma el iobejtop de respuesta obrtenido del fetch y utiliza el metodo.json() para convertir el cuerpo de la respuesta en un objeto Javascrpt (esto asume el cuerpo de la respuesta esta en formulario JSON).
.then(data =>{
    const menuContainer =document.getElementById('menu-container');
    //que hace? Aqui se procesan los datos JSON ya convertdios. Se obtiene una referiencia el contenedor del menu en el HTML mediante getElementByid ('menu-container'), luego se litera sobre los elementos (categorias) del menu.
data.items.array.forEach(category => {
    const categoryTitle= document.createElement('h2');
    //que hace? Aqui se crea un elemento h2, se asigna el nombre de la categoria como su contenido del texto , luego se anade este titulo al contenedor menu
    categoryTitle.textContent= category.category;
    menuContainer.appendChild(categoryTitle);

    const table= document.createElement('table');
    //Que hace? se crea un elemento table para cada categoria. Ademas, se prepara el encabezado (tablehead) con las columnas pertinentes. tableBody se inicializa vacio y se llenara con los elementos de la categoria.
     const tablehead= <tr><th>Foto</th><th>Descripcion</th><th>Descripcion</th><th>Precio</th></tr>;
     let tableBody='';

});
})