
## Installation
Install the latest node version 10 and npm support
Install the latest mongodb 4.0.11 and higher

## Docs
https://material-ui.com/getting-started/installation/

## Configuration

Make sure to update mongodb configuration `config/keys.js`
eg. `mongodb://localhost:27017/{database-name}`
```javascript
module.exports = {
  mongoURI: "YOUR_MONGO_URI_HERE",
  secretOrKey: "secret"
};
```

## Quick Start

```javascript
// Install dependencies for server & client
npm install && npm run client-install

// Run client & server with concurrently
npm run dev

// Server runs on http://localhost:5000 and client on http://localhost:3000
```
