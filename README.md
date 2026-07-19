# 🌌 Interactive 3D Cyber-Portfolio

An ultra-modern, interactive single-page portfolio designed for showcasing credentials, project logs, and skill certifications with a cyber-aesthetic layout. Built using a lightweight frontend stack and integrated with an interactive **Spline 3D canvas deck** that handles contextual page scrolling.

🌍 **Live Website:** [portfoliofrontend-iota-seven.vercel.app](https://personal-portfolio-three-plum-62.vercel.app/)

---

## 🚀 Features

- **Interactive 3D Grid Controller:** Integrates a responsive Spline 3D viewport containing distinct node cards (GitHub, LeetCode, LinkedIn, Gmail, Resume, Certifications).
- **3D Interaction & Scroll Physics:** Leveraging Spline’s event runtime hooks via JavaScript to track mouse-pointer bounds and trigger seamless, smooth transitions down to viewport anchor regions (`#resume`, `#certifications`).
- **Cyberpunk UI Theme:** Styled with custom dark canvas grid aesthetics, high-contrast monospace accents, glow filters, and fluid desaturated teal/purple linear color treatments.
- **Hardcoded Asset Delivery:** Optimized as a static web build to fetch certification artifacts directly from decentralized GitHub source control repositories, ensuring lightning-fast load times.
- **Modular Project Structure:** Maintained separation of concerns between raw frontend views and historical full-stack templates.

---

## 📂 Project Architecture

```text
portfolio-project/
── frontend/                     # Deployed Production App
   ├── index.html                # Structured HTML5 view layer & Spline module loading
   ├── app.js                    # Core interaction controller & Spline event listeners
   └── style.css                 # Cyber-portfolio style grids, animations & layout rules

```

---

## ⚡ Tech Stack

- **Design & 3D Modeling:** [Spline 3D Tool](https://spline.design/) (Custom pointer-tracking meshes and viewport vector events)
- **Frontend Core:** Vanilla HTML5, CSS Custom Properties (Variables), Modern JavaScript ES6 Modules
- **3D Canvas Injector:** `@splinetool/viewer` module
- **Production Infrastructure:** Hosted as a static high-availability application on **Vercel**

---

## 🛠️ Local Development Setup

To run or customize the layout on your local engine:

1. Clone or pull this directory structures to your workstation:
   ```bash
   git clone <your-repo-link>
   cd portfolio-project/frontend
   ```

2. Open the source using any local development server (like VS Code Live Server or python's http module):
   ```bash
   # Run via Python built-in server
   python3 -m http.server 5500
   ```

3. Load `http://localhost:5500/index.html` inside your browser environment to test custom event bindings.

---

## 💎 Customizing Spline Webhooks

The 3D canvas listens for target interactions declared inside your `app.js` workflow. If you change your Spline component names in the dashboard editor, ensure your event strings are mapped cleanly:

```javascript
const splineViewer = document.querySelector('spline-viewer');

splineViewer.addEventListener('spline-event-trigger', (e) => {
    if (e.detail.name === 'RESUME_CLICK') {
        document.getElementById('resume').scrollIntoView({ behavior: 'smooth' });
    }
});
```

---

*Built with precision during a rapid hackathon validation loop. Clean, performant, and ready for deployment scaling.*
