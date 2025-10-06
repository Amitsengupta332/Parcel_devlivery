import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      return;
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement className="p-2 border rounded"></CardElement>
        <button
          type="submit"
          className="btn btn-primary text-black w-full"
          disabled={!stripe}>
          {/* Pay ${amount} */}
          Pay
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
