# Simple Node server to test GitHub OAuth flow

## Prerequisites

Requires an already registered OAuth app in [GitHub](https://github.com/settings/applications/new) with the following values

![alt text](https://user-images.githubusercontent.com/34455928/103910586-ff35c400-50d2-11eb-871e-d5c92b9e14e3.png "Registering GitHub Oauth app")

## Usage

1. In `src/config.js` update the values to match your `OAUTH_APP_CLIENT_ID` and `CLIENT_SECRET`
2. Run `npm install && npm start` and open `http://localhost:8000/auth/github`
