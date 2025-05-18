const axios = require("axios");

test("Update user name and email", async () => {
  const response = await axios.post("https://graphqlzero.almansi.me/api", {
    query: `
      mutation UpdateUser($id: ID!, $input: UpdateUserInput!) {
        updateUser(id: $id, input: $input) {
          id
          name
          email
        }
      }
    `,
    variables: {
      id: "1",
      input: {
        name: "Viji Updated",
        email: "viji.updated@example.com"
      }
    }
  });

  expect(response.status).toBe(200);
  expect(response.data.data.updateUser.name).toBe("Viji Updated");
  expect(response.data.data.updateUser.email).toBe("viji.updated@example.com");
});
