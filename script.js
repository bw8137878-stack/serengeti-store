/* Serengeti Store setup: add your own Amazon Associates tracking IDs after Amazon approves your account. */
const CONFIG = {
  usTag: "YOUR_US_ASSOCIATE_TAG",
  ukTag: "YOUR_UK_ASSOCIATE_TAG"
};
function addTag(base, tag) {
  const url = new URL(base);
  if (tag && !tag.startsWith("YOUR_")) url.searchParams.set("tag", tag);
  return url.toString();
}
const us = document.getElementById("usLink");
const uk = document.getElementById("ukLink");
us.href = addTag("https://www.amazon.com/s?k=smart+RGB+LED+strip+lights", CONFIG.usTag);
uk.href = addTag("https://www.amazon.co.uk/s?k=smart+RGB+LED+strip+lights", CONFIG.ukTag);
document.getElementById("year").textContent = new Date().getFullYear();
