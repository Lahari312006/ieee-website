# How to Add Photos to Your Project

## Step 1: Add Your Photos
Copy your team member photos to the `public/` folder with these exact names:

- `allabaksh.jpg`
- `jagadeesh.jpg`
- `adi-lakshmi.jpg`
- `mahendra.jpg`
- `dedeep-sai.jpg`
- `nandini.jpg`

## Step 2: Photo Requirements
- **Format**: .jpg, .png, or .webp
- **Size**: 200-400px wide (square or circular crop recommended)
- **Naming**: Use lowercase with hyphens, no spaces

## Step 3: View Your Changes
Run your development server:
```bash
npm run dev
```

Navigate to your Execom page to see the photos!

## Alternative: Using Assets Folder
If you prefer to import images, place them in `src/assets/` and import them at the top of execom.tsx:

```typescript
import allabakshImg from '../assets/allabaksh.jpg';
// Then use allabakshImg instead of "/allabaksh.jpg"
```