const axios = require("axios");

test("Fetch country details for India", async () => {
  const response = await axios.post("https://countries.trevorblades.com/", {
    query: `
      query GetCountry($code: ID!) {
        country(code: $code) {
          name
          capital
          currency
        }
      }
    `,
    variables: {
      code: "IN"
    }
  });

  expect(response.status).toBe(200);
  expect(response.data.data.country.name).toBe("India");
  expect(response.data.data.country.capital).toBe("New Delhi");
});
