export function getUserReviews() {
  if (!localStorage) return [];
  const reviews = JSON.parse(localStorage.getItem("reviews"));
  return reviews || [];
}

export function getUserReviewsOnProduct(id) {
  return getUserReviews().filter(
    ({ reviewable_object: { id: pid } }) => pid === id
  );
}

export function addUserReview(review) {
  const reviews = getUserReviews();
  if (localStorage) {
    localStorage.setItem("reviews", JSON.stringify([review, ...reviews]));
  }
}
