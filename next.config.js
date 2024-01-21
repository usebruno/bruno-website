module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      pure: true,
    }
  },
  publicRuntimeConfig: {
    PAYPAL_ORDERS_API: process.env.NODE_ENV === 'development' ? 'http://localhost:4000/api/paypal/orders' : 'https://payments.usebruno.com/api/paypal/orders'
  }
}
