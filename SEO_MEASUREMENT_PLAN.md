# Organic Search & Conversion Measurement Plan (SEO Measurement Plan)

**Target Domain:** `https://himanshusoni-lilac.vercel.app`  
**Website Owner:** Himanshu Soni — Freelance Shopify Developer & Consultant  
**Primary Goal:** Measure organic search visibility, track search-intent queries, monitor crawl health, and attribute client project inquiries from global merchants.  

---

## 1. Separation of Responsibilities

Per non-negotiable instructions, codebase requirements are fully implemented, and manual steps requiring private account credentials are listed separately below:

```
┌───────────────────────────────────────────────────────────────┬────────────────────────────────────────────────────────┐
│ Codebase Deliverables (Completed)                             │ External Account Setup (Manual Client Steps)           │
├───────────────────────────────────────────────────────────────┼────────────────────────────────────────────────────────┤
│ • Valid XML Sitemap at `/sitemap.xml`                         │ • Add domain property in Google Search Console         │
│ • Valid `robots.txt` referencing sitemap                      │ • Submit sitemap URL in Search Console dashboard       │
│ • Static pre-rendering (SSG) for 100% crawl accessibility     │ • Verify URL inspection on 7 core production pages     │
│ • Event hooks on Contact Form and Project Planner             │ • Create Google Analytics 4 (GA4) Web Stream           │
│ • Canonical URLs, OG tags & JSON-LD structured data           │ • Link Search Console to GA4 for query reporting       │
└───────────────────────────────────────────────────────────────┴────────────────────────────────────────────────────────┘
```

---

## 2. Google Search Console (GSC) Setup Checklist

Follow these exact steps to activate and verify Google Search Console:

### Step 1: Add Property in Search Console
1. Navigate to [Google Search Console](https://search.google.com/search-console/).
2. Click **Add Property**.
3. Choose **URL Prefix** and enter:
   `https://himanshusoni-lilac.vercel.app`  
   *(If later deploying a custom domain, choose Domain property verification via DNS).*

### Step 2: Verification Method
- **Method A: HTML Tag (Fastest for Vercel)**
  1. In Search Console, select **HTML Tag** under "Other verification methods".
  2. Copy the meta tag code (e.g., `<meta name="google-site-verification" content="XYZ..." />`).
  3. Paste it directly into `index.html` inside the `<head>` section, or add it as an environment variable in Vercel.
- **Method B: Vercel Domain Verification**
  If using a custom domain on Vercel, copy the TXT record from Search Console and add it to your DNS registrar (Namecheap, Cloudflare, GoDaddy).

### Step 3: XML Sitemap Submission
1. In Search Console, navigate to the left-hand menu and select **Sitemaps**.
2. Under "Add a new sitemap", enter:
   `sitemap.xml`
3. Click **Submit**.
4. Verify that the status shows **Success** and that 7 URLs are discovered.

### Step 4: URL Inspection & Indexing Request
Using the top search bar in Search Console, inspect each of the 7 canonical URLs:
1. `https://himanshusoni-lilac.vercel.app/`
2. `https://himanshusoni-lilac.vercel.app/website-portfolio`
3. `https://himanshusoni-lilac.vercel.app/services`
4. `https://himanshusoni-lilac.vercel.app/approach`
5. `https://himanshusoni-lilac.vercel.app/aboutus`
6. `https://himanshusoni-lilac.vercel.app/planner`
7. `https://himanshusoni-lilac.vercel.app/contactus`

For each URL:
- Click **Test Live URL** to confirm Googlebot receives the pre-rendered HTML and 200 OK status.
- Click **Request Indexing**.

---

## 3. Google Analytics 4 (GA4) & Conversion Tracking Setup

### 3.1 Creating the GA4 Property
1. Go to [analytics.google.com](https://analytics.google.com/) and create a property named `Himanshu Soni — Portfolio`.
2. Set reporting timezone to your primary operating zone (e.g., India GMT+5:30) and currency to USD.
3. Create a **Web Data Stream** with URL: `https://himanshusoni-lilac.vercel.app`.
4. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`).

### 3.2 Conversion Events to Measure
Configure the following custom events in GA4 to measure real commercial intent:

| Event Name | Trigger Condition | Parameter(s) | Business Value |
| :--- | :--- | :--- | :--- |
| `contact_form_submit` | User successfully submits inquiry form on `/contactus` | `project_type`, `budget_range` | **Primary Conversion** (Direct qualified project lead) |
| `planner_step_complete` | User completes a step in the 4-step wizard on `/planner` | `step_number` (1, 2, 3, 4), `project_type` | Funnel drop-off measurement |
| `planner_form_submit` | User submits the full project brief on `/planner` | `budget_range`, `timeline`, `goals` | **Primary Conversion** (Detailed project brief) |
| `whatsapp_click` | User clicks floating WhatsApp button | `click_location` (floating_button) | Direct instant inquiry |
| `email_click` | User clicks `mailto:` link in footer or header | `email_address` | Direct mail inquiry |
| `case_study_view` | User opens project deep-dive modal in `/website-portfolio` | `project_id`, `category` | Commercial evaluation interest |

---

## 4. Key Performance Indicators (KPIs) & Targets

Evaluate performance across 3 distinct horizons:

### Leading KPIs (Months 1–2: Indexation & Crawl Health)
- **100% Indexation Rate:** All 7 canonical routes indexed in Google without "Crawled - currently not indexed" flags.
- **Search Console Impressions:** Steady weekly increase in impressions for queries containing `shopify developer`, `freelance shopify`, `shopify plus developer`, and `shopify custom theme`.
- **0 Crawl Errors:** 0 404 errors, 0 redirect loops, and 0 mobile usability issues reported in Search Console.

### Lagging KPIs (Months 2–4: Engagement & Clicks)
- **Average Position for Core Clusters:** Ranking within the top 20 for branded and niche long-tail queries (e.g., `shopify inventory synchronization app`, `custom shopify pricing calculator`).
- **Organic Click Growth:** Growing organic clicks to `/website-portfolio` and `/services`.
- **Average Engagement Time:** Greater than 1 minute 30 seconds per session on case studies.

### Commercial KPIs (Ongoing: Conversion & Inquiries)
- **Inquiry Conversion Rate:** 2%–4% of visitors on `/contactus` or `/planner` submitting an inquiry or initiating a WhatsApp conversation.
- **Lead Quality:** Inquiries with project budgets ≥ $1,500 USD aligned with custom themes, Plus checkout, or Remix apps.

---

## 5. Privacy, Consent & Cookie Considerations

If integrating GA4 or third-party analytics:
1. **IP Anonymization:** Enabled by default in GA4.
2. **Minimal Data Collection:** The contact form and planner collect only standard project details provided voluntarily by the user (name, email, phone, project scope). No sensitive payment details, credit card numbers, or passwords are requested or stored.
3. **No Third-Party Advertising Pixels:** Avoid installing Meta, TikTok, or aggressive ad retargeting pixels that introduce heavy third-party JavaScript bloat, slow down Core Web Vitals, or require complex cookie banners under GDPR/ePrivacy directives.

---

## 6. Review & Reporting Cadence

- **Weekly (First 30 Days):**
  - Check Search Console **Pages** tab for indexing status.
  - Review Search Console **Performance** tab for emerging search queries and impressions.
- **Bi-Weekly (Months 2–3):**
  - Check Search Console query report to identify which services and case studies are attracting search queries.
  - Map rising queries into future article topics or case-study titles (per `SEO_CONTENT_ROADMAP.md`).
- **Monthly (Ongoing):**
  - Review GA4 conversions (`contact_form_submit`, `planner_form_submit`, `whatsapp_click`).
  - Calculate conversion rate by traffic channel.
