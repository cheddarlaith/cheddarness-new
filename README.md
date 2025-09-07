# Cheddarness — Static Site

This is a clean, hand-coded static rebuild of https://www.cheddarness.com without Squarespace.
Includes a video hero on the homepage and five subpages: Photos, Music, Videos, About Me, and Contact.

## Replace Assets
Put your files in `assets/` with these exact names:
- `logo.png`
- `hero-poster.png` (your Capture.PNG)
- `hero.mp4` (your Background Website_1.mp4)

## Run Locally
- Recommended: VS Code + Live Server (right-click index.html → Open with Live Server)
- Or: `python3 -m http.server 8080` then visit http://localhost:8080

## Deploy
- Netlify (drag-and-drop the folder) / Vercel / GitHub Pages
- Point cheddarness.com DNS to your host (A/CNAME per host docs); enable HTTPS.
