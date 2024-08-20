FROM nginx:1.26.2-alpine

WORKDIR /usr/share/nginx/html

COPY /build/. .
COPY default.conf /etc/nginx/conf.d/.