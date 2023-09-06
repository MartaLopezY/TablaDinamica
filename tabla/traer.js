$(document).ready(function(){
    $("#obtener").click(function(){
    $.ajax({
          type: "GET",
          url: 'datos.php',
          datatype:"json",
         }).done(function (response){
          let respuestaParseada = JSON.parse(response);
          let nombre = respuestaParseada.nombre;
          let apellidos = respuestaParseada.apellidos;
          let edad = respuestaParseada.edad;
          let telefono = respuestaParseada.telefono;
          crearEncabezado();
          recorrerUsuarios(nombre,apellidos,edad,telefono);
         });
          });
    $("#mostrarForm").click(function(){
    $('#formulario').toggle();
    $("#Agregar").click(function(){
      let formu = document.getElementById('formulario');
      let nombre = document.getElementById('fname').value;
      let apellidos =document.getElementById('lname').value;
      let edad= document.getElementById('edad').value;
      let telefono= document.getElementById('phone').value;
      insertarUsuario(nombre,apellidos,edad,telefono);
      formu.reset();
    });
});

    function crearEncabezado(){
    if(document.getElementById("encabezado").rows.length==0){
    let titulo = document.getElementById("encabezado");
    let tr = document.createElement("tr");
    let encabezado1 = document.createElement("th");
    encabezado1.innerHTML = "Nombre";
    let encabezado2 = document.createElement("th");
    encabezado2.innerHTML = "Apellidos";
    let encabezado3 = document.createElement("th");
    encabezado3.innerHTML = "Edad";
    let encabezado4 = document.createElement("th");
    encabezado4.innerHTML = "Telefono";
    tr.appendChild(encabezado1);
    tr.appendChild(encabezado2);
    tr.appendChild(encabezado3);
    tr.appendChild(encabezado4);
    titulo.appendChild(tr);
    }
    }
    function recorrerUsuarios(nombre,apellidos,edad,telefono){
    let lista = document.getElementById("myTable");
    if(lista.rows.length == nombre.length){
      alert("Los usuarios ya han sido añadidos");
      }
    else{
      for(let i=lista.rows.length;i<nombre.length;i++){
            insertarUsuario(nombre[i],apellidos [i],edad [i],telefono[i]);
         }
        }
    }
    function insertarUsuario(nombre,apellidos,edad,telefono){
    let lista = document.getElementById("myTable");
    let tr = document.createElement("tr");
    let columna1 = document.createElement("td");
    columna1.innerHTML = nombre;
    let columna2 = document.createElement("td");
    columna2.innerHTML = apellidos;
    let columna3 = document.createElement("td");
    columna3.innerHTML =edad;
    let columna4 = document.createElement("td");
    columna4.innerHTML = telefono;
    tr.appendChild(columna1);
    tr.appendChild(columna2);
    tr.appendChild(columna3);
    tr.appendChild(columna4);
    lista.appendChild(tr);
    }
});