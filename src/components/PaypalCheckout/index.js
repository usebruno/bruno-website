import { useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import getConfig from 'next/config';
import { IconRefresh } from '@tabler/icons';

const { publicRuntimeConfig } = getConfig();

const PaypalCheckout = ({ email, onSuccess, onError }) => {
  const [loading, setLoading] = useState(false);

  const handleCreateOrder = async () => {
    try {
      setLoading(true);
      const response = await fetch(publicRuntimeConfig.PAYPAL_ORDERS_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
        }),
      });

      const orderData = await response.json();
      setLoading(false);

      if (orderData.id) {
        return orderData.id;
      } else {
        const errorDetail = orderData?.details?.[0];
        const errorMessage = errorDetail
          ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
          : JSON.stringify(orderData);

        throw new Error(errorMessage);
      }
    } catch (error) {
      onError(error);
      setLoading(false);
      throw error;
    }
  };

  const handleApproveOrder = async (data, actions) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${publicRuntimeConfig.PAYPAL_ORDERS_API}/${data.orderID}/capture`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      const orderData = await response.json();
      setLoading(false);
      // Three cases to handle:
      //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
      //   (2) Other non-recoverable errors -> Show a failure message
      //   (3) Successful transaction -> Show confirmation or thank you message

      const errorDetail = orderData?.details?.[0];

      if (errorDetail?.issue === 'INSTRUMENT_DECLINED') {
        // (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
        // recoverable state, per https://developer.paypal.com/docs/checkout/standard/customize/handle-funding-failures/
        return actions.restart();
      } else if (errorDetail) {
        // (2) Other non-recoverable errors -> Show a failure message
        throw new Error(`${errorDetail.description} (${orderData.debug_id})`);
      } else {
        // (3) Successful transaction -> Show confirmation or thank you message
        // Or go to another URL:  actions.redirect('thank_you.html');
        onSuccess(orderData);
      }
    } catch (error) {
      setLoading(false);
      onError(error);
    }
  };

  return (
    <>
      <div className="flex items-center">
        <div className="font-semibold text-lg mr-1">Order Summary</div>
        {loading && <IconRefresh size={18} className="loading-icon" />}
      </div>
      <div className="mt-2 mb-4">
        <div className="flex mb-1">
          <span className="mr-1" style={{ width: '65px' }}>
            Product
          </span>
          : Golden Edition Individual License
        </div>
        <div className="flex mb-1">
          <span className="mr-1" style={{ width: '65px' }}>
            Email
          </span>
          : {email}
        </div>
        <div className="flex">
          <span className="mr-1" style={{ width: '65px' }}>
            Amount
          </span>
          : $19
        </div>
      </div>
      <div style={{ maxWidth: '300px' }}>
        <PayPalButtons
          style={{
            shape: 'rect',
            layout: 'vertical',
          }}
          createOrder={handleCreateOrder}
          onApprove={handleApproveOrder}
        />
      </div>
    </>
  );
};

export default PaypalCheckout;
