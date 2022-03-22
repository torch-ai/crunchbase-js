# Crunchbase services

> This package provides a standardized layer for accessing [crunchbase services](https://data.crunchbase.com/docs/using-the-api) along with TypeScript typings.

Current version: [v4.0](https://data.crunchbase.com/docs)

# Usage

## Installation

Install the service in your own project

```
npm install @torch-ai/crunchbase
```

## Initialization

At the top of your application, or in an imported configuration file:

```js
// Import the service definition and environment constants
import Crunchbase from "@torch-ai/crunchbase";

// Create an instance of the service
const crunchbase = new Crunchbase(process.env.API_KEY, {});
export default crunchbase;
```

## Calls

```js
try {
  const { entities } = await service.autocomplete.search("Tesla", [
    "organizations",
  ]);
} catch (error) {}
```

## License and agreements

This package is provided through an MIT license. Usage of this package is freely available without restriction.

Crunchbase itself has its own
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

Open an issue requesting a version to publish.
