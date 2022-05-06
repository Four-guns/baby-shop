FROM nginx
COPY ./dist/ /usr/share/nginx/html/
# 第一步nginx配置文件名称
COPY ./default.conf /etc/nginx/conf.d/baby-shop.conf
EXPOSE 80
