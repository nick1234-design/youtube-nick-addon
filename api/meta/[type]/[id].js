export default async function handler(req, res) {
  try {
    const id = req.query.id || "";

    if (!id.startsWith("yt-")) {
      return res.status(400).json({
        meta: null,
        error: "Invalid YouTube ID."
      });
    }

    const videoId = id.replace("yt-", "");

    return res.status(200).json({
      meta: {
        id: id,
        type: "movie",
        name: "YouTube Video",
        poster: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        description: "YouTube video"
      }
    });

  } catch (error) {
    return res.status(500).json({
      meta: null,
      error: error.message
    });
  }
}