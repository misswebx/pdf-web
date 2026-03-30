# PDFCraft Project Analysis Report

## Overview
PDFCraft is a comprehensive, privacy-first PDF toolkit built with Next.js 15, React 19, and TypeScript. All PDF processing occurs client-side using WebAssembly technology, ensuring no files leave the user's device.

## Functional Modules

### Core Features
1. **PDF Organization & Management** (27 tools)
   - Merge, split, organize, delete, rotate pages
   - Extract pages/attachments, add blank pages
   - N-up, booklet creation, posterize
   - PDF reader, metadata editing, comparison

2. **Editing & Annotation** (19 tools)
   - Add text, images, annotations, highlights
   - Electronic signatures, watermarks, headers/footers
   - Form filling/creation, OCR, deskewing
   - Background/text color changes, stamp application

3. **Conversion to PDF** (22 tools)
   - Image formats (JPG, PNG, WebP, SVG, BMP, HEIC, TIFF)
   - Document formats (TXT, JSON, PSD, Word, Excel, PowerPoint, XPS, RTF, EPUB, MOBI, Markdown, Email, CBZ, DjVu)

4. **Conversion from PDF** (13 tools)
   - Image formats (JPG, PNG, WebP, BMP, TIFF, Greyscale)
   - Data formats (JSON, DOCX, PowerPoint, Excel)
   - Specialized (Extract images/tables, PDF/A conversion)

5. **Optimization & Repair** (8 tools)
   - Compression, page size fixing, linearization
   - Repair, restriction removal, rasterization
   - Font outlining

6. **Security** (6 tools)
   - Encryption/decryption, sanitization
   - Flattening, metadata removal
   - Permission changes

### Advanced Features
- **Workflow Editor (Beta)**: Visual node-based editor for chaining PDF operations
  - Drag-and-drop interface with 23+ pre-built templates
  - Save/reuse custom workflows
  - Real-time validation and batch processing
  - Collapsible panels for workspace optimization

- **Multi-language Support**: English, Spanish, French, German, Portuguese, Japanese, Korean, Chinese

- **PWA Capabilities**: Installable progressive web app with offline functionality

## Technology Stack
- **Framework**: Next.js 15 (App Router) with static export capability
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **PDF Processing**:
  - PDF.js for rendering
  - pdf-lib for PDF manipulation
  - PyMuPDF (WASM) via @matbee/libreoffice-converter for document conversion
- **State Management**: Zustand
- **Build Tools**: ESLint, Vitest, PostCSS

## Compilation/Build Process

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm

### Local Development
```bash
# Install dependencies
npm install

# Start development server with Turbopack
npm run dev
# Application available at http://localhost:3000
```

### Production Build
```bash
# Install dependencies (if not already installed)
npm install

# Build for production (generates static files in /out)
npm run build
```

> **Note**: During the build process, you may see warnings about headers not working with export and webpack cache parsing. These are normal for Next.js static exports and do not affect the functionality of the built application. The build will still complete successfully and generate all static pages in the `/out` directory.

### Build Scripts
- `dev`: Start development server with Turbopack
- `build`: Create production static export
- `start`: Start production server (Node.js)
- `lint`: Run ESLint
- `test`: Run Vitest tests
- `test:coverage`: Run tests with coverage report
- `postinstall`: Automatically decompress LibreOffice WASM workers

### Build Output
When running `npm run build`, Next.js generates a production-ready static site in the `out/` directory containing:
- Pre-rendered HTML pages for all routes (including localized routes like `/en/`, `/zh/`, etc.)
- Static assets (CSS, JavaScript, images, WASM files) in the `_next/` directory
- Specialized WebAssembly modules for PDF processing:
  - LibreOffice WASM for document conversion (Word/Excel/PPT/RTF to PDF)
  - PyMuPDF WASM for advanced PDF operations
  - PDF.js workers for PDF rendering
- PWA assets (manifest, service worker)
- Sitemap and robots.txt for SEO
- Static files organized by locale in language-specific subdirectories

The build process may show warnings about headers not working with export and webpack cache parsing, but these are normal for Next.js static exports and do not affect functionality.

### Special Build Considerations
- **LibreOffice WASM Files**: The build process automatically decompresses `.gz` WASM files needed for document conversion tools (Word/Excel/PPT/RTF to PDF)
- **Static Export**: Next.js configured with `output: 'export'` for static site generation
- **Internationalization**: Built-in support for 8 languages with locale-specific routing

## Deployment Options

### 1. Vercel (Recommended)
- Automatic deployment via GitHub integration
- Manual: `vercel --prod`
- Pre-configured in `vercel.json` with:
  - Security headers
  - Cross-Origin isolation headers (COOP/COEP/CORP) for SharedArrayBuffer
  - WASM MIME type configuration
  - Cache headers

### 2. Netlify
- Automatic via GitHub integration
- Manual: `netlify deploy --prod --dir=out`
- Configuration in `netlify.toml`

### 3. GitHub Pages
- **Limitation**: Does not support custom headers required for SharedArrayBuffer
- **Impact**: Document conversion tools (Word/Excel/PPT/RTF to PDF) will not work
- **Workaround**: Use for basic PDF tools only (merge, split, compress, etc.)
- Automatic via GitHub Actions (`.github/workflows/deploy.yml`)

### 4. Cloudflare Pages
- Automatic via GitHub integration
- Manual: `wrangler pages deploy out`
- Requires Node version 20 in build settings

### 5. Docker + Nginx (Self-hosted)
- **Development**: `docker compose --profile dev up` (http://localhost:3000)
- **Production**: `docker compose --profile prod up --build` (http://localhost:8080)
- Uses multi-stage Dockerfile:
  1. Builder stage: Node.js for Next.js build
  2. Production stage: Nginx for serving static files
- Includes automatic decompression of LibreOffice WASM .gz files

### 6. Traditional Server (Nginx/Apache)
- Build with `npm run build`
- Copy contents of `/out` directory to web root
- Requires specific configuration for:
  - WASM MIME type (`application/wasm`)
  - Cross-Origin headers (COOP/COEP/CORP)
  - Service worker support (for PWA)
  - HTML5 mode routing (trailing slashes)

### 7. Other Platforms
- **AWS S3 + CloudFront**: Requires CloudFront response headers policy for COOP/COEP/CORP
- **Firebase Hosting**: Requires custom headers configuration in `firebase.json`

## Deployment Verification Checklist
After deployment, verify:
1. Multi-language routing works (`/en`, `/zh`, etc.)
2. PDF processing tools function (check WASM loading)
3. Cross-Origin headers present (DevTools → Network → Response Headers)
4. `SharedArrayBuffer` available (console: `typeof SharedArrayBuffer === "function"`)
5. PWA install prompt appears on mobile
6. Service worker registers (DevTools → Application)
7. Static assets load with proper caching headers
8. Security headers applied

## Key Architectural Notes
- **Privacy-First**: All processing occurs in-browser; no file uploads to servers
- **WebAssembly Heavy**: Utilizes WASM for CPU-intensive PDF operations
- **Static Site**: Optimized for CDN deployment with pre-rendered HTML
- **Internationalized**: Built-in i18n with locale-based routing
- **Progressive Web App**: Installable with offline capabilities
- **Modular Structure**: Organized by feature areas in `/src/lib` and `/src/components`

## Maintenance Considerations
- Regular updates to PDF.js and pdf-lib dependencies
- Monitor LibreOffice WASM updates for document conversion improvements
- Keep Next.js and React versions current for performance and security
- Test WASM functionality across target browsers (especially Safari and Firefox)
- Monitor build output size and optimize as needed
