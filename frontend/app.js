// ============================================
// SMOOTH SCROLL NAV
// ============================================
// All section jumps (topbar links, any button using href="#id") are handled
// natively by the browser via `html { scroll-behavior: smooth }` in style.css.
// This script only adds a small enhancement: keyboard/focus users get the
// same smooth scroll, and clicking a link updates the URL hash without
// a jarring jump for browsers that ignore scroll-behavior.

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);

    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });

    // keep the URL shareable (e.g. yoursite.com/#certifications)
    history.pushState(null, "", `#${targetId}`);
  });
});

// ============================================
// NOTE ON 3D SPLINE BUTTON CLICKS
// ============================================
// The current Spline embed uses an <iframe src="https://my.spline.design/...">.
// Iframes are sandboxed by the browser, so this page has no way to detect
// which object was clicked *inside* the 3D scene (e.g. a "RESUME" button
// modeled in Spline). That kind of interaction requires swapping the iframe
// for the Spline runtime library (@splinetool/runtime) rendered on a <canvas>,
// with named objects wired to spline.addEventListener('mouseDown', ...).
//
// For now, use these direct links to reach the same sections:
//   yoursite.com/#resume
//   yoursite.com/#certifications