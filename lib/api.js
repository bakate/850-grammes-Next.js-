import fetch from 'isomorphic-unfetch';

const { API_URL } = process.env;

async function fetchAPI(query, { variables } = {}) {
  const response = await fetch(`${API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await response.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API papi');
  }
  return json.data;
}
export async function getAllRecipesForHome() {
  const data = fetchAPI(`
   query RECIPES_QUERY {
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

  const {
    data: { recettes },
  } = data;
  return recettes;
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
  const {
    data: { recette },
  } = data;
  return recette;
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
  const {
    data: { categories },
  } = data;
  return categories;
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
