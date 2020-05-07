# Market search.
The Market search application is a full-stack javascript application built with Nestjs and Reactjs to search markets close to your location.

## Prerequisites
* node >= 9.X
  * All OSes: [click here for installation instructions](https://nodejs.org/en/download/)
* Google maps API
  * Make sure you create and account with google and enable GOOGLE GEOCODING API and MAPS JAVASCRIPT API

## Basic Build Instructions

A quick guide to basic setup of the **market-demo** project on your local machine


#### Clone
```
$ git clone https://github.com/simdi/market-demo.git
```

#### Bootstrap and link packages

```
$ cd market-demo
$ yarn install
$ yarn run bootstrap
```

#### Setup .env files for both the frontend and the backend applications
1. Web .env setup [market-web](packages/market-web)
```
$ cd packages/market-web 
$ touch .env
$ echo REACT_APP_GOOGLE_MAPS_API_KEY=Your_google_maps_api_key >> .env
```
2. API .env setup [market-web](packages/market-api)
```
$ cd packages/market-api 
$ touch .env
$ echo GOOGLE_MAPS_API_KEY=Your_google_maps_api_key >> .env
$ echo SECRET_KEY=yourSecret >> .env
$ echo PORT=8001 >> .env
```

#### Running packages

1. Run API [market-api](packages/market-api)
```
$ cd packages/market-api
$ yarn start:dev
``` 
2. Run web [market-web](packages/market-web)
```
$ cd packages/market-web
$ yarn start
```

##
If you have successfully completed the above setup, then you are good to go.