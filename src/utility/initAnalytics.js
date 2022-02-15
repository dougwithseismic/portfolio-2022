import Analytics from 'analytics'
import segmentPlugin from '@analytics/segment'
import googleTagManager from '@analytics/google-tag-manager'
import klaviyo from '@utility/analytics/klaviyo'

const analytics = Analytics({
  app: 'withseismic-web',
  plugins: [
    googleTagManager({
      containerId: 'GTM-KR3DJWT',
    }),
    klaviyo({
      companyId: 'JnaxYj',
    }),
  ],
})

export default analytics

// /* Track a page view */
// analytics.page()

// /* Track a custom event */
// analytics.track('cartCheckout', {
//     item: 'pink socks',
//     price: 20
// })

// /* Identify a visitor */
// analytics.identify('user-id-xyz', {
//     firstName: 'bill',
//     lastName: 'murray'
// })
