## drake-capstone

A web application for social media analytics

#### Running locally

You must have the server running locally in order for the client to work.

- `yarn start:server`
- `yarn start:client`

The first time running locally, or whenever the firebase config updates, you must run `firebase functions:config:get > .runtimeconfig.json` in the `server` folder in order to get the required secrets for the server to run.

