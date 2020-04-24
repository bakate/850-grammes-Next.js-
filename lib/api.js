import fetch from 'isomorphic-unfetch';
// import { parseCookies } from 'nookies';

// const token = parseCookies('fromClientSide');
// console.log(token);

const { API_URL } = process.env;
async function fetchAPI(query, { variables } = {}) {
  const response = await fetch(`${API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `token ? Bearer ${token.fromClientSide}: null`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const jsonify = await response.json();

  if (jsonify.errors) {
    console.error(jsonify.errors);
    throw new Error('Failed to fetch API papi');
  }

  return jsonify.data;
}
export async function getAllRecipesForHomePage() {
  const data = await fetchAPI(`query RECIPES_QUERY {
    recettes(limit: 6, sort: "published:desc") {
      id
      title
      url
      duration
      image {
        url
      }
    }
  }
  `);

  return data?.recettes;
}
export async function getAllRecipes() {
  const data = await fetchAPI(`query RECIPES_QUERY {
    recettes {
      id
      title
      url
      duration
      image {
        url
      }
    }
  }
  `);

  return data?.recettes;
}
export async function getSingleRecipe(id) {
  const data = await fetchAPI(
    `
    query SINGLE_RECIPE_QUERY($id: ID!) {
    recette(id: $id) {
      id
      title
      duration
      url
      cooking
      ingredients
      image {
        url
      }
      category {
        id
        name
      }
      published
    }
  }`,
    {
      variables: {
        id,
      },
    }
  );
  // const recette = data ? data.recette : [];
  return data?.recette;
}

export async function getAllCategories() {
  const data = await fetchAPI(
    ` query CATEGORIES_QUERY {
    categories {
      id
      name
    }
  }`
  );
  return data?.categories;
}

export async function getSingleCategory(id) {
  const data = await fetchAPI(
    `
 query CATEGORY_QUERY($id: ID!) {
    category(id: $id) {
      name
      recettes {
        id
        title
        published
        url
        duration
        category {
          difficulty
        }
        image {
          url
        }
      }
    }
  }
  `,
    {
      variables: {
        id,
      },
    }
  );
  return data?.category;
}
export async function retrieveItems(searchTerm) {
  if (!searchTerm) return;
  const data = await fetchAPI(
    `
 query SEARCH_ITEMS_QUERY($searchTerm: String!) {
    recettes(where: { title_contains: $searchTerm }) {
      id
      title
      image {
        url
      }
    }
  }
  `,
    {
      variables: {
        searchTerm,
      },
    }
  );
  return data?.recettes;
}
export async function signupUser(username, email, password) {
  const data = await fetchAPI(
    `mutation SIGNUP_MUTATION(
      $username: String!
    $email: String!
    $password: String!
  ) {
    register( input: {username: $username, email: $email,  password: $password })
    {
      user {
        id
        username
        email
      }
      jwt
    }
  }

  `,
    {
      variables: {
        username,
        email,
        password,
      },
    }
  );
  return data?.register;
}
