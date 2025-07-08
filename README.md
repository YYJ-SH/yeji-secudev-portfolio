# 🔥 YEJI YU - BRUTALIST PORTFOLIO

> A bold, unapologetic portfolio showcasing security research and development projects with a brutalist design approach.

## ✨ FEATURES

- **🎨 Brutalist Design**: Bold typography, clashing colors, and geometric shapes
- **🖱️ Custom Cursor**: Interactive mouse cursor effects
- **📱 Fully Responsive**: Works seamlessly across all devices
- **🌐 Bilingual Support**: Korean and English language toggle
- **⚡ Performance Optimized**: Built with Next.js 14 and TypeScript
- **🎭 Smooth Animations**: CSS transforms and transitions
- **🔐 Security Focus**: Highlighting cybersecurity expertise

## 🚀 TECH STACK

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Font**: Space Grotesk + Pretendard
- **Icons**: Lucide React
- **Components**: shadcn/ui
- **State**: React Context API

## 🎨 DESIGN PRINCIPLES

### Brutalist Elements
- **Bold Typography**: Ultra-black fonts and uppercase text
- **High Contrast**: Black backgrounds with bright accent colors
- **Geometric Shapes**: Squares, triangles, and circles as decorative elements
- **Intentional Chaos**: Rotated elements and asymmetrical layouts
- **Raw Aesthetics**: Harsh borders and drop shadows

### Color Palette
- **Primary**: `#000000` (Black)
- **Accent 1**: `#f97316` (Orange-500)
- **Accent 2**: `#84cc16` (Lime-400)
- **Accent 3**: `#ec4899` (Pink-500)
- **Text**: `#ffffff` (White)

## 📁 PROJECT STRUCTURE

```
src/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── portfolio/         # Portfolio showcase
│   ├── security/          # Security projects
│   ├── certifications/    # Certificates
│   ├── globals.css        # Global styles + Brutalist utilities
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            
│   ├── common/            # Shared components
│   ├── layout/            # Layout components (Navbar, Footer)
│   ├── portfolio/         # Portfolio-specific components
│   ├── security/          # Security-specific components
│   └── ui/                # shadcn/ui components
├── contexts/              # React contexts
├── data/                  # Static data and content
├── lib/                   # Utility functions
└── types/                 # TypeScript type definitions
```

## 🛠️ INSTALLATION

```bash
# Clone the repository
git clone https://github.com/yourusername/yeji-secudev-portfolio.git

# Navigate to project directory
cd yeji-secudev-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 🎯 KEY FEATURES

### 1. **Interactive Cursor**
Custom cursor that changes based on hover states and page sections.

### 2. **Geometric Animations**
Floating shapes with CSS animations (pulse, shake, bounce).

### 3. **Brutalist Components**
- `BrutalistButton`: Bold buttons with hover effects
- `BrutalistCard`: Cards with dramatic shadows and transforms
- Custom CSS utilities for consistent styling

### 4. **Responsive Grid System**
Mobile-first approach with breakpoint-specific layouts.

### 5. **Performance Optimizations**
- Image optimization with Next.js
- Code splitting and lazy loading
- Efficient CSS with Tailwind's purging

## 🚀 DEPLOYMENT

### Vercel (Recommended)
```bash
npm run build
npx vercel --prod
```

### Manual Build
```bash
npm run build
npm start
```

## 🎨 CUSTOMIZATION

### Colors
Update the color palette in `tailwind.config.ts`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        brutalist: {
          orange: '#f97316',
          lime: '#84cc16', 
          pink: '#ec4899',
          black: '#000000'
        }
      }
    }
  }
}
```

### Fonts
Customize typography in `globals.css`:

```css
body {
  font-family: 'Space Grotesk', 'Pretendard', sans-serif;
}
```

## 📱 BROWSER SUPPORT

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 LICENSE

MIT License - feel free to use this design for your own portfolio!

## 🤝 CONTRIBUTING

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 CONTACT

- **Website**: [yeji.dev](https://yeji.dev)
- **Email**: yeji@example.com
- **GitHub**: [@yejiyu](https://github.com/yejiyu)
- **LinkedIn**: [Yeji Yu](https://linkedin.com/in/yejiyu)

---

**Made with ❤️, ⚡ and lots of ☕ by Yeji Yu**
