# opensource.org.rw
[![Build Status](https://dev.azure.com/urbainishimwe/opensource.org.rw/_apis/build/status/rwandaopensource.opensource.org.rw?branchName=develop)](https://dev.azure.com/urbainishimwe/opensource.org.rw/_build/latest?definitionId=5&branchName=develop)
![Build and deploy Node.js app to Azure Web App - ros-frontend(staging)](https://github.com/rwandaopensource/opensource.org.rw/workflows/Build%20and%20deploy%20Node.js%20app%20to%20Azure%20Web%20App%20-%20ros-frontend(staging)/badge.svg?branch=develop)

This is the Frontend of opensource.org.rw, find the backend [here](https://github.com/rwandaopensource/backend.opensource.org.rw)

### DEPLOYMENTS
- develop branch(staging) is deployed at [staging.opensource.org.rw](https://staging.opensource.org.rw)
- master branch(production) is deployed at [www.opensource.org.rw](https://www.opensource.org.rw) or [opensource.org.rw](https://opensource.org.rw)


The main reason behind this website is to help people know:
- what we are building.
- stories inside our workspace.
- offer Services for our contributors.
- to implement the features from the backend, read this backend [README](https://github.com/rwandaopensource/backend.opensource.org.rw#readme)


### Have another good idea or feature**
- join our [slack workspace](http://bit.ly/2VmpgVp)
- join slack channel called **#opensource_org_rw**
- check the [pivotal tracker](https://www.pivotaltracker.com/n/projects/2437162)
- raise a **ticket** on pivotal tracker(if you gonna work on it) or **issue** github(if you need someone else to work on it)

### SETTING UP
It's mandatory to use [NODE 12.X](https://nodejs.org/en/download/current/), the main stack is **ReactJs**, **Bulma SCSS** as a markup, and **JQuery**.

- clone this repo and cd to the working directory
- install dependencies by `npm install` note that **yarn** is not configured
- start the app in development mode and hot reloading `npm run start:dev` 
- start the app in production mode `npm start`
- running tests `npm test`
- to generate a a build folder **ES5** `npm run build`
- **HAPPY CODING! 😎**

### CONTRIBUTIONS
ARE VERY WELCOMED 🙏, once your PR is merged don't forget to add yourself in file called **AUTHORS**

### License
Licensed by BSD 3-Clause License

