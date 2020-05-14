## Mapfry

- **NodeJS:** 13.6.0
- **Yarn:** 1.21.1

Other packages versions can be found at the [```package.json```](package.json)

### PROJECT DESCRIPTION
- This project implements a ReactJS based front-end app for the company Mapfry

### Installing
- The project uses docker and docker-compose to unify all dependencies. To set up, run:
``` bash
  bin/docker_setup.sh
  docker-compose up
```

### Using
- To run the project you can use either
``` bash
  docker-compose up
```
or if you want to enable STD_IN (for debugger for example)
``` bash
  docker-compose run --service-ports app
```
- Commands in general can be run with ```docker-compose run app COMMAND```
- Look at the [```bin/docker_entrypoint.sh```](bin/docker_entrypoint.sh) for examples of commands.


### Testing
- The test suite uses jest for functionality testing and es-linter for code quality:
  - Lint (code quality/syntax errors)
  - Tests (components)
- Using docker-compose:
  - docker-compose run app lint
  - docker-compose run app test

### Deploying
- In order to deploy the application, just follow the guidelines for generating a production build for ReactJS
