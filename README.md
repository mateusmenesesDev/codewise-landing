# CodeWise - Mentorship Landing Page

A modern, responsive landing page for CodeWise, a mentorship platform connecting ambitious developers with expert mentors for personalized guidance and career growth.

![CodeWise Landing Page](https://github.com/mateusmeneses/mentorship-landing/assets/screenshot.png)

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Engaging UI components with hover effects and transitions
- **Accessibility**: Built with accessibility in mind, following best practices
- **Performance**: Optimized for fast loading and smooth scrolling

## 🛠️ Tech Stack

- [Astro](https://astro.build) - Static Site Generator
- [React](https://reactjs.org) - UI Components
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [TypeScript](https://www.typescriptlang.org) - Type Safety
- [Biome](https://biomejs.dev) - Linting and Formatting

## 📁 Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── sections/
│   │       ├── Hero/
│   │       ├── Features/
│   │       ├── Testimonials/
│   │       └── Contact/
│   ├── styles/
│   │   └── global.css
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── .vscode/
│   ├── settings.json
│   ├── extensions.json
│   └── launch.json
├── biome.json
├── tailwind.config.ts
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installs dependencies                            |
| `pnpm dev`                | Starts local dev server at `localhost:4321`      |
| `pnpm build`              | Build your production site to `./dist/`          |
| `pnpm preview`            | Preview your build locally, before deploying     |
| `pnpm astro ...`          | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help`    | Get help using the Astro CLI                     |

## 🚀 Getting Started

1. Clone the repository:
   ```sh
   git clone https://github.com/mateusmeneses/mentorship-landing.git
   cd mentorship-landing
   ```

2. Install dependencies:
   ```sh
   pnpm install
   ```

3. Start the development server:
   ```sh
   pnpm dev
   ```

4. Open your browser and navigate to `http://localhost:4321`

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Mateus Meneses**
- LinkedIn: [mateus-meneses](https://www.linkedin.com/in/mateus-meneses/)
- GitHub: [mateusmeneses](https://github.com/mateusmeneses)

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
