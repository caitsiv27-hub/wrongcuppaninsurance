# Cuppan Insurance Consultants CC — Website

Static site, ready for GitHub Pages. No build step, no dependencies beyond a Google Font (loaded from a CDN link in each page's `<head>`).

## Structure

```
index.html         Home
about.html          About Us
products.html       All 6 product lines (Personal, Commercial, Transport, Construction & Engineering, Agri Risk, Travel)
quote.html          Get a Quote — Personal (Home & Motor) and Business tabs
contact.html        Contact Us + message form
privacy.html        Privacy / POPIA policy
compliance.html     FAIS compliance & regulatory disclosures
assets/css/style.css
assets/js/script.js
assets/images/      logo.png, services-circles.jpg
```

## Before going live

1. **Forms don't send anywhere yet.** Every `<form>` posts to `https://formspree.io/f/your-form-id` — a placeholder. Sign up at formspree.io (or any form backend you prefer), create a form for each of: hero callback, personal quote, business quote, contact message, and swap in the real endpoint URLs. Search the codebase for `your-form-id` to find every spot.
2. **Underwriter names appear as text only** (Santam, Old Mutual Insure, Bryte Insurance) — swap in their logos once you've confirmed you have permission to display them.
3. **WhatsApp links** — phone numbers are set up as tap-to-call (`tel:`) links. If you'd like tap-to-WhatsApp instead, I can switch these to `https://wa.me/27833013750`-style links.

## Publishing to GitHub Pages

1. Create a new GitHub repository (e.g. `cuppan-insurance`).
2. Upload all files in this folder, keeping the folder structure intact.
3. In the repo, go to **Settings → Pages**, set the source branch to `main` and folder to `/ (root)`.
4. Your site will be live at `https://<your-username>.github.io/cuppan-insurance/` within a few minutes.
5. If you own `cuppaninsurance.co.za`, add it under **Settings → Pages → Custom domain** and point your domain's DNS to GitHub Pages per their instructions.
