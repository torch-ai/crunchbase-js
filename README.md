# Crunchbase services

> This package provides a standardized layer for accessing [crunchbase services](https://data.crunchbase.com/docs/using-the-api) along with data types.

Current version: v3.1

# Usage

## Installation

Ensure you have access to the private artifact repositories through a `.npmrc` file.
Install the service in your own project

```
npm install @demo/crunchbase-services
```

## Initialization

At the top of your application, or in an imported configuration file:

```js
// Import the service definition and environment constants
import CrunchbaseService from "@demo/crunchbase-services";

// Create an instance of the service
const options = {};
const crunchbaseService = new CrunchbaseService(process.env.API_KEY, options);
export default crunchbaseService;
```

## Calls

```js
try {
  const results = await apiService.getOrganizations({
    name: "Tesla"
  });
} catch (error) {}
```

# Contributing

## Installation

Clone the package from the [repository](https://dev.azure.com/TorchResearchLLC/TORCH%20Demo%20Backlog/_git/crunchbase-service).

```
npm install
```

## Testing

A local file `.env` file will need to be created with credentials for the api:

```text
API_KEY=****
```

You may run tests in a continuous watch mode:

```
npm run-script test:watch
```

## Publishing

Be sure to bump the package.json version first.
Run the publish command which will: run tests, build js files will rollup, emit typescript files, and publish to our private repositories.

```
npm publish
```
