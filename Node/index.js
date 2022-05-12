const { render } = require('ejs');
const { response } = require('express');
const express = require('express'); // importando express
const { request } = require('http');
const app = express() // crenado la aplicación de express
const path = require('path')

// establecer el motor de visualización en ejs
app.set('view engine', 'ejs');


//Para poder capturar los datos del formulario (sin urlencoded nos devuelve "undefined")
app.use(express.urlencoded({ extended: false }));
app.use(express.json());//además le decimos a express que vamos a usar json

// archivos estaticos de css
app.use(express.static('css'))
// imagenes 
app.use(express.static('img'))

// creando una variable 
const lista_usuarios = [['jaider joham morales', '11 de marzo del 2002', '11 años', 'samaniego', 'joham@omix.com', '3185336864', 'Masculino']]



// un accesor (req, res) =>{ 'contendio de lo que queremos enviar' }
// HOME
app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'html/home.html'));
})


// LOGUIN
app.get('/Loguin', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'html/loguin.html'));
})


// INFORMACION
app.get('/Informacion', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'html/informacion.html'));
})

// REGUISTRO
app.get('/register', async (request, response) => {
    // console.log(__dirname)
    response.render(__dirname + '/html/users/register.ejs');
})

// POST DE VALIDACION DE USUARIOS EN LA LISTA ANIDADA
app.post('/Loguin', (request, response) => {
    lista_usuarios.forEach(element => {
        if (element[4] == request.body.correo && element[5] == request.body.contraseña) {
            response.render(__dirname + '/html/users/usurio.ejs', {
                nombre: element[0],
                fecha_nacimiento: element[1],
                edad: element[2],
                ciudad_actual: element[3],
                sexo: element[6],
            })
        } else if (element[4] == request.body.correo && element[5] != request.body.contraseña) {
            response.render(__dirname + '/html/users/mensaje.ejs', {
                tipo: "error de loguin 1",
                m1: " la contraseña no es correcta"
            })
        }
    })
    response.render(__dirname + '/html/users/mensaje.ejs', {
        tipo: "error de loguin 2",
        m1: "el correo no esta reguistrado"
    })
    console.log(lista_usuarios)
})

// POST DE CREACION DE UN NUEVO USUARIO
app.post('/register', (request, response) => {
    lista_usuarios.forEach(element => {
        if (element[4] == request.body.correo) {
            response.render(__dirname + '/html/users/mensaje.ejs', {
                mensaje: "Ocurrio un error porque el correo " + request.body.correo + " ya se encuentra asociado a un usuario",
                tipo: "erro-reguistro"
            });
        } else {
            if (request.body.correo == "" && request.body.contraseña == "") {
                response.render(__dirname + '/html/users/mensaje.ejs', {
                    tipo: "error de reguistro caracteres nulos",
                    m1: "no ingresaste un usuario y contraseña"
                })
            } else {
                lista_usuarios.push([
                    request.body.nombre,
                    request.body.fecha_nacimiento,
                    request.body.edad,
                    request.body.ciudad_actual,
                    request.body.correo,
                    request.body.contraseña,
                    request.body.genero,
                ])
                response.render(__dirname + '/html/users/mensaje.ejs', {
                    tipo: "reguistro-exitoso",
                    m1: request.body.nombre,
                    m2: request.body.correo
                });
            }
        }
    });
})


app.get('/admin', (request, response) => {
    response.render(__dirname + '/html/users/admin.ejs', { lista: lista_usuarios })
})
// creando un dato constante del puerto de escucha del servidor
const PORT = 3000
app.listen(PORT, () => {
    console.log(`el servidor esta corrinedo en el port http://localhost:${PORT}/`)
})