export default function handler(req, res) {
  res.status(200).json({
    id: "com.nick.youtube",
    version: "1.0.0",
    name: "YouTube Nick",
    description: "Search YouTube directly from Stremio.",
    resources: [
      {
        name: "catalog",
        types: ["movie"],
        idPrefixes: ["yt-"]
      },
      {
        name: "meta",
        types: ["movie"],
        idPrefixes: ["yt-"]
      },
      {
        name: "stream",
        types: ["movie"],
        idPrefixes: ["yt-"]
      }
    ],
    types: ["movie"],
    catalogs: [
      {
        type: "movie",
        id: "youtube-search",
        name: "YouTube",
        extra: [
          {
            name: "search",
            isRequired: false
          }
        ]
      }
    ]
  });
}