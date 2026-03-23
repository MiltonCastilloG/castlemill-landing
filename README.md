# castlemill-landing

Landing page for CastleMill project.

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

## Building and exporting for S3

Build and export static files:

```bash
npm run build
npm run export
```

The static site will be generated in the `out` directory. You can upload the contents of `out` to S3 for static hosting.

