const klaviyoPlugin = (userConfig = {}) => {
  // return object for analytics to use
  return {
    /* All plugins require a name */
    name: 'klaviyo-plugin',
    /* Everything else below this is optional depending on your plugin requirements */
    config: {
      companyId: userConfig.companyId,
    },
    HTTPS_WARNING:
      'Klaviyo requires HTTPS to be enabled. This Plugin Wont Run Locally.',
    initialize: ({ config }) => {
      if (typeof window == 'undefined') {
        console.log("Let's only load this in browther")
        return
      }

      const { companyId } = config
      if (!companyId) {
        throw new Error('No Klaviyo companyId defined')
      }
      // NoOp if klaviyo already loaded by external source
      if (scriptAlreadyLoaded(document)) return

      const protocol = document.location.protocol
      const https = protocol === 'https:' || protocol === 'chrome-extension:'
      const bustCache = Math.floor(new Date().getTime() / 3600000)
      const prefix = https ? 'https:' : 'http:'
      const scriptLink = `${prefix}//static.klaviyo.com/onsite/js/klaviyo.js?company_id=${companyId}`
      const src = `${scriptLink}&${bustCache}`

      !https && console.warn(klaviyoPlugin().HTTPS_WARNING)

      // Create script & append to DOM
      let script = document.createElement('script')
      script.id = 'klaviyo-script-loader'
      script.type = 'text/javascript'
      script.async = true
      // script.defer = defer
      script.src = src
      script.onload = () => console.log('Analytics: Klaviyo Plugin Loaded')

      // On next tick, inject the script
      setTimeout(() => {
        let firstScript = document.getElementsByTagName('script')[0]
        firstScript.parentNode.insertBefore(script, firstScript)
      }, 0)
    },
    page: ({ payload }) => {
      // Not used with Klaviyo
      // call provider specific page tracking
    },
    track: ({ payload }) => {

        console.log('payload :>> ', payload);
      if (!isSecure()) {
        console.warn(klaviyoPlugin().HTTPS_WARNING)
        return false
      }

      console.log('payload :>> ', payload)

      const { event, properties } = payload
      window._learnq.push(['track', event, properties])
      // call provider specific event tracking
    },

    /**
     * identify() Klaviyo Analytics plugin
     * @example
     *  analytics.identify(null, {
     *   email: 'hello@withseismic.com'
     * })
     * @example without UserId
     *  analytics.identify({
     *   email: 'hello@withseismic.com'
     * })
     */
    identify: ({ payload }) => {
      if (!isSecure()) {
        console.warn(klaviyoPlugin().HTTPS_WARNING)
        return false
      }
      const { userId, traits } = payload
      // Klayivo doesn't deal with userIds, so we'll pass the trait as an email instead.
      // So first, lets check that we have an email in the payload, and that it's a string, and that it has an @.
      if (
        !traits.email ||
        typeof traits.email !== 'string' ||
        traits.email.indexOf('@') === -1
      ) {
        console.log(
          'Check email provided to Klaviyo Analytics Plugin - Will not identify the user',
        )
        return
      }

      window._learnq.push(['identify', { ...traits, $email: traits.email }])
      // call provider specific user identify method
    },
    loaded: () => {
      // return boolean so analytics knows when it can send data to third party
      return !!window._learnq
    },
  }
}

export default klaviyoPlugin

const scriptAlreadyLoaded = (document) => {
  const scripts = document.getElementsByTagName('script')
  return !!Object.keys(scripts).filter((key) => {
    const scriptInfo = scripts[key] || {}
    const src = scriptInfo.src || ''
    return src.match(/static\.klaviyo\.com/)
  }).length
}

const isSecure = () => {
  const protocol = document.location.protocol
  const https = protocol === 'https:' || protocol === 'chrome-extension:'

  return https
}
