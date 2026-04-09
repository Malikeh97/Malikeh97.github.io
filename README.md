# Personal Academic Website

A clean, elegant personal website with classic French artistic styling. Built with pure HTML, CSS, and JavaScript - no build tools required.

## Quick Start

### Local Preview

1. Open `index.html` in your browser, or
2. Use a local server:
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js (npx)
   npx serve
   ```
3. Visit `http://localhost:8000`

### Deploy to GitHub Pages

1. Create a new repository named `yourusername.github.io`
2. Push all files to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```
3. Your site will be live at `https://yourusername.github.io`

## Customization Guide

### 1. Personal Information

Edit `index.html` to update:

- **Name**: Search for "Your Name" and replace with your actual name
- **Email**: Replace `your.email@university.edu` with your email
- **Social Links**: Update GitHub, Twitter, LinkedIn, Google Scholar URLs
- **Bio**: Update the biography text in the hero section
- **Logo Initials**: Change "YN" in the nav-logo to your initials

### 2. Profile Photo

1. Add your photo to the `images/` folder as `profile.jpg`
2. Recommended size: 560x560 pixels (square)
3. The image will automatically display in the circular frame

### 3. Research Section

Edit the research cards in `index.html`:
- Update research area titles and descriptions
- Modify or add/remove research cards as needed
- Update the current project description

### 4. Publications

Add your publications in the publications section:
```html
<article class="publication">
    <span class="pub-venue">Conference/Journal Year</span>
    <h3 class="pub-title">Paper Title</h3>
    <p class="pub-authors"><strong>Your Name</strong>, Co-Authors</p>
    <div class="pub-links">
        <a href="paper-url" class="pub-link">Paper</a>
        <a href="code-url" class="pub-link">Code</a>
    </div>
</article>
```

### 5. Talks

Add talks in the talks section following the same pattern as publications.

### 6. Teaching & Service

Update the teaching experience, service roles, and community involvement sections with your information.

### 7. Blog Posts

Edit `blog.html` to add your blog posts:
```html
<article class="blog-card">
    <div class="blog-card-content">
        <div class="blog-card-meta">
            <span class="blog-card-date">Month Day, Year</span>
            <span class="blog-card-category">Category</span>
        </div>
        <h2><a href="link-to-post">Post Title</a></h2>
        <p class="blog-card-excerpt">Brief description of the post...</p>
        <a href="link-to-post" class="blog-card-link">Read more →</a>
    </div>
</article>
```

### 8. Colors

Edit `css/style.css` to change the color scheme. Key variables at the top:

```css
:root {
    --color-nude: #F5F0EB;      /* Background */
    --color-navy: #1E3A5F;      /* Headers, accents */
    --color-burgundy: #722F37;  /* Links, highlights */
    --color-text: #2D2D2D;      /* Body text */
}
```

## File Structure

```
personal-website/
├── index.html          # Main page
├── blog.html           # Blog listing
├── README.md           # This file
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Navigation & animations
└── images/
    └── profile.jpg     # Your photo (add this)
```

## Features

- Responsive design (mobile, tablet, desktop)
- Smooth scroll navigation
- Mobile hamburger menu
- Scroll-triggered animations
- Print-friendly styles
- No build tools or dependencies required
- SEO-friendly semantic HTML

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge).

## License

Feel free to use and modify for your personal website.
