# Nick McMillan Portfolio Replica

A faithful recreation of Nick McMillan's portfolio website featuring smooth animated transitions, interactive project stickers, and a modern dark theme.

## Features

- ✨ Smooth sticker expansion animations using Framer Motion
- 🎯 Interactive project cards with hover effects
- 📱 Fully responsive design
- ♿ Accessibility-focused with keyboard navigation
- 🎨 Dark theme with consistent design system
- 🚀 Optimized for 60fps animations
- 📊 Experiment showcase with animated logos

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Framer Motion** - Smooth animations and transitions
- **Vite** - Fast build tool and dev server
- **CSS3** - Custom properties and modern CSS

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd nick-portfolio-replica
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # React components
│   ├── StickerCard.tsx     # Individual project stickers
│   ├── StickerGrid.tsx     # Grid layout for stickers
│   ├── ExpandedProjectView.tsx # Full-screen project details
│   ├── ExperimentsList.tsx # Experiments section
│   ├── Header.tsx          # Navigation and social links
│   └── MainContainer.tsx   # Main layout wrapper
├── data/               # Static data
│   ├── projects.ts        # Project information
│   └── experiments.ts     # Experiment data
├── hooks/              # Custom React hooks
│   └── useAnimationController.ts # Animation state management
├── styles/             # Global styles
│   └── responsive.css     # Responsive design utilities
├── types/              # TypeScript type definitions
│   └── index.ts          # Main type definitions
└── App.tsx            # Main application component
```

## Key Features Implementation

### Smooth Sticker Transitions

- Uses Framer Motion's `layoutId` for seamless transitions
- Coordinated animations between sticker and expanded states
- Minimum 500ms animation duration as per requirements

### Accessibility

- Keyboard navigation support
- Focus indicators for interactive elements
- Screen reader friendly markup
- Reduced motion support for users who prefer it

### Performance Optimizations

- GPU acceleration for animations
- Lazy loading for images
- Error boundaries for graceful error handling
- Optimized CSS for 60fps animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes and portfolio demonstration.
