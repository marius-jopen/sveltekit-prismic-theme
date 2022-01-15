# Starting Theme for SvelteKit with Prismic, Tailwind, Netlify & Custom Built Components
- This theme uses Sveltekit as JS-framework
- Prismic as CMS
- TailwindCSS as CSS-framework
- Netlify to deploy the website
- Library of custom components

## Setting up Prismic
Prismic is an easy to use CMS which has a free plan for developers and small projects.
You can set up an account here: [Prismic](https://prismic.io/)

Once you have your account you should create the folllowing pages.

**Do not yet create any fields. We will get back to that later.**

- Home
   - **Single Page**
   - Will be the front page of your website.

- Setup
   - **Single Page**
   - Will hold general information which can be accessed all over the website. For example a navigation, the SEO image or text…

- Page
   - **Repeating Page**
   - This is a template which will used for all pages which are not projects, products or blog posts.
   - It contains a slice field which lets you click together website content from already built components. You can compare it with the **ACF Flexible Content** field which we know from Wordpress.

- Projects
   - **Single Page**
   - Has a list which allows you to sort the projects.

- Project
   - **Repeating Page**
   - This is the page which serves as template for all projects.

- Products (Optional)
   - **Single Page**
   - Has a list which allows you to sort the projects.
   - This is exactly the same page like the **Projects** page. It just links to products instead.
   - No need to create this page, if you do not want to use a shop.

- Product (Optional)
   - **Repeating Page**
   - This is the page which serves as template for all projects.
   - This is exactly the same page like the **Project** page. It just holds product information instead.
   - No need to create this page, if you do not want to use a shop.


Now you have all the pages. Next step is to create the fields.

This can be a tiring process. But fortunately Prismic allows us to copy and paste the fields as JSON file into each page.

In the folder [masks](masks) are JSON files.

Each file contains the content of one page in Prismic. You can copy and paste them into the JSON section on a prismic page. Then the fields will be generated in the backend and are ready to be filled.

![JSON in Prismic](/static/readme/json-prismic.png)





