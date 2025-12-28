# profileCard

A minimal profile card demo built with Vite and React. The app demonstrates a small component-based UI showing an avatar, intro, and a list of skills.

## Tech

- Vite
- React (JSX)
- Plain CSS for styling (`src/styles.css`)

## Key files

- `components/avatar.jsx` — avatar display
- `components/intro.jsx` — short intro text and name
- `components/skill.jsx` — individual skill item
- `components/skillList.jsx` — list of skills
- `src/App.jsx` — main app component
- `src/main.jsx` — app entry

## Setup & Scripts

Install dependencies:

```bash
npm install
```

Common scripts (Vite defaults):

```bash
npm run dev    # start dev server
npm run build  # build for production
npm run preview # preview production build
```

If your `package.json` differs, use the scripts defined there (commonly `dev`, `build`, `preview`).

## Development notes

- Edit presentational components under `components/` and global styles in `src/styles.css`.
- Static assets may be placed in `public/` (served at root during dev).

## Contributing

Feel free to open issues or pull requests. Small, focused PRs are preferred.

## Credit

This project was inspired by exercises from Jonas Schmedtmann’s React course.
