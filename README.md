# Whizz Moulds — B2B Industrial Website

Industrial multi-page static website for **Whizz Moulds**, shoe & footwear mould manufacturer based in Kanpur, Uttar Pradesh, India.

---

## 📁 Project Structure

```
whizz-moulds-website/
├── index.html           # Home Page (Hero, 8 Categories, About Summary, Process, Stats)
├── about.html           # About Us (Company Story, Fact Sheet, Why Choose Us)
├── products.html        # Product Catalog (8 Categories, 19+ Product Specs & Prices)
├── certifications.html  # Quality Assurance (GST Details, 4-Step QC, Verified Policy)
├── gallery.html         # Factory & Mould Photo Gallery (Interactive Lightbox)
├── contact.html         # Contact Us (Factory Info, Quote Form, Map Embed)
├── css/
│   └── style.css        # Custom Industrial Spec-Sheet CSS Design System
├── js/
│   └── script.js        # Mobile Navigation, Lightbox Modal, Enquiry Form Confirmation
├── images/
│   ├── hero_industrial.jpg
│   ├── aluminium_mould.jpg
│   ├── factory_workshop.jpg
│   └── quality_inspection.jpg
└── README.md            # Git deployment & pre-launch checklist
```

---

## 🚀 Deploying to GitHub & GitHub Pages

Follow these step-by-step commands to push this code to a new GitHub repository:

### Step 1: Initialize Local Git Repository
Open your terminal inside the `whizz-moulds-website` folder:

```bash
cd /path/to/whizz-moulds-website
git init
git add .
git commit -m "Initial commit - Whizz Moulds industrial website"
```

### Step 2: Connect to Remote GitHub Repository
1. Go to [GitHub.com](https://github.com) and click **New Repository**.
2. Name your repository `whizz-moulds-website` (set visibility to Public or Private).
3. Do **NOT** check "Initialize with a README".
4. Copy the remote URL (e.g., `https://github.com/YOUR_USERNAME/whizz-moulds-website.git`).
5. Run the following in your terminal:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/whizz-moulds-website.git
git push -u origin main
```

### Step 3: Enable Free GitHub Pages Hosting
1. Go to your repository on GitHub (`github.com/YOUR_USERNAME/whizz-moulds-website`).
2. Click **Settings** (top navigation bar).
3. On the left sidebar, click **Pages**.
4. Under **Build and deployment** -> **Source**, select `Deploy from a branch`.
5. Under **Branch**, select `main` branch and `/ (root)` folder, then click **Save**.
6. GitHub will build and host your website for free at:
   `https://YOUR_USERNAME.github.io/whizz-moulds-website/`

---

## 📋 Pre-Launch Checklist

Before launching live for marketing:

- [ ] **Add Real GST Certificate & Legal Scans**: Replace placeholder text on `certifications.html` with real scanned copies of GST / MSME registrations if client desires.
- [ ] **Configure Custom Domain**: In GitHub Pages settings, map your custom domain (e.g. `www.whizzmoulds.com`) and configure DNS A/CNAME records.
- [ ] **Set Up Google Analytics**: Add Google Tag Manager / GA4 tracking script in the `<head>` of all HTML files.
- [ ] **Submit to Google Search Console**: Submit `sitemap.xml` and verify ownership of `whizzmoulds.com` in Google Search Console to rank for *Shoe mould manufacturer Kanpur*.
- [ ] **Verify Phone & WhatsApp**: Ensure phone `+91 79425 56865` receives calls and WhatsApp chats reliably.

---

## 🎨 Design System Specs

- **Background**: Concrete off-white (`#EDEEE9`)
- **Headers / Dark**: Graphite (`#21262B`)
- **Secondary Text**: Steel blue-grey (`#45586B`)
- **Accent / CTA**: Safety-orange (`#D9570B`)
- **Dividers**: Steel-light (`#C7CDD1`)
- **Headings Font**: `"Big Shoulders Display"` (Google Fonts)
- **Body Font**: `"IBM Plex Sans"` (Google Fonts)
