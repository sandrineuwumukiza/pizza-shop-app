import axios from 'axios';

const generateTransactionRef = () => `tx-${Date.now()}`;

export const payment = async (req, res) => {
  try {
    console.log('Payment request body:', req.body); // Log the request body for debugging

    // Generate a unique transaction reference
    const tx_ref = generateTransactionRef();

    // Prepare payment details
    const paymentDetails = {
      tx_ref: tx_ref, // Unique transaction reference
      amount: req.body.amount, // Amount to be paid (from request body)
      currency: req.body.currency, // Currency of the payment (from request body)
      payment_method: req.body.payment_method, // Payment method (from request body)
      redirect_url: req.body.redirect_url, // URL to redirect after payment (from request body)
      customer: {
        email: req.body.customer.email, // Customer email (from request body)
        name: req.body.customer.name, // Customer name (from request body)
        phonenumber: req.body.customer.phonenumber, // Customer phone number (from request body)
      },
      customizations: {
        title: req.body.customizations.title, // Custom title for the payment (from request body)
        description: req.body.customizations.description, // Description for the payment (from request body)
      }
    };

    // Make the payment request to Flutterwave API
    const response = await axios.post(
      'https://api.flutterwave.com/v3/charges?type=mobile_bank_transfer',
      paymentDetails,
      {
        headers: {
          Authorization: `Bearer ${process.env.FLUTTERWAVE_SECRET_KEY}`, // Replace with your Flutterwave API secret key
          'Content-Type': 'application/json'
        }
      }
    );

    // Handle successful response from Flutterwave
    console.log('Payment response:', response.data);

    if (response.data.status === 'success') {
      // Payment successful
      res.status(200).json({
        message: 'Payment initiated successfully',
        data: response.data
      });
    } else {
      // Payment failed
      res.status(400).json({
        message: 'Payment initiation failed',
        error: response.data
      });
    }
  } catch (err) {
    // Handle errors during payment processing
    console.error('Payment Error:', err.message);
    res.status(500).json({
      message: 'Payment processing error',
      error: err.response ? err.response.data : err.message
    });
  }
};
