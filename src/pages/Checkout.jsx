import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import "../styles/checkout.css";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51JzhWYINa3mi5izzO30AqlMUBp3W1suZHkcdqzQs2xpo9PhRXkgIBW8S1wFPSMfms9OFcTZPZkRexMNyIYe86QM600WlTl80Q2"
);

const Checkout = () => {
  // const [enterName, setEnterName] = useState("");
  // const [enterEmail, setEnterEmail] = useState("");
  // const [enterNumber, setEnterNumber] = useState("");
  // const [enterCountry, setEnterCountry] = useState("");
  // const [enterCity, setEnterCity] = useState("");
  // const [postalCode, setPostalCode] = useState("");

  const shippingInfo = [];
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;

  const totalAmount = cartTotalAmount + Number(shippingCost);

  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      // name: enterName,
      // email: enterEmail,
      // phone: enterNumber,
      // country: enterCountry,
      // city: enterCity,
      // postalCode: postalCode,
    };

    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  };

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Shipping Address</h6>

                <Elements stripe={stripePromise}>
                  <CheckoutForm />
                </Elements>
            </Col>

            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>${cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Shipping: <span>${shippingCost}</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>${totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
