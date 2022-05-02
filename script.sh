service docker status
sudo service docker start

sleep 5

echo "hola"
cd ServidorDNS/
echo "INTALANDO EL SERVIDOR DNS"
pwd
docker build -t ubuntu-dns .
cd ..
cd ServidorWEB/
echo "INTALANDO EL SERVIDOR WEB"
pwd
docker build -t ubuntu-web .
 
echo "VERIFICANDO EL FUNCIONAMIENTO"
docker ps

sleep 2
echo "VERIFICANDO LAS IMAGENES CREADAS"
docker images

sleep 1
echo "DESPLEGANDO CONTENEDORES DE LAS IMAGENES CREADAS"
echo "imagen dns"
docker run -itd -p 53:53 ubuntu-dns
echo "imagen web"
docker run -itd -p 80:80 ubuntu-web 