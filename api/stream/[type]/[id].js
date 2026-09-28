export default async function handler(req, res) {
  try {
    const id = req.query.id || "";

    if (!id.startsWith("yt-")) {
      return res.status(400).json({
        streams: [],
        error: "Invalid YouTube ID."
      });
    }

    const videoId = id.replace("yt-", "");

    return res.status(200).json({
      streams: [
        {
          name: "YouTube",
          title: "Watch on YouTube",
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