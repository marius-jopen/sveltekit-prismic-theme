# Overlay | Sveltekit + Prismic
Author: www.mariusjopen.com

Displays a list of projects and opens a fullscreen overlay with its content

This is how the component gets used when called via a parent component:
````
<Overlay items={sortedItemsNormal} />
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
    }
  },
  "SEO" : { },
  "Slices" : { },
  "Content" : {},
  "Related" : {},
  "Preview Media" : {}
}
````