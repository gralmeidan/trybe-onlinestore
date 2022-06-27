export async function getCategories() {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(URL)
    .then((data) => data.json())
    .catch((error) => error);
  return response;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let URL;
  if (categoryId !== '' && query !== '') {
    URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  } else if (categoryId !== '') {
    URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  } else if (query !== '') {
    URL = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  }
  const response = await fetch(URL)
    .then((data) => data.json())
    .catch((error) => error);
  return response;
}

async function fetchDescription(id) {
  const URL = `https://api.mercadolibre.com/items/${id}/description`;
  const response = await fetch(URL)
    .then((data) => data.json())
    .catch((error) => error);
  return response;
}

async function fetchReviews(id) {
  const URL = `https://api.mercadolibre.com/reviews/item/${id}`;
  const response = await fetch(URL)
    .then((data) => data.json())
    .catch((error) => error);
  return response;
}

async function fetchDetails(id) {
  const URL = `https://api.mercadolibre.com/items/${id}`;
  const response = await fetch(URL)
    .then((data) => data.json())
    .catch((error) => error);
  return response;
}

export async function fetchProduct(id) {
  const details = await fetchDetails(id);
  const reviews = await fetchReviews(id);
  const description = await fetchDescription(id);
  return {
    ...details,
    description,
    reviews,
  };
}
