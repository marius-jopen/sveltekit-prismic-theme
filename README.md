# Starting Theme for SvelteKit with Prismic, Tailwind, Netlify & Custom Built Components
- This theme uses Sveltekit as JS-framework
- Prismic as CMS
- TailwindCSS as CSS-framework
- Netlify to deploy the website
- Library of custom components

## Setting up Prismic
Prismic is an easy to use CMS which has a free plan for developers and small projects.
You can set up an account here: [Prismic](https://prismic.io/)

## Setting up SvelteKit
1. Run npm install
```
npm install
```


2. Connect to Prismic
   - Change the api-endpoint to your own in this file [client.js](src/utils/client.js)
   - 'https://YOUR-PRISMIC-URL.cdn.prismic.io/api/v2'




## 1: Setting up Prismic
In the folder **masks** are JSON files.
Each file contains the content of one page in Prismic.
You can copy and paste them into the JSON section on a prismic page.
Then the fields will be generated in the backend and are ready to be filled.

![JSON in Prismic](/static/readme/json-prismic.png)

You need to make a difference between Single pages and Repeating Pages.

### Single Pages:
- Home
   - The file is called index.json and serves as the welcome page of the website.

- Projects
   - Is the overview page of all the projects. Here projects can be sorted.

- Products
   - Is the overview page of all the products. Here projects can be sorted.
   - This is exactly the same page like the **Projects Page**. The only difference is that it links to **products** instead of **projects**: