# Image Full Screen Component | Sveltekit + Prismic
Author: www.mariusjopen.com

Displays an image in full screen + caption
- Can receive data via parent component or via the Prismic slices module
- You can set the size of the image to Big, Medium, Small and Original
- You can chose if the caption which is inserted is a string or a Prismic richtext
<br>

Note: The basic prismic slice does not include to set the image size in the CMS,
Otherwise to user has to set the size everytime which is annoying.

This is how the component gets used when called via a parent component:
````
<TextImage 
inputImage={document.data.text_image_image} 
inputImageSize={'Big'}
inputCaption={document.data.text_image_caption} 
inputHasRichtext={true}
inputLayout={document.data.text_image_layout}
inputHeight={document.data.text_image_height}
inputLongText={document.data.text_image_long_text}
/>
````

Array which is used in Prismic to dispaly all the fields
````
"text_image" : {
    "type" : "Slice",
    "fieldset" : "Text Image",
    "description" : "Display text next to image",
    "icon" : "chrome_reader_mode",
    "display" : "list",
    "non-repeat" : {
        "layout" : {
        "type" : "Boolean",
        "config" : {
            "placeholder_false" : "Image Left",
            "placeholder_true" : "Image Right",
            "default_value" : false,
            "label" : "Layout"
        }
        },
        "height" : {
        "type" : "Boolean",
        "config" : {
            "placeholder_false" : "Image follows text",
            "placeholder_true" : "Text follows image",
            "default_value" : false,
            "label" : "Height"
        }
        },
        "long_text" : {
        "type" : "StructuredText",
        "config" : {
            "multi" : "paragraph,preformatted,heading1,heading2,heading3,heading4,heading5,heading6,strong,em,hyperlink,image,embed,list-item,o-list-item,rtl",
            "label" : "Long Text"
        }
        },
        "image" : {
        "type" : "Image",
        "config" : {
            "constraint" : { },
            "thumbnails" : [ {
            "name" : "Big",
            "width" : 2500,
            "height" : null
            }, {
            "name" : "Medium",
            "width" : 1500,
            "height" : null
            }, {
            "name" : "Small",
            "width" : 750,
            "height" : null
            } ],
            "label" : "Image"
        }
        },
        "caption" : {
        "type" : "StructuredText",
        "config" : {
            "multi" : "paragraph,preformatted,heading1,heading2,heading3,heading4,heading5,heading6,strong,em,hyperlink,image,embed,list-item,o-list-item,rtl",
            "label" : "Caption"
        }
}
````