#!/usr/bin/env node
import checkVersion from 'lib/versionCheck/checkNodeVersion.js';
import checkConfiguration from 'lib/config/configuration.js';
import {checkPackageConfigError} from 'helper/error/error.js';
/* calling the main build analyzer function here */
(async () => {
  /* Check node version before the creating the analyzer */
  try {
    const checkNodeVersion = await checkVersion();
    if (checkNodeVersion) {
      checkConfiguration();
    }
  } catch (error) {
    checkPackageConfigError(error);
    process.exit(1);
  }
})();
