module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      pure: true,
    }
  },
  publicRuntimeConfig: {
    PAYPAL_ORDERS_API: process.env.NODE_ENV === 'development' ? 'http://localhost:4000/api/paypal/orders' : 'https://bruno-payments-ad6f4acc582a.herokuapp.com/api/paypal/orders'
  }
}
