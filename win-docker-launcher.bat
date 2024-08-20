@echo off

echo  remove old container
docker stop react-mui-grid-x
docker rm react-mui-grid-x

echo remove docker image (react-mui-grid-x)
docker rmi react-mui-grid-x

echo build docker image
docker build -t react-mui-grid-x .

echo  create new container
docker run -d -p 80:80 --name react-mui-grid-x react-mui-grid-x

echo Delete react-build folder
rmdir /s /q build