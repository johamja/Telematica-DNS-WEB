FROM ubuntu

# EJECUCION DE COMANDOS
# actualizar
RUN apt update
# instalando apache2
RUN apt install -y apache2
# eliminando archivos
RUN rm /var/www/html/index.html
# copiando los archivos
COPY html /var/www/html
COPY ".bashrc" /root/.bashrc
RUN chmod 644 /root/.bashrc

# abriendo puertos del contenedor
EXPOSE 80