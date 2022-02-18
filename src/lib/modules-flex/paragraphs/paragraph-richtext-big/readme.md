# Paragraph Richtext Big | Sveltekit + Prismic
Author: www.mariusjopen.com

Displays a richtext field
- Can receive data via parent component or via the Prismic slices module

This is how the component gets used when called via a parent component:
````
<ParagraphRichtextBig 
inputLongText={document.data.paragraph_richtext_big_long_text}
/>
````

And this is the array of the slice which gets used in Prismic. You can also use it to get the seperate array for the image and the caption if needed
````
"paragraph_richtext_big": {
    "type": "Slice",
    "fieldset": "Paragraph Richtext Big",
    "description": "Big richtext",
    "icon": "text_fields",
    "display": "list",
    "non-repeat": {
        "long_text": {
            "type": "StructuredText",
            "config": {
                "multi": "paragraph,preformatted,heading1,heading2,heading3,heading4,heading5,heading6,strong,em,hyperlink,image,embed,list-item,o-list-item,rtl",
                "label": "Long Text"
            }
        }
    },
    "repeat": {}
    }
}
````