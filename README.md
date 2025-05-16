# Descentium

A modern web platform for our community built with Svelte.

## 🚀 About

Descentium is a dynamic website designed to connect members of our society and provide resources, event information, and community engagement tools.

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/) (v8 or later)

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/descentium.git
   cd descentium
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## 🏗️ Project Structure

```
descentium/
├── public/           # Static assets
├── src/
│   ├── lib/          # Reusable components and utilities
│   ├── routes/       # Page components and layouts
│   ├── app.html      # HTML template
│   ├── app.css       # Global CSS
│   └── main.js       # Entry point
├── static/           # Files to be copied to the root of the build
├── tests/            # Test files
├── package.json      # Project dependencies and scripts
├── svelte.config.js  # Svelte configuration
└── vite.config.js    # Vite configuration
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run test` - Run tests
- `npm run lint` - Lint code

## 📱 Features

- Responsive design for all devices
- Member profiles and authentication
- Event calendar and registration
- Resource library
- Community forums
- News and announcements

## 🚢 Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `build` directory and can be deployed to your preferred hosting platform.

## 🔄 CI/CD

This project uses GitHub Actions for continuous integration and deployment. See `.github/workflows` for configuration.

## 🧪 Testing

Run tests with:

```bash
npm run test
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For questions or support, please reach out to [your-email@example.com](mailto:your-email@example.com) or open an issue on GitHub.
