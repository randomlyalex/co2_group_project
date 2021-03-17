## Co2 Tracker Quiz | MERN

A quiz designed to help users make better lifestyle choices with the co2 emissions, built over 4 days with the MERN stack, some minimal styling and a proof of concept admin tab to CRUD and show backend & db use.

## Demo

TBC to deploy

## Built using

#### Front-end

- [Vue 2](https://vuejs.org/v2/guide/) - Frontend framework
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

#### Animated
Main Use: 

![Main use](https://github.com/randomlyalex-codeclan/co2_group_project/blob/main/screenshots/C6gT4KWxaT.gif)

Admin CRUD:

![Admin CRUD](https://github.com/randomlyalex-codeclan/co2_group_project/blob/main/screenshots/azWhQW3e5n.gif)

## Static
Landing Page:

![Landing page](https://github.com/randomlyalex-codeclan/co2_group_project/blob/main/screenshots/Screenshot%202021-03-17%20at%2014.38.19.png)

Use-1:

![Use-1](https://github.com/randomlyalex-codeclan/co2_group_project/blob/main/screenshots/Screenshot%202021-03-17%20at%2014.41.07.png)

Use-2:

![Use-2](https://github.com/randomlyalex-codeclan/co2_group_project/blob/main/screenshots/Screenshot%202021-03-17%20at%2014.41.29.png)

Results:
![Results](https://github.com/randomlyalex-codeclan/co2_group_project/blob/main/screenshots/Screenshot%202021-03-17%20at%2014.40.45.png)

Admin:

![Admin](https://github.com/randomlyalex-codeclan/co2_group_project/blob/main/screenshots/Screenshot%202021-03-17%20at%2014.52.28.png)

Admin Add a question expand:

![Admin-Add-Q-Expand](https://github.com/randomlyalex-codeclan/co2_group_project/blob/main/screenshots/Screenshot%202021-03-17%20at%2014.52.38.png)

Admin Edit a Question expand:

![Admin-Edit-Q-Expand](https://github.com/randomlyalex-codeclan/co2_group_project/blob/main/screenshots/Screenshot%202021-03-17%20at%2014.52.48.png)




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




