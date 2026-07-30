# Mila-Karton client handoff

This client is the first frontend pass for **MILA KARTON LLP**, the minimalist electronics marketplace at `milakarton.store`.

## Included

- Mila-Karton branding, logo assets, SEO metadata, contact details, footer and legal-page layout.
- 30 fixed-price electronics demo products from ₹4,499 through ₹2,49,999.
- One shared placeholder image per product; replace the `image` value in `src/common/demoproducts.js` when approved product photography is available.
- Guest cart and checkout flow. Customer login, registration and customer order-history routes are no longer exposed by `src/App.jsx`.
- Admin authentication files and the admin orders page are retained for the later admin/server phase.

## Local setup

Create a local `.env` file when the API is ready:

```env
VITE_API_URL=http://localhost:5000
VITE_GA_MEASUREMENT_ID=
```

The payment flow still expects the backend payment endpoints. The backend order schema/controller should be updated in the next phase to support guest checkout without `customerId`.

Before launch, owner-approved product data, payment credentials, shipping rules, policy dates and final imagery should replace the demo/placeholder values.
