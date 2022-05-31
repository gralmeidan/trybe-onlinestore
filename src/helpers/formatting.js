export const formattedPrice = (price) => price
  .toFixed(2)
  .toString()
  .replace('.',',');
