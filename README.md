## Co2 Tracker Quiz | MERN

A quiz designed to help users make better lifestyle choices with the co2 emissions, built over 4 days with the MERN stack, some minimal styling and a proof of concept admin tab to CRUD and show backend & db use.

## Demo

TBC to deploy

## Built using

#### Front-end

- []Vue 2]([Introduction — Vue.js](https://vuejs.org/v2/guide/)) - Frontend framework
- CSS3

#### Back-end

- [Node.js](https://nodejs.org/en/) - Runtime environment for JS
- [Express.js](https://expressjs.com/) - Node.js framework, makes process of building APIs easier & faster
- [MongoDB](https://www.mongodb.com/) - Opens-source SQL database to store data
  
  

## Features

- Front end reads the questions from dband has one main component that is used to itteratively build the pages.
- Data indb determines the value of  co2 style of question, answers and more
- Results pages tallies all answered questions and dynamically updates if the user changes their answers.
- All questions are loaded into front end and persist (radio, slider and checkbox) the entire user session between tabs.
- MVP Admin tab allows CRUD of questions headings, answers and values used in the front end.



## Screenshots

#### Desktop/Tablet

![Desktop-1](https://github.com/amand33p/bug-tracker-pern-ts/blob/master/screenshots/desktop-1.jpg)
![Desktop-2](https://github.com/amand33p/bug-tracker-pern-ts/blob/master/screenshots/desktop-2.jpg)
![Desktop-3](https://github.com/amand33p/bug-tracker-pern-ts/blob/master/screenshots/desktop-3.jpg)
![Desktop-4](https://github.com/amand33p/bug-tracker-pern-ts/blob/master/screenshots/desktop-4.jpg)
![Desktop-5](https://github.com/amand33p/bug-tracker-pern-ts/blob/master/screenshots/desktop-5.jpg)

#### Mobile

![Mobile-1](https://github.com/amand33p/bug-tracker-pern-ts/blob/master/screenshots/mobile-1.jpg)
![Mobile-2](https://github.com/amand33p/bug-tracker-pern-ts/blob/master/screenshots/mobile-2.jpg)
![Mobile-3](https://github.com/amand33p/bug-tracker-pern-ts/blob/master/screenshots/mobile-3.jpg)
![Mobile-4](https://github.com/amand33p/bug-tracker-pern-ts/blob/master/screenshots/mobile-4.jpg)

## Usage



#### Client:

Cd into the client folder and install dependancies and run front end server for develpment:

```
cd client
npm install
npm run serve
```

#### Server:

Cd into the server folder and install dependancies and run front end server for develpment:

```
cd server
npm install
npm run server:dev
```

#### DB

This assumes a connection locally to mongoDB on:

```
mongodb://localhost:27017
```

But can be changed in server.js on line 16.




