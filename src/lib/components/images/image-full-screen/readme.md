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
<ImageFullScreen 
inputImage={document.data.image_full_width_image} 
inputImageSize={'Big'}
inputCaption={document.data.image_full_screen_caption[0].text} 
inputHasRichtext={false}
/>
````

And this is the array of the slice which gets used in Prismic. You can also use it to get the seperate array for the image and the caption if needed
````
"image_full_screen" : {
    "type" : "Slice",
    "fieldset" : "Image Full Screen",
    "description" : "Fullscreen image",
    "icon" : "photo_size_select_large",
    "display" : "list",
    "non-repeat" : {
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
    },
    "repeat" : { }
    }
}
````