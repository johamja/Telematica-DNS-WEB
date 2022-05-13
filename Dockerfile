# instalanado la imagen de ubuntu
FROM ubuntu:20.04

# EJECUCION DE COMANDOS
# añadiendo variable de i
# RUN TZ='America/Bogota'; export TZ
ENV TZ=America/Bogota
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
# actualizar
RUN apt update
# instalacion de npm 
RUN apt install -y npm
# creando carpeta de almacenamiento
RUN mkdir /root/node-web
# copiar los archivos de la paguina web
COPY Node /root/node-web
# añadiendo el comando de ejecucion en el .bashrc
RUN echo "cd /root/node-web/ && npm start" >> /root/.bashrc

# abriendo puertos para las imagen
EXPOSE 3000 