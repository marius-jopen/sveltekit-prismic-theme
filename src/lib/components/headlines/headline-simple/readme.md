# Paragraph Headline Simple | Sveltekit + Prismic
Author: www.mariusjopen.com

Displays a headline text
- Can receive data via parent component or via the Prismic slices module
- When data is passed through parent component, do not pass an array, but already a string

This is how the component gets used when called via a parent component:
````
<HeadlineSimple inputText={document.data.title[0].text} />
````

And this is the array of the slice which gets used in Prismic. You can also use it to get the seperate array for the image and the caption if needed
````
"headline_simple" : {
    "type" : "Slice",
    "fieldset" : "Headline Simple",
    "description" : "Simple Headline",
    "icon" : "format_color_text",
    "display" : "list",
    "non-repeat" : {
        "text" : {
            "type" : "StructuredText",
            "config" : {
                "single" : "heading1,heading2,heading3,heading4,heading5,heading6",
                "label" : "Text"
            }
        }
    },
    "repeat" : { }
    }
}
````