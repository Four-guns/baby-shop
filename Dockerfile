# FROM nginx
# COPY ./dist/ /usr/share/nginx/html/
# # 第一步nginx配置文件名称
# # COPY ./vhost.nginx.conf /etc/nginx/conf.d/bilibili-vue.conf
# EXPOSE 80

# Multi-stage
# 1) Node image for building frontend assets
# 2) nginx stage to serve frontend assets

# nginx state for serving content
FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder ./dist .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]