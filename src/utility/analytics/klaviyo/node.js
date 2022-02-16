/**
 * Serverside implementation
 * https://developers.klaviyo.com/en/reference/track-post
 */


/* Export the integration */
export default function klaviyoPlugin(userConfig) {
  return {
    /* All plugins require a name */
    name: 'klaviyo-plugin',
    /* Everything else below this is optional depending on your plugin requirements */
    config: {
      companyId: userConfig.companyId,
      publicKey: userConfig.publicKey,
    },

    /* track event */
    track: ({ payload, config }) => {
      const { event, properties } = payload
      const { email, firstName, lastName, phoneNumber, ...rest } = properties

      // TIL Destructuring with ...rest creates a new object with all the other properties not already declared!

      const postLoad = {
        token: config.publicKey,
        event,
        customer_properties: {
          $email: email,
          $first_name: firstName,
          $last_name: lastName,
          $phone_: phoneNumber,
        },
        properties: rest,
      }

      const options = {
        method: 'POST',
        headers: {
          Accept: 'text/html',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          data: JSON.stringify(postLoad),
        }),
      }

      fetch('https://a.klaviyo.com/api/track', options)
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err))
    },
    /* identify user */
    identify: ({ payload, config }) => {
      const { event, traits } = payload

      const postLoad = {
        token: config.publicKey,
        event,
        properties: traits,
      }

      const options = {
        method: 'POST',
        headers: {
          Accept: 'text/html',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          data: postLoad,
        }),
      }

      fetch('https://a.klaviyo.com/api/identify', options)
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err))
    },
    /* Not needed in node */
    // loaded: () {}
  }
}
