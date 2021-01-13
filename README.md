# DOCKER INSTRUCTIONS

## How to build docker image
```sh
$ npm run docker:build:image
```

## How to run docker image in container
```sh
$ npm run docker:run:container
```

## How to connect interactive shell to docker image
```sh
$ npm run docker:run:shell
```

## How to connect interactive shell to running container
```sh
$ npm run docker:connect:shell
```

# GITHUB PAGES INSTRUCTIONS

## How to deploy your site to github pages
```sh
// (1) Make your code changes and confirm them work as expected
// (2) Run the following command: 
$ npm run deploy
// (3) Add, commit and push your changes i.e.
$ git add .
$ git commit -m "updated web site"
$ git push origin master
// (4) Check the url specified in the homepage of your package.json file i.e.
https://debugme.github.io/monsters-rolodex
```