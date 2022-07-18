import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import '../styles/checkout.css';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });

      if (error) {
        setError(error.message);
      } 
      else {
        setError('')
        console.log(paymentMethod);
      }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="pay_btn" type="submit" disabled={!stripe}>
          Payment
        </button>
      </form>
      {
        error && <p className="text-center mt-4" style={{color:'red'}}>{error}</p>
      }
    </div>
  );
};

export default CheckoutForm;
