# YungDrip 🔥

> **YD — Bold streetwear built for confident, driven youth.**
> Rooted in urban culture, blending luxury minimalism with raw street energy.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + Custom CSS Tokens |
| Database | MongoDB via Mongoose |
| Auth | JWT (bcryptjs + jsonwebtoken) |
| Image Upload | Cloudinary |

---

## Getting Started

### 1. Clone and install

```bash
npm install
```

### 2. Configure environment

```bash
cp .env.example .env.local
```

Fill in your values in `.env.local`:

- `MONGODB_URI` — your MongoDB Atlas connection string
- `JWT_SECRET` — any strong random string
- `CLOUDINARY_*` — from your Cloudinary dashboard

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx                  # Home page
│   ├── layout.tsx                # Root layout + SEO metadata
│   ├── globals.css               # Brand design tokens + global styles
│   ├── products/
│   │   ├── page.tsx              # Products listing
│   │   └── [id]/page.tsx         # Product detail
│   ├── admin/
│   │   └── page.tsx              # Admin dashboard
│   └── api/
│       ├── auth/
│       │   ├── login/route.ts    # POST /api/auth/login
│       │   └── register/route.ts # POST /api/auth/register
│       ├── products/
│       │   ├── route.ts          # GET + POST /api/products
│       │   └── [id]/route.ts     # GET + PATCH + DELETE /api/products/:id
│       ├── orders/
│       │   └── route.ts          # GET + POST /api/orders
│       └── upload/
│           └── route.ts          # POST /api/upload (Cloudinary)
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── models/
│   ├── Product.ts
│   ├── User.ts
│   └── Order.ts
└── lib/
    ├── db.ts                     # MongoDB connection
    ├── auth.ts                   # JWT helpers
    └── utils.ts                  # API response helpers + slug generator
```

---

## API Reference

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login, returns JWT token |

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | List published products (paginated) |
| POST | `/api/products` | Create product (admin only) |
| GET | `/api/products/:id` | Single product (by ID or slug) |
| PATCH | `/api/products/:id` | Update product (admin only) |
| DELETE | `/api/products/:id` | Delete product (admin only) |

### Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/orders` | My orders (admin sees all) |
| POST | `/api/orders` | Place new order |

### Upload
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/upload` | Upload image to Cloudinary (admin only) |

---

## Contributing

Branch naming: `feat/`, `fix/`, `chore/`

Commit style: Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`)

---

*YD — Dress sharp. Move silent. Let the drip speak.*
