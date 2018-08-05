if (window.PaymentRequest) {
  const showPaymentRequest = ({ label, currency, value, method }) => {
    const methodData = [{ supportedMethods: method }];
    const details = {
      total: {
        label,
        amount: { currency, value }
      }
    };
    const options = {};
    const paymentRequest = new PaymentRequest(methodData, details, options);

    return paymentRequest.show();
  };

  const showEmptyPaymentRequest = ({
    label = 'Test Request',
    currency = 'USD'
  } = {}) => {
    return showPaymentRequest({
      label,
      currency,
      value: 0,
      method: 'basic-card'
    });
  };

  showEmptyPaymentRequest()
    .then(response => response.complete())
    .catch(console.error);
} else {
  document.getElementById('app').innerHTML =
    "<h1>Your browser doesn't support Payment Request API...</h1>";
}
