const { defaultConfig } = require("./common");

const environment = "development";

require("esbuild")
  .build(defaultConfig(environment))
  .catch(() => process.exit(1));
