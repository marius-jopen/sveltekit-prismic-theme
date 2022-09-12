# Slider Video Full Info | Sveltekit + Prismic
Author: www.mariusjopen.com

Displays a slider which has the complex video comp integrated
- custom arrows
- video or images

This is how the component gets used when called via a parent component:
````
<SliderVideoFullInfo inputLoop={document.data.slider} />
````

And this is the array of the slice which gets used in Prismic.
````
"slider" : {
    "type" : "Group",
    "config" : {
    "fields" : {
        "slider_image" : {
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
                "label" : "Slider Image"
            }
        },
        "slider_video_poster" : {
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
                "label" : "Slider Video Poster"
            }
        },
        "slider_video" : {
            "type" : "Link",
            "config" : {
                "select" : "media",
                "label" : "Slider Video"
            }
        },
        "slider_video_link" : {
            "type" : "StructuredText",
            "config" : {
                "single" : "heading1,heading2,heading3,heading4,heading5,heading6",
                "label" : "Slider Video Link"
            }
        },
        "slider_caption" : {
            "type" : "StructuredText",
            "config" : {
                "multi" : "paragraph,preformatted,heading1,heading2,heading3,heading4,heading5,heading6,strong,em,hyperlink,image,embed,list-item,o-list-item,rtl",
                "label" : "Slider Caption"
            }
        }
    },
    "label" : "Slider"
    }
}
````