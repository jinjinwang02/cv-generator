# CV Generator 🦾

A CV generator powered by Next.js, React-pdf and Sanity CMS, for creating and updating CVs using the template provided.

## What does the template look like?

[photo here]

## Motivation

[TODO]

## Getting started

### Setup

1. Install packages in `cv-pdf` and `cv-studio`:

```sh
yarn install
```

2. Create a new Sanity studio by following [the Sanity doc](https://www.sanity.io/docs/getting-started), you'll need to add the project ID and dataset to the project

3. In `cv-studio`, create a `.env.development` file and add the following

```sh
SANITY_STUDIO_API_PROJECT_ID=[your-project-id]
SANITY_STUDIO_API_DATASET=[dataset-for-development-mode]
```

4. In `cv-pdf`, create a `.env` file and add the following

```sh
NEXT_PUBLIC_SANITY_STUDIO_API_PROJECT_ID=[your-project-id]
NEXT_PUBLIC_SANITY_STUDIO_API_DATASET=[dataset-for-development-mode]
```

You are all set!

### Running the project

#### `cv-pdf`

Run in development

```sh
yarn workspace cv-pdf dev
```

or in production

```sh
yarn workspace cv-pdf start
```

#### `cv-studio`

Run in development

```sh
yarn workspace cv-studio start
```

Note: even though the studio is in dev mode, if the `SANITY_STUDIO_API_DATASET` in your `.env.development` file is `production`, updating content locally will update the content in production
