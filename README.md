# profile-card-02

A minimal, component-based profile card built to practice React fundamentals. This project focuses on creating modular UI components and managing data flow using props.

## What I Practiced

- **Component Architecture**: Breaking the UI into reusable pieces like `Avatar`, `Intro`, and `SkillList`.
- **Props Mastery**: Dynamically passing data (skill name, emoji, and hex colors) to the `Skill` component.
- **Modern Tooling**: Setting up a fast development environment using **Vite** and **Rolldown**.
- **Code Quality**: Using **ESLint** to maintain clean and consistent JSX.

## 🛠️ Tech Stack

- **React 19**
- **Vite** (via rolldown-vite)
- **ESLint** for linting
- **Custom CSS** for styling

## Project Structure

- `src/components/avatar.jsx`: Displays the profile image.
- `src/components/intro.jsx`: Contains the name and bio.
- `src/components/skill.jsx`: A reusable component for individual skill tags.
- `src/components/skillList.jsx`: The parent component that passes props to all skills.
- `src/styles.css`: Custom "IBM Plex Mono" typography and card layout.

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
