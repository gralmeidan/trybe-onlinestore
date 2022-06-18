export const formattedPrice = (price) => price
  .toFixed(2)
  .toString()
  .replace('.',',')
  .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$&.');
