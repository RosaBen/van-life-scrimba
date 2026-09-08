export default function capitalizeFirstChar (word) {
  const firstLetter = word.charAt(0).toUpperCase();
  return firstLetter + word.slice(1);

}