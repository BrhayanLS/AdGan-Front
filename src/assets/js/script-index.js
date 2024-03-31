const endpoints = [{
    nombre: "All Owner",
    admin: "✅",
    user: "",
    invited: "",
    descripcion: "Ver todos los ganaderos, activos e inactivos"
}, {
    nombre: "Get By Id Owner",
    admin: "✅",
    user: "",
    invited: "",
    descripcion: "Obtener información de un ganadero por su ID"
}, {
    nombre: "Save Owner",
    admin: "",
    user: "",
    invited: "",
    descripcion: "Crear una cuenta de ganadero"
}, {
    nombre: "Update Owner",
    admin: "✅",
    user: "",
    invited: "",
    descripcion: "Actualizar información de un ganadero"
}, {
    nombre: "Delete Owner",
    admin: "✅",
    user: "",
    invited: "",
    descripcion: "Eliminar cuenta de un ganadero"
}, {
    nombre: "Owners",
    admin: "✅",
    user: "",
    invited: "",
    descripcion: "Ver cuentas de ganaderos activos"
}, {
    nombre: "All Cattle",
    admin: "✅",
    user: "✅",
    invited: "",
    descripcion: "Ver todos los animales, incluidos los vendidos"
}, {
    nombre: "Cattles",
    admin: "✅",
    user: "✅",
    invited: "",
    descripcion: "Ver animales existentes en la finca"
}, {
    nombre: "Get By Id Cattle",
    admin: "✅",
    user: "✅",
    invited: "",
    descripcion: "Obtener información de un animal por su ID"
}, {
    nombre: "Cattles Resume",
    admin: "✅",
    user: "✅",
    invited: "✅",
    descripcion: "Vista resumida de la información de los animales"
}, {
    nombre: "Sold",
    admin: "✅",
    user: "✅",
    invited: "",
    descripcion: "Ver animales vendidos e información de ventas"
}, {
    nombre: "Save Cattle",
    admin: "✅",
    user: "✅",
    invited: "",
    descripcion: "Crear un nuevo registro de animal"
}, {
    nombre: "Update Cattle",
    admin: "✅",
    user: "",
    invited: "",
    descripcion: "Actualizar información de un animal"
}, {
    nombre: "Delete Cattle",
    admin: "✅",
    user: "",
    invited: "",
    descripcion: "Eliminar un animal"
}, {
    nombre: "Dead Cattle",
    admin: "✅",
    user: "✅",
    invited: "",
    descripcion: "Ver animales ocultos que no están en ventas"
}, {
    nombre: "All Sales",
    admin: "✅",
    user: "",
    invited: "",
    descripcion: "Ver todas las ventas"
}, {
    nombre: "Sales",
    admin: "✅",
    user: "✅",
    invited: "",
    descripcion: "Ver ventas no ocultas"
}, {
    nombre: "Get By Id Sale",
    admin: "✅",
    user: "✅",
    invited: "",
    descripcion: "Obtener información de una venta por su ID"
}, {
    nombre: "Save Sale",
    admin: "✅",
    user: "",
    invited: "",
    descripcion: "Guardar una nueva venta"
}, {
    nombre: "Update Sale",
    admin: "✅",
    user: "",
    invited: "",
    descripcion: "Actualizar información de una venta"
}, {
    nombre: "Delete Sale",
    admin: "✅",
    user: "",
    invited: "",
    descripcion: "Eliminar una venta"
}, {
    nombre: "Login",
    admin: "",
    user: "",
    invited: "",
    descripcion: "Iniciar sesión para obtener un token de acceso"
}];

const table = document.getElementById("table-endpoint");
let body = document.createElement('tbody');
let documentFragment = document.createDocumentFragment();

for (endpoint in endpoints) {
    let data = endpoints[endpoint];
    let nombre = data["nombre"];
    let admin = data["admin"];
    let user = data["user"];
    let invited = data["invited"];
    let info = data["descripcion"];
    
    let row = document.createElement('tr'); // Creamos un elemento tr para cada fila
    row.innerHTML = `
        <th>${nombre}</th>
        <td>${admin}</td>
        <td>${user}</td>
        <td>${invited}</td>
        <td class="info">${info}</td>
    `;
    documentFragment.appendChild(row); // Añadimos cada fila al fragmento de documento
}
body.appendChild(documentFragment);
table.appendChild(body);



    /*const table = document.getElementById("table-endpoint");
    const tbody = table.querySelector('tbody');
    let htmlCode = '';
    endpoints.forEach(endpoint => {
      const { nombre, admin, user, invited, descripcion } = endpoint;
      htmlCode += `
        <tr>
          <td>${nombre}</td>
          <td>${admin}</td>
          <td>${user}</td>
          <td>${invited}</td>
          <td class="info">${descripcion}</td>
        </tr>
      `;
    });
    tbody.innerHTML = htmlCode;*/
