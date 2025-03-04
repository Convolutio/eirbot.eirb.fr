FROM alpine AS build

# ------------------------------------- #

FROM nginx:alpine AS prod

COPY ./nginx.default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
