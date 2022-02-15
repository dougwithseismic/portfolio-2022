/**
 * Node implementation
 */

let sdk
let client
if (!process.browser) {
  /* include your node side SDK */
  // sdk = require('analytics-node')
}

const config = {
  assumesPageview: true,
}

/* Export the integration */
export default function klaviyoPlugin(userConfig) {
  // Allow for userland overides of base methods
  return {
    /* All plugins require a name */
    name: 'klaviyo-plugin',
    /* Everything else below this is optional depending on your plugin requirements */
    config: {
      companyId: userConfig.companyId,
    },
    initialize: ({ config }) => {
      /* initialize client */
    },
    /* page view */
    page: ({ payload, config }) => {
      console.log('Run pageview in node')
    },
    /* track event */
    track: ({ payload, config }) => {
      console.log('track event in node')
    },
    /* identify user */
    identify: ({ payload }) => {
      console.log('identify user in node')
    },
    /* Not needed in node */
    // loaded: () {}
  }
}
