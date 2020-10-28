// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require("dotenv");

module.exports = async () => {
  // Load any environment variables as they affect configuration

  const result = dotenv.config();
  if (result.error) {
    throw new Error("Failed to load environment configurations");
  }
};
