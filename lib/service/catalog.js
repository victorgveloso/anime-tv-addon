const axios = require("axios");

async function getCatalog() {
  let catalog = {
    data: [],
  };
  try {
    catalog = await axios.get(
      "https://appanimeplus.tk/api-animesbr-10.php?populares"
    );
  } catch (err) {
    console.error(err)
  }
  return catalog.data;
}

module.exports = { getCatalog };
