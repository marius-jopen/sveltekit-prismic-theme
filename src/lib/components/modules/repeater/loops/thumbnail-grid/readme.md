# Thumbnail Grid | Sveltekit + Prismic
Author: www.mariusjopen.com

Displays a project grid for projects with images and on hover text

This is how the component gets used when called via a parent component:
````
<ThumbnailGrid items={sortedItemsNormal} type={type} />
````

This is an array of a project which will work for this module
````
{
  "General" : {
    "title" : {
      "type" : "StructuredText",
      "config" : {
        "single" : "heading1,heading2,heading3,heading4,heading5,heading6",
        "label" : "Title"
      }
    },
    "uid" : {
      "type" : "UID",
      "config" : {
        "label" : "UID"
      }
    },
    "view" : {
      "type" : "Select",
      "config" : {
        "options" : [ "Normal", "Related" ],
        "default_value" : "Normal",
        "label" : "View"
      }
    },
    "sub_title" : {
      "type" : "StructuredText",
      "config" : {
        "single" : "heading1,heading2,heading3,heading4,heading5,heading6",
        "label" : "Sub Title"
      }
    }
  },
  "SEO" : { },
  "Slices" : { },
  "Content" : {},
  "Related" : {},
  "Preview Media" : {
    "preview_image" : {
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
        "label" : "Preview Image"
      }
    }
  }
}
````