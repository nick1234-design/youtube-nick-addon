# YouTube Nick 🎬

A simple Stremio addon that lets you search YouTube directly from Stremio.

## ✨ Features

- 🔎 Search YouTube directly from Stremio
- 🎬 YouTube search results with thumbnails
- ▶️ Play YouTube videos through Stremio
- 📺 Live streams can appear in search results
- ☁️ Deploy your own copy with Vercel
- 🔑 Uses the official YouTube Data API v3
- 🔐 Your API key stays in your Vercel environment variables

## 🚀 Self-Hosting

This project is designed to be **forked and deployed as your own Stremio addon**.

Each user should use their own YouTube API key and Vercel deployment.

### 1. Fork this repository

Fork this repository to your own GitHub account.

### 2. Create a YouTube API key

Create a project in Google Cloud and enable:

**YouTube Data API v3**

Then create your own API key.

### 3. Add your API key to Vercel

In your Vercel project, add this environment variable:

```text
YOUTUBE_API_KEY=YOUR_API_KEY