module.exports = {
  preset: "ts-jest",
  roots: ["./src/"],
  testEnvironment: "node",
  globalSetup: "./jest.setup.js",
};
