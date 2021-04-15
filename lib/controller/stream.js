const { getStream } = require("../service/stream");

async function streamHandler(args) {
  let [idPrefixes, metaId, videoId] = args.id.split(":");
  let { title, location, locationsd } = await getStream(videoId);
  if (locationsd === "") {
    var streams = [
      {
        id: args.id,
        title: `Opção SD`,
        type: `series`,
        url: `${location.replace("\r\n", "")}`,
        behaviorHints: {
          bingeGroup: `AnimeBrasil-${metaId}-SD`,
        },
      },
    ];
  } else {
    var streams = [
      {
        id: args.id,
        title: `Opção SD`,
        type: `series`,
        url: `${location.replace("\r\n", "")}`,
        behaviorHints: {
          bingeGroup: `AnimeBrasil-${metaId}-SD`,
        },
      },
      {
        id: args.id,
        title: `Opção HD`,
        type: `series`,
        url: `${locationsd.replace("\r\n", "")}`,
        behaviorHints: {
          bingeGroup: `AnimeBrasil-${metaId}-HD`,
        },
      },
    ];
  }
  return { streams };
}

module.exports = { streamHandler };
