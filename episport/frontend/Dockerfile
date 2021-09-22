FROM node:latest as build-stage

# Work directory in container 
WORKDIR /episport

COPY ./episport/package*.json ./

RUN npm install

# Copying local files in container's workdir
COPY ./episport .

# construit l'app pour la production en la minifiant
RUN npm run build


# étape de production
FROM nginx:alpine

COPY --from=build-stage /episport/build /usr/share/nginx/html

COPY ./episport/nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./episport/nginx/episport.conf /etc/nginx/conf.d/episport.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]