const axios = require("axios");

test("Delete a post by ID", async () => {
  const response = await axios.post("https://graphqlzero.almansi.me/api", {
    query: `
      mutation DeletePost($id: ID!) {
        deletePost(id: $id)
      }
    `,
    variables: {
      id: "1" // Try with an existing ID
    }
  });

  expect(response.status).toBe(200);
  expect(response.data.data.deletePost).toBe(true); // The API returns true on success
});
