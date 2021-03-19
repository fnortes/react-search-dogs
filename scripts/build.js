const { defaultConfig } = require("./common");

const environment = "production";

require("esbuild")
  .build(defaultConfig(environment))
  .then(() => {})
  .catch(() => process.exit(1));
