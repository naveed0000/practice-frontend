This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
practice-frontend
├─ eslint.config.mjs
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ src
│  ├─ app
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  └─ resume-form
│  │     ├─ components
│  │     │  └─ Index.tsx
│  │     ├─ layout.tsx
│  │     └─ Page.tsx
│  └─ theme
│     └─ theme.ts
└─ tsconfig.json

```
```
practice-frontend
├─ eslint.config.mjs
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ src
│  ├─ app
│  │  ├─ actions
│  │  │  └─ Todo.ts
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ resume-form
│  │  │  ├─ components
│  │  │  │  ├─ Index.tsx
│  │  │  │  ├─ RequirementSection.tsx
│  │  │  │  ├─ ResumeForm.tsx
│  │  │  │  ├─ ResumeFormProvider.tsx
│  │  │  │  ├─ resumeSchema.ts
│  │  │  │  ├─ RHFDateField.tsx
│  │  │  │  ├─ RHFDateTimePicker.tsx
│  │  │  │  ├─ WorkExperienceFields.tsx
│  │  │  │  └─ WorkExperienceSection.tsx
│  │  │  ├─ GlobalComponent
│  │  │  │  └─ SimpleTextField.tsx
│  │  │  ├─ layout.tsx
│  │  │  └─ page.tsx
│  │  ├─ todo-app
│  │  │  ├─ (auth)
│  │  │  │  ├─ login
│  │  │  │  │  ├─ page.tsx
│  │  │  │  │  └─ _components
│  │  │  │  │     └─ Index.tsx
│  │  │  │  └─ register
│  │  │  │     ├─ page.tsx
│  │  │  │     └─ _components
│  │  │  │        └─ Index.tsx
│  │  │  ├─ context
│  │  │  │  ├─ index.tsx
│  │  │  │  └─ useSnakberContext.ts
│  │  │  ├─ dashboard
│  │  │  │  ├─ page.tsx
│  │  │  │  └─ _components
│  │  │  │     └─ Index.tsx
│  │  │  ├─ layout.tsx
│  │  │  ├─ page.tsx
│  │  │  ├─ reducers
│  │  │  │  └─ snakebarReducer.ts
│  │  │  ├─ types
│  │  │  │  ├─ action.ts
│  │  │  │  └─ appContext.ts
│  │  │  └─ utils
│  │  │     └─ token.ts
│  │  └─ try-animation
│  │     ├─ components
│  │     │  ├─ CryptoPriceCard.tsx
│  │     │  ├─ Gpt.tsx
│  │     │  ├─ Index.tsx
│  │     │  └─ SimpleCard.tsx
│  │     └─ page.tsx
│  └─ theme
│     └─ theme.ts
└─ tsconfig.json

```