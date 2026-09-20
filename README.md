# KalaMap — Indian Art History

An interactive digital map exploring India's diverse art forms, traditions, artists, and cultural heritage.

## Technologies Used
- React 19
- Vite
- Tailwind CSS v4
- Leaflet & React-Leaflet
- Lucide React

## Local Development
1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

## Deployment (Vercel / Netlify / GitHub Pages)
This project is a static frontend application with no backend or API keys required. It can be directly deployed to Vercel, Netlify, or GitHub Pages.

### Vercel / Netlify
1. Connect your GitHub repository.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

### GitHub Pages
1. Install `gh-pages` package: `npm install -D gh-pages`
2. Add `"homepage": "https://<your-username>.github.io/<your-repo-name>"` to `package.json`.
3. Add a deploy script in `package.json`: `"deploy": "gh-pages -d dist"`
4. Run `npm run build` then `npm run deploy`.
