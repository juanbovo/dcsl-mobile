# DCSL GuideSmiths Phone Catalog

## Introduction
The challenge is to create a phone catalogue app from scratch

![alt](https://c.tenor.com/7FvMpzjFTyAAAAAC/smartphone-cat.gif "Your new mobile phone")

It contains 2 mandatory parts:
- A backend folder with necessary code to run a server. "npm run dev" on folder starts a nodemon instance on port 8080. DB is hosted on MongoDB Atlas, so starting a local database is not required.
- A frontend folder with a React project. "npm start" to launch it on port 3000.

## Planning
- Project mandatory requirements were provided by DCSL GuideSmiths staff.
- There's a Trello board that I've used to track my work: https://trello.com/b/VGBqOeOK/dcsl-mobile

## Functional description
#### Mandatory:
- A REST API providing phones’ information.
    * It can be implemented in whatever language you are most comfortable with (NodeJS / Rails / Java, ...).
    * It should have at least one endpoint:
        - Method: GET
        - Path: /phones
- A REACT APP allowing the user to browse the phones catalog.
    * The look and feel should not be super sophisticated but it should be decent and somehow responsive so that it doesn’t look terrible on a mobile phone. ○ The home page should display the list of phones. Make sure to display images of them.
    * It should be possible to select a given phone and obtain the phone details view displaying a few more info about that phone.
    * The phones’ information should be retrieved from the above described API.
    * There should be a spinner or placeholder component while the REST API request is ongoing and the app is waiting for phones data.
- A GitHub public repository holding the code of the above points. 
    * It should have a README.md describing the product and explaining how to run both the REST API and the REACT APP.

#### Nice to have
- Implemented CRUD capabilities.
    * Phone creation.
    * Phone deletion.
    * Phone update.
- Persistance layer: MongoDB Atlas.
- Dockerize project.
    * https://hub.docker.com/repository/docker/juanbovo/dcsl-api
    * https://hub.docker.com/repository/docker/juanbovo/dcsl-app
    * You can find a docker-compose.yml file in this repo too.

## Technologies
Node.js, Express.js, MongoDB (via Mongoose) for backend, and React and Tailwind for frontend. Some npm packages were also used for development.

## Postman Collection
- https://www.getpostman.com/collections/5fe0f1702a13fd5a75c0

## To-do
- Implement testing: not performed due personal time constraints.
- State management.
