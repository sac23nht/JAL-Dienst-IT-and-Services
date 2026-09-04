# JAL Dienst IT & Services

Marketing website for **JAL Dienst IT & Services**, an IT and digital services company (registered in Germany) offering web development, digital marketing, custom software, automation, IoT applications, and AI integration.

Static site — no build step, no dependencies.

## Project structure

```
index.html        Single-page site: header, hero, services, about, process, contact, footer
css/style.css      All styling — theme, layout, animations, responsive breakpoints
js/i18n.js         EN/DE translation dictionary and language-switching logic
js/script.js       Mobile nav, scroll effects, stat counters, contact form handling
assets/            Favicon and other static assets
```

## Running locally

No build tools needed — just serve the folder statically.

```bash
python -m http.server 8090 --directory .
```

Then open `http://localhost:8090`. Opening `index.html` directly in a browser also works, but a local server avoids any relative-path quirks.

## Features

- Responsive layout (mobile nav, adapts down to small screens)
- EN / DE language switcher (auto-detects browser language, remembers choice via `localStorage`)
- Animated hero background, scroll-reveal sections, count-up stats, hover micro-interactions
- Contact form is front-end only — no backend is wired up yet (see below)

## Known gaps / next steps

- Contact form doesn't submit anywhere yet (needs a backend or a service like Formspree)
- No hosting/deployment set up yet (e.g. GitHub Pages, Netlify)
- Placeholder-quality copy/imagery in places — swap in real content as it's available

## Contributing

1. `git clone https://github.com/sac23nht/JAL-Dienst-IT-and-Services.git`
2. Make changes, then `git add`, `git commit`, `git push`
3. For anything non-trivial, open a PR against `main` instead of pushing directly
