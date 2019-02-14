FROM debian

RUN apt-get update
RUN apt-get install -y nginx
RUN apt-get install -y php-fpm

COPY default /etc/nginx/sites-available/default
CMD service nginx start && /bin/bash

