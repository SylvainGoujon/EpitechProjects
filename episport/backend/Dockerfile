# Development step
FROM node:latest AS development

# Work directory in container 
WORKDIR /episport

COPY ./episport/package*.json ./

RUN npm install --only=development

# Copying local files in container's workdir
COPY ./episport .

RUN mv ormconfig.docker.json ormconfig.json

# Buiding app for production, minifying it
RUN npm run build


# Production step
FROM node:latest as production

ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}

WORKDIR /episport

COPY ./episport/package*.json ./

RUN npm install --only=production

COPY ./episport .

RUN mv ormconfig.docker.json ormconfig.json

COPY --from=development /episport/dist ./dist


CMD ["node", "dist/main"]