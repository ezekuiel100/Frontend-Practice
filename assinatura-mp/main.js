fetch("https://api.mercadopago.com/preapproval_plan", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${accessToken} `,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    reason: "Yoga classes",
    auto_recurring: {
      frequency: 1,
      frequency_type: "months",
      repetitions: null,
      billing_day: 10,
      billing_day_proportional: false,
      free_trial: {
        frequency: 1,
        frequency_type: "months",
      },
      transaction_amount: 10,
      currency_id: "BRL",
    },
    payment_methods_allowed: {
      payment_types: [
        {
          id: "credit_card",
        },
      ],
      payment_methods: [{}],
    },
    back_url: "https://www.google.com",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch(console.error);
