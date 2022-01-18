# Starting Theme for SvelteKit with Prismic, Tailwind, Netlify & Custom Built Components
- This theme uses Sveltekit as JS-framework
- Prismic as CMS
- TailwindCSS as CSS-framework
- Netlify to deploy the website
- Library of custom components

<br>

Preview here:
[sveltekit-prismic-theme.netlify.app](https://sveltekit-prismic-theme.netlify.app/)

I am currently developing this theme. So maybe you will run into a bug. Or maybe something is unfinished. Or maybe I changed something which I described differently in this tutorial. Maybe I did not update the [masks](masks) folder.

<br>

## Setting up Prismic
Prismic is an easy to use CMS which has a free plan for developers and small projects.

You can set up an account here: [Prismic](https://prismic.io/)

<br>

## Create pages in Prismic
Once you have your account set up, create the following pages **without any fields in it**. When creating a page, you are asked if you want to create this page as a single or repeating type.

**Single Types** are for pages which are unique in the website. For example the page which has a list of all the projects. Or the welcome page.

**Repeating Types** are used for blogs, products, projects or a simple page template which will get used for all the simple page.

So now create those pages in Prismic.

- ### Home
   - Create this as a **single type**
   - This will be the front page of your website. it will be connected the the file [index.svelte](src/routes/index.svelte).

- ### Setup
   - Create this as a **single type**
   - Will hold general information which can be accessed all over the website. For example a navigation, the SEO image or text…
   - This page is connected to **all pages**.
   - Also this page is connected to the [__layout.svelte](src/routes/__layout.svelte) file. Because the layout file is always active on each page.

- ### Page
   - Create this as a **repeating type**
   - It contains a slice field which lets you click together website content from already built components. You can compare it with the **ACF Flexible Content** field which we know from Wordpress.
   - So this page is perfect to use as about page, as terms and conditions page or as contact page. Really up to you!

- ### Projects
   - Create this as a **single type**
   - Has a list which allows you to sort the projects.

- ### Project
   - Create this as a **repeating type**
   - This is the page which serves as template for a project.

- ### Products (Optional)
   - Create this as a **single type**
   - Has a list which allows you to sort the projects.
   - This is exactly the same page like the **Projects** page. It just links to products instead.
   - No need to create this page, if you do not want to use a shop.

- ### Product (Optional)
   - Create this as a **repeating type**
   - This is the page which serves as template for all projects.
   - This is exactly the same page like the **Project** page. It just holds product information instead.
   - No need to create this page, if you do not want to use a shop.


Now you have all the pages. Yeah!

<br>

## Create the fields in Prismic
To create all those fields can take a long time… But fortunately Prismic allows us to copy and paste the fields as JSON file into each page. In the folder [masks](masks) are the JSON files which you need. Each file contains the fields of one page in Prismic. You can copy and paste the content of such a file into the JSON section on a prismic page. Then the fields will be generated in the backend and are ready to be filled. Awesome!

![JSON in Prismic](/static/readme/prismic-json.png)


Now we have all the pages with all the fields which we need. Feel free to add more fields or pages in the future. This here is only a starting point for a website.

<br>

## Add some basic content into Prismic
Because we all liek to see things, just upload some images and texts and play around with it a bit.
Like this we can check if everything worked, once we connect and run SvelteKit. You will notice that there is **slice section** in the Pages page. You can also fill some content in here. Or do that later if you want…

<br>

## Setting up SvelteKit
Now it is time to set up SvelteKit. This is super easy. Just run the npm install.
```
npm install
```
It will now install all modules and dependencies which you will need. Wuhu!

<br>

## Connect SvelteKit to Prismic
Then set up the connection to Prismic.

Because your Prismic account is not private, we do not need a token and can just access it with linking to the public API.

Change the api-endpoint to your own in this file [client.js](src/utils/client.js) to something like this 'https://YOUR-PRISMIC-URL.cdn.prismic.io/api/v2'.

<br>

## Run the website
If you now run the server, you should see the website running! I hope for you, that it works.
```
npm run dev
```

<br>

## Connect to Netlify
In this repository, things are set up that you can deploy the website easily on Netlify.
We do not use any .env file. So you just need to connect your Netlify Project to this repository in your GitHub account and off we go!

<br>

## Structure of SvelteKit
There are two main folders for you when you develop this website. Both are in the [src](src) folder.

- [Routes](src/routes) (Contains all the page templates)
- [Lib](src/lib) (Contains all the custom compnents, like navigation, image-modules etc…)

We start in the **routes** folder first. In the routes folder are the following files:

- ### [index.svelte](src/routes/index.svelte)
  - This is the welcome page and it is connected to the **home** page in Prismic.

  - It is also connected to the **setup** page in Prismic to get the data of the navigation. As well it is possible to include the navigation globally in the [__layout.svelte](src/routes/__layout.svelte). But to have more control, I put the navigation into each page.

  - The variable **document** contains all the information about this page. The variable **setup** contains all the information about the setup page. To see the data in a JSON format, you can log the variables:

    ```
    export let document
	export let setup

	console.log(document)
	console.log(setup)
    ```

- ### [[page].svelte](src/routes/[page].svelte)
  - This is the template page which is used for all pages which are not projects, products etc. For example it is good to use if for an about page, terms and conditions, or any other page which does not get repeated many times on the website.

  - In this page setup I included the **Slicer**. The Slicer gives the user the possibility to arrange the content on this page in a very flexible way. It is very similar to the **Flexible Content Field** from [ACF](https://www.advancedcustomfields.com/resources/flexible-content/) which is used for Wordpress.
	![Slices in Prismic](/static/readme/slices-prismic.png)

- ### [projects.svelte](src/routes/projects.svelte)
  - This is the page which gets all the projects from Prismic.

  - The cool thing here is that you can just copy and paste this page and call it **products.svelte**. Then you only need to change the type to product and it is conneced to the products page.

	```
	const type = 'product'
	```

  - You can see how we grab the **setup** data again. We will need it for the navigation.

  - **And here I try to explain how we get the posts in the order which we have set up in Prismic:**

    - We query all posts which have the type **project**.

    - But then we also acccess the projects page. He get the name of the page by asking SvelteKit for the pageName on which we are right now.

	  ```
	  const pageName = page.path.replace('/', '')

	  const document = await Client.getSingle(pageName)
	  ```

    - Now in this function we filter and order all the posts to the loop which we have on the **projects page**.
	  ```
	  const sortedItems = document.data.order.map(i => {
	  	const uid = i.selected.uid
	  	return allItems.results.find(p => p.uid === uid)
	  })
	  ```

    - Just a reminder: In Prismic we have this field which lets us structure the projects in a list. This is the one which we use to order and filter all the posts.
	![Prismic Projects](/static/readme/prismic-projects.png)

- ### [projects/category/[category].svelte](src/routes/projects/category/[category].svelte)
  - This is the page which displays all the projects which are still visible after the user clickd on a filter.

  - It grabs the name of the URL and displays all the projects which have this tag connected.

- ### [projects/[project].svelte](src/routes/projects/[project].svelte)
  - This page displays the project on which the user is right now.

  - It takes the URL of the active page and looks for a project which has the same UID or ID. Then it displays the content of that project.


- ### [products.svelte](src/routes/products.svelte)
  - This is exactly the same page template like in [projects.svelte](src/routes/projects.svelte).

  - The only different thing to the **projects** page is that it links to the product type.
    ```
    const type = 'product'
    ```

- ### [products/category/[category].svelte](src/routes/products/category/[category].svelte)
  - This is exactly the same page template like in [projects/category/[category].svelte](src/routes/projects/category/[category].svelte).

  - The only different thing to the **projects** page is that it links to the product type.
    ```
    const type = 'product'
    ```
- ### [products/[product].svelte](src/routes/products/[product].svelte)
  - This is exactly the same page template like in [projects/[project].svelte](src/routes/projects/[project].svelte).

  - The only different thing to the **projects** page is that it links to the product type.
    ```
    const type = 'product'
    ```

<br>

## How the components work
I will not go too deep into explaining this. But will give you a quick overview.

I group the components into four categories:

1. ### functionality
   - Those are compnents which serve a specific function. For example a hover-effect which gets reused on some pages. The lazy-load function which I did not include yet. A back button. All those little helpful things which can be reused on all different pages.

	- Also the [Slicer](src/lib/modules/slices/allSlices.svelte) is included. It can be called from any page which has a Slicer set up in Prismic. This file understands which slices you use on your page and displays the needed slices underneath each other. Like this you could have a structure like this:
		- Headline
		- Paragraph
		- Headline
		- Image
		- Paragraph

2. ### modulesStatic
   - Those components are connected to the repeating pages. For example templates for items, loops, filters and all that.

4. ### modulesFlex
   - Here you can find all the compnents which you can reuse to build the website. For example a headline module, or a to-images-next-to-each-other-module, or a parapgraph module. It is an ongoing collection which I will extend in the future.

   - Each Component in this folder can be added manually to the website like here. Or be integrated with the Slicer in Prismic.
	```
    <HeadlineSimple inputHeadline="{document.data.title[0].text}" />
    ```

   - This is why every Slicer Module has two ways of accepting data. You can see it as doors. You use door 1 when you embedd the Module manually. You use door 2 when it is embedded via the Slicer form Prismic. This is also why there is this big Javascript block in each slice. It selects from which door the content comes in. If someone has a more minimal solution for this, I would be happy.
	```
    <script>
	export let slice
    export let inputHeadline

	let headline

	if (slice == undefined){
		headline = inputHeadline
	} else {
		headline = slice.primary.headline
	}
	</script>

	<div class="text-3xl py-16 border-b border-lines text-center">
		{headline}
	</div>
	```

<br>

## TailwindCSS
Last but not least, I use TailwindCSS to keep the code clean and minimal.
On [TailwindCSS](https://tailwindcss.com/) yuo can find more tips and classes of how to use it.

<br>

## Thank you
When I started with SvelteKit and Prismic, I ran into many annoying problems. With this template I think we have a good starting point.