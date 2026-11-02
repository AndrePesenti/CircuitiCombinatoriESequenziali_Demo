FROM nginx:alpine

COPY index.html /usr/share/nginx/html/index.html
COPY fulladder.html /usr/share/nginx/html/fulladder.html
COPY latch.html /usr/share/nginx/html/latch.html
COPY assets /usr/share/nginx/html/assets

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
