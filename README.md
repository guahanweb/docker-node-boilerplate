# Docker Node Boilerplate

This project contains all the necessary components to build a well structured, scalable application quickly. By leveraging tooling like [Hapi](https://hapijs.com/), [React](https://facebook.github.io/react/), [Mocha](https://mochajs.org/) and [Supertest](https://github.com/visionmedia/supertest), you can have a fully functional docker image build to host your web application or service in a matter of minutes.

# Getting Started

## With Docker

1. Install Docker for [Mac](https://www.docker.com/docker-mac) or [Windows](https://www.docker.com/docker-windows)
2. Clone the repository
3. Build and run your image:

```bash
$ cd docker-node-boilerplate
$ ./build
$ docker run -i \
  -p 4118:4118 \
  -t guahanweb/docker-node-boilerplate:$(cat version)
```

## Without Docker

1. Clone the repository
2. Build and run the app:

```bash
$ cd docker-node-boilerplate/app
$ npm run setup
$ npm run dev
[info] listening at http://localhost:4118
```

## Test your endpoints

Whether you're running on docker or not, both the previous methods will expose the running port on `localhost` for you. Navigate to the `/ping` or `/service-status` endpoint to verify you are up and running:

* **Ping**: `http://localhost:4118/ping`
* **Service status**: `http://localhost:4118/service-status?v&h`

## Default NPM scripts

While it is encouraged that you customize your project and tune the scripts to your style, the following scripts are available "out-of-the-box" with this boilerplate.

### `npm run dev` - development mode

Starts up your app with `nodemon` and watch for either server or client changes, building assets or restarting the service as necessary.

### `npm start` - production mode

Starts up your app directly in production mode.
This is the equivalent of running the following:

```bash
$ NODE_ENV=production node --harmony app/server
```

### `npm test`

Runs both sets of tests:

* **`:client`** - mocha tests defined in `app/test/client`
* **`:server`** - mocha tests defined in `app/test/server`


Executes mocha tests on the `app/test/server` directory.

### `npm run build`

Builds all necessary static assets for your web application.

* **Assets** - copies everything from `app/client/assets` into `dist`
* **CSS** - builds SCSS files into `dist/css`
* **JS** - uses Webpack to build artifacts into `dist/js`

### `npm run watch`

Builds all necessary static assets for web application from `npm run build` and watches them, rebuilding when they are altered.

**TODO:** connect to browser-sync for live reload (or React hot module swap)