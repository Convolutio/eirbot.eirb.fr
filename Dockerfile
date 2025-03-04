FROM alpine AS build

WORKDIR /app

COPY ./frontend .
RUN apk add hugo

RUN hugo

# ------------------------------------- #

FROM nginx:alpine AS prod

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/public /usr/share/nginx/html
COPY ./nginx.default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
