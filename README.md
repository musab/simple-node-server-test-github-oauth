# Simple Node server to test GitHub OAuth flow

## Prerequisites

Requires an already registered OAuth app in [GitHub](https://github.com/settings/applications/new) with the following values

![alt text](https://user-images.githubusercontent.com/34455928/103904841-d2ca7980-50cb-11eb-96ff-aa2ea0b02224.png "Registering GitHub Oauth app")

## Usage

1. In `src/config.js` update the values to match your `OAUTH_APP_CLIENT_ID` and `CLIENT_SECRET`
2. Run `npm install && npm start` and open `localhost:8000`
