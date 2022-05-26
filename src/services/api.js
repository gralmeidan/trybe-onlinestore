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
