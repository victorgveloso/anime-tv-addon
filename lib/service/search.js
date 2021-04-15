const axios = require("axios");

async function getSearch(query) {
  let catalog = {
    data: [],
  };
  try {
    catalog = await axios.get(
      `https://appanimeplus.tk/api-animesbr-10.php?search=${query}`
    );
  } catch (err) {
    console.error(err)
  }
  return catalog.data;
}

module.exports = { getSearch };
