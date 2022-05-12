# Reset
Color_Off='\033[0m'       # Text Reset
# Regular Colors
Red='\033[0;31m'          # Red
Green='\033[0;32m'        # Green
Purple='\033[0;35m'       # Purple


echo -e  $Red"REALIZANDO LA ACTIVACION DE DOCKER"$Color_Off
echo -e $Purple"SE REQUIERE DE USUARIO ROOT"$Color_Off
sudo service docker start

sleep 1
echo -e $Green"INTALANDO EL SERVIDOR WEB"$Color_Off
docker build -t ubuntu-web-node .

sleep 1
echo -e $Green"DESPLEGANDO CONTENEDOR DE LAS IMAGENE CREADA"$Color_Off
docker run -itd -p 80:3000 ubuntu-web-node 