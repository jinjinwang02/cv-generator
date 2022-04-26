# CV Generator 🦾

A CV generator powered by React-pdf and Sanity CMS, for creating and updating CVs using the template provided.

## Motivation

Updating CV in Adobe Illustrator (where my CVs used to live) can easily mess up spacing and don't support grammar/spelling checking.

## What does the template look like?

![CV example](./cv-pdf/src/public/template.jpg)

## Getting started

### Setup

1. Install packages in `cv-pdf` and `cv-studio`:

```sh
yarn install
```

2. Create a new Sanity studio by following [the Sanity doc](https://www.sanity.io/docs/getting-started) and keep a note of the project ID in `sanity.json`.

3. In `cv-studio`, create a `.env.development` file and add the following:

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

### Using the generator

Create/edit the CV in Sanity studio -> Use the link on the homepage of the app -> Preview or download the PDF 👐
