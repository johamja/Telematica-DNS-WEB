# Description
El proyecto consta de una página web que emula una red social, para ello tiene las siguientes plantillas `inicio, información, Loguin y registro` que será lo que encontraras en la paganía web, las tecnologías usadas en este proyecto es `node` , `express` y `ejs` que hacen parte del proyecto, el objetivo de este proyecto es realizar una página web en la que se puedan registrar usuarios y se puedan guardar, actualmente el desarrollo es sin base de datos, pero el objetivo es el desarrollo de una api que guarde la información en una base de datos, la cual puedan tener muchas interacciones.
## Directorios
``` bash
.
├── [ 565]  Dockerfile # => configuracion de la imagen de docker
├── [4.0K]  Node
│   ├── [4.0K]  css # =>  carpeta de hojas de estilos 
│   │   ├── [7.9K]  home.css  
│   │   ├── [3.7K]  informacion.css  
│   │   ├── [4.0K]  loguin.css  
│   │   ├── [1.3K]  mensaje.css  
│   │   ├── [1.1K]  register.css
│   │   └── [ 316]  usuario.css
│   ├── [4.0K]  html # => carpeta de html
│   │   ├── [4.6K]  home.html # => inicio de la paguina de omix
│   │   ├── [ 14K]  informacion.html # => informacion de la paguina de omix
│   │   ├── [1.2K]  loguin.html # => form para loguearte 
│   │   └── [4.0K]  users
│   │       ├── [ 555]  admin.ejs
│   │       ├── [2.1K]  mensaje.ejs # => plantilla para manejar los errores
│   │       ├── [1.5K]  register.ejs
│   │       └── [ 632]  usurio.ejs
│   ├── [4.0K]  img # =>  carpeta de imagenes 
│   │   ├── [4.0K]  img-error
│   │   │   └── [2.3M]  Blur.jpg //
│   │   ├── [4.0K]  img-home
│   │   │   ├── [ 227]  akindele-ibukun-nGiVs81VHIQ-unsplash.jpg:Zone.Identifier
│   │   │   ├── [7.7K]  appstore.svg
│   │   │   ├── [ 224]  brock-wegner-159slvEjHzs-unsplash.jpg:Zone.Identifier
│   │   │   ├── [ 15K]  chat.png
│   │   │   ├── [ 225]  davide-aracri-_SkbvL-oAfI-unsplash.jpg:Zone.Identifier
│   │   │   ├── [ 46K]  fondo-1.jpg
│   │   │   ├── [8.0K]  gogleplay.svg
│   │   │   ├── [1.9K]  hogar.png
│   │   │   ├── [ 225]  mahdi-bafande-wZOMyq05XlI-unsplash.jpg:Zone.Identifier
│   │   │   ├── [5.4M]  ret (1).jpg
│   │   │   ├── [3.2M]  ret (2).jpg
│   │   │   ├── [921K]  ret (3).jpg
│   │   │   ├── [5.5M]  ret (4).jpg
│   │   │   ├── [2.6K]  usuario.png
│   │   │   └── [1.6M]  video2.mp4
│   │   └── [4.0K]  img-loguin
│   │       └── [6.5M]  PATAGONIA.mp4
│   ├── [4.1K]  index.js # => archivo de configuracion del servidor de node 
│   ├── [ 55K]  package-lock.json
│   └── [ 441]  package.json # => archivo de configuracion de los paquetes o dependencias
├── [1.6K]  README.MD
└── [ 526]  script.sh # => script que despliegua todo automaticamente

296 directories, 1374 files
```
# Ejecucion del script 
Para la ejecución del proyecto se tiene que dar inicio al archivo `scrpit.sh` con el comando que se muestra a continuación:
``` bash
 ./script.sh 
```
## Requerimientos del proyecto
Para la ejecución del proyecto se requiere de un entorno `Linux` en el que tenga instalado las siguientes aplicaciones
```
sudo apt install git && sudo apt install Docker
```
Con ello nos aseguramos de que se despliegue correctamente el proyecto, primero realizando la clonación del proyecto y después dar lugar al despliegue de una imagen del archivo `Dockerfile` que con la ejecución del `scrpit.sh` realizara el despliegue de un contenedor abierto en la ruta [localhost](http://localhost) 
## Desplegando el proyecto manualmente
En primer lugar, nos aseguramos de que el servicio de Docker esta funcionando correctamente 
´´´
sudo service docker start
´´´
Para ello tenemos que estar ubicados en la raíz del proyecto `/` y localizar el archivo `Dockerfile` para realizar el despliegue de la imagen ejecutamos el siguiente comando 
```
docker build -t ubuntu-web-node .
```
Luego buscamos la imagen en la lista de docker con el comando `docker images` y lanzamos un contenedor del REPOSITORY `ubuntu-web-node` para realizar el despliegue con las banderas siguientes `-itd` y también `-d` con el cual abriremos los puertos ` 80:3000` puerto-del-host:puerto-del-contenedor y realizamos la ejecución de el comando siguiente 
```
docker run -itd -p 80:3000 ubuntu-web-node
```
# Descripcion de la api-web con node.js
Como la aplicación es basada en el lado del servidor entonces tenemos que se manejan rutas y tipos de peticiones los cuales definen el comportamiento de la información en los formularios que se presentan en la página web

| Rutas        | Tipo de petición  | descripción                            |
|--------------|-------------------|----------------------------------------|
| /            | GET               | Inicio de la página                    |
| /loguin      | GET POST          | Pagina para iniciar sesión             |
| /Informacion | GET               | Página de la información del sitio web |
| /register    | GET POST          | Página de formulario de inscripción    |


# Implementaticion del proyecto 
El proyecto tiene como `dependencias` a express y ejs , estas dependencias son necesarias para el proyecto para que sea correcto el funcionamiento y el despliegue, pero también tenemos para el `Entorno de desarrollo` la cual usamos nodemon que nos permite tener el servidor corriendo mientras le hacemos modificaciones y se recarga automáticamente

``` json
{
  "name": "api-web-node",
  "version": "1.0.0",
  "description": "trabajo de TELEMATICA",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon index.js",
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Jaider Joham Morales Franco",
  "license": "ISC",
  "dependencies": {
    "ejs": "^3.1.8",
    "express": "^4.18.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.16"
  }
}
```

# información para el usuario 
se encuentra en el archivo pdf `Introducción al usuario` [abrir archivo](/Introducci%C3%B3n%20al%20usuario.pdf)
