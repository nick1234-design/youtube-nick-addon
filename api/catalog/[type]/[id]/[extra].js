export default async function handler(req, res) {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        metas: [],
        error: "YouTube API key is not configured."
      });
    }

    const extra = req.query.extra || "";

    let searchQuery = "";

    if (typeof extra === "string") {
      const match = extra.match(/search=(.*?)(?:\.json)?$/);
      if (match) {
        searchQuery = decodeURIComponent(match[1]);
      }
    }

    if (!searchQuery) {
      return res.status(200).json({
        metas: []
      });
    }

    const url =
      "https://www.googleapis.com/youtube/v3/search" +
      "?part=snippet" +
      "&q=" + encodeURIComponent(searchQuery) +
      "&type=video" +
      "&maxResults=20" +
      "&key=" + encodeURIComponent(apiKey);

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        metas: [],
        error: data.error?.message || "YouTube API request failed."
      });
    }

    const metas = (data.items || []).map((item) => ({
      id: `yt-${item.id.videoId}`,
      type: "movie",
      name: item.snippet.title,
      poster: item.snippet.thumbnails?.high?.url ||
              item.snippet.thumbnails?.medium?.url ||
              item.snippet.thumbnails?.default?.url,
      description: item.snippet.description,
      releaseInfo: item.snippet.publishedAt?.slice(0, 10)
    }));

    return res.status(200).json({
      metas
    });

  } catch (error) {
    return res.status(500).json({
      metas: [],
      error: error.message
    });
  }
}