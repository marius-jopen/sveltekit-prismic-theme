# Galelry List Hover | Sveltekit + Prismic
Author: www.mariusjopen.com

Displays a list of images with the option to hover in fullscreen below as background
This is how the component gets used when called via a parent component:
````
<GalleryListHover inputLoop={document.data.gallery_list_hover} inputBackgroundColor={document.data.gallery_list_hover_backgroundcolor} />
````

And this is the array of the slice which gets used in Prismic. You can also use it to get the seperate array for the image and the caption if needed
````
"gallery_list_hover" : {
    "type" : "Slice",
    "fieldset" : "Gallery List Hover",
    "description" : "Gallery List Hover",
    "icon" : "collections",
    "display" : "list",
    "non-repeat" : {
        "gallery_list_hover_backgroundcolor" : {
        "type" : "StructuredText",
        "config" : {
            "single" : "heading1,heading2,heading3,heading4,heading5,heading6",
            "label" : "Gallery List Hover Backgroundcolor"
        }
        }
    },
    "repeat" : {
        "gallery_image" : {
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
            "label" : "Gallery Image"
        }
        },
        "gallery_image_hover" : {
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
            "label" : "Gallery Image Hover"
        }
        },
        "gallery_image_caption" : {
        "type" : "StructuredText",
        "config" : {
            "multi" : "paragraph,preformatted,heading1,heading2,heading3,heading4,heading5,heading6,strong,em,hyperlink,image,embed,list-item,o-list-item,rtl",
            "label" : "Gallery Image Caption"
        }
        },
        "gallery_image_effect" : {
        "type" : "Select",
        "config" : {
            "options" : [ "blur", "invert", "invert blur" ],
            "label" : "Gallery Image Effect"
        }
        },
        "gallery_image_link" : {
        "type" : "StructuredText",
        "config" : {
            "single" : "heading1,heading2,heading3,heading4,heading5,heading6",
            "label" : "Gallery Image Link"
        }
        },
        "gallery_image_long_text" : {
        "type" : "StructuredText",
        "config" : {
            "multi" : "paragraph,preformatted,heading1,heading2,heading3,heading4,heading5,heading6,strong,em,hyperlink,image,embed,list-item,o-list-item,rtl",
            "label" : "Gallery Image Long Text"
        }
        }
    }
    }
````


