# Crunchbase services

> This package provides a standardized layer for accessing [crunchbase services](https://data.crunchbase.com/docs/using-the-api) along with data types.

Current version: v3.1

# Usage

## Installation

Ensure you have access to the private artifact repositories through a `.npmrc` file.
This will require updating your own personal `.npmrc`, and the project's `.npmrc` with entries for:

```
@torch-data-connectors:registry=https://pkgs.dev.azure.com/TorchResearchLLC/Torch-Data-Connectors/_packaging/torch-data-connectors/npm/registry/
```

Install the service in your own project

```
npm install @torch-data-connectors/crunchbase-services
```

## Initialization

At the top of your application, or in an imported configuration file:

```js
// Import the service definition and environment constants
import CrunchbaseService from "@torch-data-connectors/crunchbase-services";

// Create an instance of the service
const options = {};
const crunchbaseService = new CrunchbaseService(process.env.API_KEY, options);
export default crunchbaseService;
```

## Calls

```js
try {
  const results = await crunchbaseService.getOrganizations({
    name: "Tesla"
  });
} catch (error) {}
```

## License and agreements

This package is provided through an MIT license. Usage of this package is freely available without restriction.

Crunchbase itself has it's own
[terms of service](https://about.crunchbase.com/terms-of-service/),
[account registration](https://about.crunchbase.com/products/crunchbase-for-applications/),
and [attribution requirements](https://data.crunchbase.com/docs/using-the-api#section-using-the-rest-api).

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
