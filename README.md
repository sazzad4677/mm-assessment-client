# Betafore E-Commerce Frontend

This is a modern e-commerce frontend built as a [Next.js](https://nextjs.org) application, using the App Router, Server Components, and Tailwind CSS.

## 🚀 How to Run the Project

### Prerequisites
- Node.js (v18.17 or higher)
- npm

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/sazzad4677/mm-assessment-client.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd mm-assessment-client
   ```


3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open the application**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.
   
### Available Scripts
- `npm run dev`: Starts the Next.js development server.
- `npm run build`: Builds the application for production.
- `npm start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for linting errors.

## 🔐 Environment Variables

All runtime configuration is managed through environment variables. The project ships with a `.env.example` template — copy it and fill in the blanks before running the app.

```bash
cp .env.example .env.local
```

## 🏗️ Architecture Explanation

The project follows a clean, component-centric architecture leveraging the latest features of Next.js 15+ and React 19:

- **Next.js App Router**: The application uses the `src/app` directory for routing. This provides layout support, Server Components by default, and streamlined data fetching.
- **Server Actions for Data Fetching**: API calls (fetching categories, products, etc.) are encapsulated in Server Actions located in `src/app/actions`. This ensures secure, server-side data fetching without exposing API logic to the client, while keeping components clean and focused on rendering. We use `next: { revalidate: 3600 }` to cache responses efficiently.
- **Component Anatomy**:
  - `src/components/home`: Domain-specific components relative to the landing page (e.g., `CategoryCarousel`, `BestDealsSection`, `NewArrivals`).
  - `src/components/layout`: Global layout pieces like Headers, Footers, and navigations.
  - `src/components/ui`: Reusable, generic base UI elements (e.g., Tab Navigation, Hero Banner).
- **Styling**: Tailwind CSS v4 is used for utility-first styling. The design strictly adheres to a centralized configuration, maintaining design system parity, semantic colors, and pixel-perfect responsiveness.
- **Code Quality & DX Tools**: Husky, lint-staged, Prettier, and Commitlint are integrated to ensure code formatting, strict TypeScript/ESLint checks on staged files, and conventional commit messages prior to commits.

## 💡 Assumptions Taken

During implementation, a couple of key assumptions and workarounds were applied to meet the requirements:

1. **Category Images Workaround:**
   The `category` endpoint data did not contain images for product categories. To resolve this and display category cards properly, the following code is used to fetch the first product for each category to get a representative product image, falling back to static demo images if a category had no products.

   ```typescript
   // Fetch the first product of each category to get a product image
   const categoriesWithImages = await Promise.all(
     categories.map(async (cat, idx) => {
       const catProducts =
         cat.name === initialCategoryName
           ? initialProducts
           : await getProductsByCategory(cat.name);

       return {
         ...cat,
         image:
           catProducts.length > 0
             ? catProducts[0].image
             : idx % 2 === 0
               ? '/demo-images/category-demo.png'
               : '/demo-images/category-demo-2.png',
       };
     }),
   );
   ```

2. **Responsive Design:**
   The responsive layouts (for mobile, tablet, and extra-large screens) were completely implemented from my own guess and interpretation to ensure a visually cohesive experience across all devices.

3. **Original Price Calculation:**
   The external API only provides the current selling price for each product — there is no `originalPrice` or `discount` field in the response. To visually demonstrate a price-with-discount UI (as implied by the Figma design), the original price is computed as `currentPrice × 1.2` (i.e., a 20% discount is applied). This is a pure UI assumption and not real data.
