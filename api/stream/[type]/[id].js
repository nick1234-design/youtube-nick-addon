export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const id = req.query.id || "";

    if (!id.startsWith("yt-")) {
      return res.status(400).json({
        streams: [],
        error: "Invalid YouTube ID."
      });
    }

    const videoId = id.replace("yt-", "").replace(/\.json$/, "");

if (!/^[\w-]{11}$/.test(videoId)) {
  return res.status(400).json({ streams: [], error: "Invalid video ID." });
}

return res.status(200).json({
  streams: [
    {
      name: "YouTube",
      title: "Open in YouTube app (best for live)",
      externalUrl: `https://www.youtube.com/watch?v=${videoId}`
    },
    {
      name: "YouTube",
      title: "Play in Stremio",
      ytId: videoId
    }
  ]
});

  } catch (error) {
    return res.status(500).json({
      streams: [],
      error: error.message
    });
  }
}