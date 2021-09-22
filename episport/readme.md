Table of Contents

![1200px-Nestjs-logo svg](data:image/png;base64,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)


##  Getting Started ## 
Visit https://docs.nestjs.com/first-steps to get started with Nest.js.

## Documentation ## 
Visit https://docs.nestjs.com/ to view the full documentation !

## About "Episport":

Episport is a videos plateform where you can find five categories of sport: crossfit, yoga, fitness, stretching and danse for 9€/month and where all the coaches from all around the world can download their own courses online.
You can then watch videos wherever you are and on any device.
For that, you just need to click on register on the welcome page; you will be then able to access the home page with the different categories and choose the videos you would like to watch. 
As long as you are registered, you can also decided to keep videos and/or coaches into your favorite section.

## Technologies ## 
A list of technologies used within the project:

  - ReactJs 16.13.1
  - NodeJs 16.1.0
  - NestJs 7.6.15
  - TypeScript 4.2.3
  - MariaDB 10.5
  - Bootstrap 5.0.1


## How to get started ? :
  - Clone the repo
  $ git clone git@github.com:sylvain-goujon-epitech/episport.git
  
  
## Install NPM dependencies :
- cd episport/backend/episport

  $  npm install

- cd episport/frontend/episport

  $  npm install


## Database configuration :

create db configuration file :

backend/episport/ormconfig.json :

        {
            "type": "mysql",
            "host": "localhost",
            "port": 3306,
            "username": "****",
            "password": "****",
            "database": "episport",
            "entities": ["dist/**/entities/*.entity.js"],
            "migrations": ["dist/migration/*.js"],
            "cli": {
            "migrationsDir": "migration"
            },
            "synchronize": true
        }

File up your username and password with your informations.
    
Open MariaDB and create an episport table. 
  
## Run :
🚀  for episport-backend : 
- cd episport/backend/episport
- npm run start
- http://localhost:5000/

🚀  for episport-frontend : 
- cd episport/frontend/episport
- npm start
- http://localhost:3000/

## Eventually :

After all these steps are executed, the following tables should appear in MariaDB :

category           |
| coach              |
| favorite_coach     |
| favorite_video     |
| user               |
| video 

