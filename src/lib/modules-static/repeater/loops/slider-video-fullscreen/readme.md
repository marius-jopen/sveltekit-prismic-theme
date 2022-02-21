# Slider Video Fullscreen | Sveltekit + Prismic
Author: www.mariusjopen.com

Displays a video slider for projects which can be adjusted in height
- Vertical Slider
- Touchable aread and animated preview
- Scrollable with mousewheel or touchpad
- Fullscreen or Grid (4 items view)

This is how the component gets used when called via a parent component:
````
<SliderVideoFullscreen items={sortedItems} allItems={allItems} />
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
    "brightness" : {
      "type" : "Boolean",
      "config" : {
        "placeholder_false" : "dark",
        "placeholder_true" : "light",
        "default_value" : true,
        "label" : "Brightness"
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
  "Related" : {
    "related_projects" : {
      "type" : "Group",
      "config" : {
        "fields" : {
          "related_project" : {
            "type" : "Link",
            "config" : {
              "select" : "document",
              "customtypes" : [ "project" ],
              "label" : "Related Project"
            }
          }
        },
        "label" : "Related Projects"
      }
    }
  },
  "Preview Media" : {
    "preview_video" : {
      "type" : "Link",
      "config" : {
        "select" : "media",
        "label" : "Preview Video"
      }
    },
    "preview_video_link" : {
      "type" : "StructuredText",
      "config" : {
        "single" : "heading1,heading2,heading3,heading4,heading5,heading6",
        "label" : "Preview Video Link"
      }
    },
    "preview_video_poster" : {
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
        "label" : "Preview Video Poster"
      }
    }
  }
}
````