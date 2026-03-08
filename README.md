# Siphamandla Ngcepe - Portfolio

A personal portfolio website showcasing my projects, skills, and professional journey as an aspiring full-stack Java developer.

**Live site:** [mr-sn.netlify.app](https://mr-sn.netlify.app/)

## Tech Stack

- **React 19** — UI library
- **Vite** — Build tool with HMR
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Animations and transitions
- **EmailJS** — Contact form email delivery
- **Firebase** — Analytics and Firestore
- **React Router** — Client-side routing
- **React Icons** — Icon library

## Features

- Responsive design (mobile-first)
- Dark / light theme support
- Animated sections with scroll-based reveals
- Functional contact form (sends emails via EmailJS)
- Project showcase with filtering by category
- Tech stack display with category tabs
- Interactive journey timeline
- Embedded resume viewer with download option

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/Doc012/portfolio.git
cd portfolio
npm install
```

### Environment Variables

Copy the example file and fill in your keys:

```bash
cp .env.example .env
```

| Variable | Description |
|---|---|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `VITE_EMAILJS_USER_ID` | EmailJS public key |
| `VITE_FIREBASE_API_KEY` | Firebase API key |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase auth domain |
| `VITE_FIREBASE_PROJECT_ID` | Firebase project ID |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging sender ID |
| `VITE_FIREBASE_APP_ID` | Firebase app ID |
| `VITE_FIREBASE_MEASUREMENT_ID` | Firebase measurement ID |

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── assets/              # Static files (images, PDF resume)
├── components/
│   ├── about/           # About section
│   ├── achievements/    # Achievements section
│   ├── common/          # Shared UI components
│   ├── contact/         # Contact form and section
│   ├── hero/            # Hero/landing section
│   ├── journey/         # Timeline and journey section
│   ├── layout/          # Navbar, footer, scroll spy
│   ├── projects/        # Project cards and showcase
│   └── techstack/       # Tech stack display
├── context/             # React context (theme, app state)
├── data/                # Static data (projects, tech stack, journey)
├── firebase/            # Firebase configuration
├── hooks/               # Custom hooks
└── utils/               # Constants, helpers, animations
```

## License

This project is licensed under the terms in the [LICENSE](LICENSE) file.
