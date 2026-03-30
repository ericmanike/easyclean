# Easy Clean — Full Project Documentation

## 1. Executive Summary
**Easy Clean & Laundry Services** is a complete, multi-page static website built for a professional cleaning and laundry service brand. The project features a modern, mobile-first design, high-performance interactions, and a clear architectural structure.

---

## 2. Feature Deep-Dive

### 2.1 Navigation & Layout
- **Fixed Glassmorphism Header**: A semi-transparent navigation bar with a backdrop blur effect (`backdrop-filter`) for a contemporary look.
- **Responsive Hamburger Menu**: A custom-built mobile navigation toggle that uses JavaScript to manage state and scroll-locking.
- **Dynamic Scroll States**: The navbar adds a shadow on scroll to provide visual separation from the body content.

### 2.2 Interactive Comparison Gallery
One of the most technically advanced features is the **Before & After Slider** on the `gallery.html` page.
- **Drag Interaction**: Users can drag a vertical handle to uncover the clean ("After") version of an image over the dirty ("Before") version.
- **Implementation**: Uses JavaScript event listeners (`mousedown`, `mousemove`, `mouseup`) to calculate the X-coordinate and update the width of a clipping container in real-time.

### 2.3 Lead Generation & Customer Support
The `contact.html` page is a conversion-optimized hub:
- **Quote Form**: A professional booking form with front-end validation.
- **Phone Formatter**: Automatically sanitizes phone input to prevent invalid entries.
- **FAQ Accordion**: An easy-to-use toggle system for quick answers to common customer questions.
- **Mock Submission Engine**: A simulated API process that provides visual feedback through "Toast" notifications.

---

## 3. Technical Architecture

### 3.1 Tech Stack
- **HTML5**: Semantic tags are used throughout to improve SEO and screen-reader accessibility.
- **CSS3 (Custom Design System)**: Uses CSS variables for consistent branding, layout grids for responsiveness, and transitions for all hover states.
- **JavaScript (ES6+)**: A single `script.js` file manages all dynamic functionality across five pages, ensuring high performance without external library bloat.

### 3.2 Design System Components
- **Color Palette**:
  - `Primary Blue` (#0369a1): Professionalism and Trust.
  - `Success Green` (#22c55e): Freshness and Health.
  - `Accent Yellow` (#f0d000): Strong Call-to-Action performance.
- **Typography**: `Inter` from Google Fonts, chosen for its extreme readability across devices.
- **Elevation**: Three levels of shadows defined as `--shadow-sm`, `--shadow`, and `--shadow-lg`.

---

## 4. Page Architecture
- **Home (`index.html`)**: Introduces the brand, core values, and primary CTA.
- **Services (`services.html`)**: Lists nine specific cleaning and laundry categories in a clear card layout.
- **Gallery (`gallery.html`)**: Showcases result quality through interactive and static imagery.
- **Testimonials (`testimonials.html`)**: Builds credibility with client ratings and feedback.
- **Contact (`contact.html`)**: The primary conversion point with a booking form and FAQ.

---

## 5. Setup & Deployment
1. **Local Access**: Open `index.html` in any browser. No installation or compilation needed.
2. **Icons**: Requires an internet connection to fetch **Font Awesome 6.5.1**.
3. **Hosting**: Compatible with all static hosting providers (GitHub Pages, Netlify, Vercel, etc.).

---

## 6. Accessibility & SEO
- **Heading Hierarchy**: Each page follows a strict `h1 > h2 > h3` structure.
- **Meta Descriptions**: Unique descriptions for every page to optimize search snippet performance.
- **Responsive Breakpoints**: Custom media queries in `styles.css` ensure the layout adapts from ultra-wide monitors down to 320px mobile devices.
- **ARIA Attributes**: Interactive elements like nav toggles and FAQ buttons use ARIA labels for assistive technology.
