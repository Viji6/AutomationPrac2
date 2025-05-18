const axios = require("axios");

test("Create a new post", async () => {
  const response = await axios.post("https://graphqlzero.almansi.me/api", {
    query: `
      mutation CreatePost($input: CreatePostInput!) {
        createPost(input: $input) {
          id
          title
          body
        }
      }
    `,
    variables: {
      input: {
        title: "GraphQL Post by Viji",
        body: "This is a test post created via GraphQL mutation!"
      }
    }
  });

  expect(response.status).toBe(200);
  expect(response.data.data.createPost.title).toBe("GraphQL Post by Viji");
});
