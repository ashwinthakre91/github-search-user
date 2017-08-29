FROM nginx

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/

COPY dist /usr/share/nginx/html
EXPOSE 80
