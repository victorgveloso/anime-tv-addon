const axios = require("axios");

async function getLatest() {
  let catalog = {
    data: [],
  };
  try {
    catalog = await axios.get(
      "https://appanimeplus.tk/api-animesbr-10.php?latest"
    );
  } catch (err) {
    console.error(err)
  }
  return catalog.data;
}

module.exports = { getLatest };
