# Vite & HeroUI Template

A modern, production-ready template for building high-performance web applications with Vite and HeroUI v2. This template provides a solid foundation with best practices, TypeScript support, and a comprehensive development setup.


## 🚀 Features

- ⚡ **Lightning Fast** - Powered by Vite for instant hot module replacement
- 🎨 **Modern UI Components** - Beautiful, accessible components with HeroUI v2
- 🔧 **TypeScript Ready** - Full TypeScript support for better developer experience
- 🎭 **Smooth Animations** - Framer Motion integration for fluid interactions
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🎯 **Developer Experience** - Optimized tooling and configuration
- 🔄 **Hot Reload** - Instant feedback during development

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| [Vite](https://vitejs.dev) | Build tool & dev server | Latest |
| [HeroUI](https://heroui.com) | UI component library | v2 |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first CSS framework | Latest |
| [Tailwind Variants](https://tailwind-variants.org) | Component variants utility | Latest |
| [TypeScript](https://www.typescriptlang.org) | Type-safe JavaScript | Latest |
| [Framer Motion](https://www.framer.com/motion) | Animation library | Latest |

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/frontio-ai/vite-template.git
   cd vite-template
   ```

2. **Install dependencies**
   
   Using npm:
   ```bash
   npm install
   ```
   
   Using yarn:
   ```bash
   yarn install
   ```
   
   Using pnpm:
   ```bash
   pnpm install
   ```
   
   Using bun:
   ```bash
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` to see your application running.

## 📦 Package Manager Specific Setup

### pnpm Configuration

If you're using pnpm, add the following to your `.npmrc` file in the project root:

```ini
public-hoist-pattern[]=*@heroui/*
```

Then reinstall dependencies:
```bash
pnpm install
```

This ensures HeroUI components are properly hoisted and accessible.

## 🏗️ Project Structure

```
vite-template/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   ├── pages/             # Application pages
│   ├── styles/            # Global styles
│   ├── utils/             # Utility functions
│   ├── App.tsx            # Main application component
│   └── main.tsx           # Application entry point
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript compiler check |

## 🎨 Customization

### Theme Configuration

Customize your theme by modifying the HeroUI configuration in your Tailwind config:

```javascript
// tailwind.config.js
const { heroui } = require("@heroui/theme");

module.exports = {
  content: [
    // ... your content paths
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          // customize your light theme
        }
      },
      dark: {
        colors: {
          // customize your dark theme
        }
      }
    }
  })],
}
```

### Adding Components

Create new components using HeroUI's component library:

```tsx
import { Button, Card, CardBody } from "@heroui/react";

export const MyComponent = () => {
  return (
    <Card>
      <CardBody>
        <Button color="primary">
          Click me
        </Button>
      </CardBody>
    </Card>
  );
};
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify

1. Build your project: `npm run build`
2. Upload the `dist` folder to Netlify

### Manual Deployment

```bash
npm run build
```

Upload the contents of the `dist` folder to your hosting provider.

## 📚 Documentation

- [Vite Documentation](https://vitejs.dev/guide/)
- [HeroUI Documentation](https://heroui.com/docs/guide/introduction)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Framer Motion Documentation](https://www.framer.com/motion/introduction/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [HeroUI Team](https://heroui.com) for the amazing component library
- [Vite Team](https://vitejs.dev) for the blazing fast build tool

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/frontio-ai"><a href="https://github.com/virtualharsh">Harsh </a> & <a href="https://github.com/jayjoshi2512"> Jay </a></p>
</div>
