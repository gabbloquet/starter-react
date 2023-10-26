FROM node:21-alpine3.17 as build

WORKDIR /app
COPY . /app
RUN npm ci
RUN npm run build

FROM nginx:1.25.3-alpine
EXPOSE 80
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html