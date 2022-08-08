# Url Shortener

A simple project to create short URls using Typescript, express, mongo, vite and React.

# To Run

From the root, run `docker-compose up` and open your browser at http://localhost:8080.

# General Notes

Implementation is express with GraphQL API using Apollo + mongoose.

The UI is built with React and Apollo client.

Ideally this project would have an integration/E2E test.

The short url generation relys on nanoid with a custom alphabet, if the same id gets genetated twice, there will be an error due to a mongo unique index restraint. This could be mitigated by having a lookup and retry mechanism. I haven't built this due to time constraints.

For the docker build of both packages, it installs dependencies without a `yarn.lock`, this needs to be fixed and I've only left it this way due to lack of time. The problem is because the yarn workspace, there is a solution to this. I do not consider this acceptable.

# Development

1. Start a mongo DB instance with `docker run -e MONGO_INITDB_ROOT_USERNAME=urlshortener -e MONGO_INITDB_ROOT_PASSWORD=urlshortener -p27017:27017 mongo:latest`
2. In another terminal, at the root of this repo - run `yarn dev`. .env files in the packages/api and packages/web folder control the credentials and urls

Unit tests and lint can be run via `yarn test` and `yarn lint` from each package directory.
