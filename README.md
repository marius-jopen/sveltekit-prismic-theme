# Starting Theme for SvelteKit with Prismic, Tailwind, Netlify & Custom Built Components
- This theme uses Sveltekit as JS-framework
- Prismic as CMS
- TailwindCSS as CSS-framework
- Netlify to deploy the website
- Library of custom components

## Setting up Prismic
Prismic is an easy to use CMS which has a free plan for developers and small projects.
You can set up an account here: [Prismic](https://prismic.io/)


### Create pages in Prismic
Once you have your account you should **create the folllowing pages**.

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


Now you have all the pages.

### Create the fields in Prismic

This can be a tiring process.

But fortunately Prismic allows us to copy and paste the fields as JSON file into each page.

In the folder [masks](masks) are JSON files which you need.

Each file contains the fields of one page in Prismic.

You can copy and paste the content of such a file into the JSON section on a prismic page.

Then the fields will be generated in the backend and are ready to be filled. Awesome!

![JSON in Prismic](/static/readme/prismic-json.png)


Now we have all the pages with all the fields which we need.

Feel free to add more fields or pages in the future. This here is only a starting point for a website.

### Add some basic content into Prismic

Just upload some images and texts and play around with it a bit.
Like this we can check if everything worked, once we connect and run SvelteKit.

You will notice that there is **slice section** in the Pages page. No need to use it now. We will also get back to that later.

## Setting up SvelteKit

### Install SvelteKit
Now it is time to set up SvelteKit. This is super easy. Just run the npm install.
```
npm install
```

### Connect Prismic
Then set up the connection to Prismic.

Because your Prismic account is not private, we do not need a token and can just access it with linking to the public API.

Change the api-endpoint to your own in this file [client.js](src/utils/client.js) to something like this 'https://YOUR-PRISMIC-URL.cdn.prismic.io/api/v2'.

### Run the website
If you now run npm run dev, you should see the website running!
```
npm run dev
```

## Connect to Netlify


## Structure of SvelteKit


## How the components work





