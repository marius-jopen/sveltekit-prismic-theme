# ImageFullWidth

Displays an images as fullwidth image

<br>

![preview](preview.png)

<br>

Can receive information via :
- Parent component
- Slice Function

<br>

Array structure which needs to be inserted
````
let exampleData = [{
    "dimensions": {
        "width": 2000,
        "height": 2000
    },
    "alt": null,
    "copyright": null,
    "url": "https://images.prismic.io/mj-theme/7369dce5-6c4f-453d-89eb-2d65105b5e42_ALBUMCOVERART.jpg?auto=compress,format",
    "Big": {
        "dimensions": {
            "width": 2500,
            "height": 2500
        },
        "alt": null,
        "copyright": null,
        "url": "https://images.prismic.io/mj-theme/7369dce5-6c4f-453d-89eb-2d65105b5e42_ALBUMCOVERART.jpg?auto=compress,format&rect=0,0,2000,2000&w=2500&h=2500"
    },
    "Medium": {
        "dimensions": {
            "width": 1500,
            "height": 1500
        },
        "alt": null,
        "copyright": null,
        "url": "https://images.prismic.io/mj-theme/7369dce5-6c4f-453d-89eb-2d65105b5e42_ALBUMCOVERART.jpg?auto=compress,format&rect=0,0,2000,2000&w=1500&h=1500"
    },
    "Small": {
        "dimensions": {
            "width": 750,
            "height": 750
        },
        "alt": null,
        "copyright": null,
        "url": "https://images.prismic.io/mj-theme/7369dce5-6c4f-453d-89eb-2d65105b5e42_ALBUMCOVERART.jpg?auto=compress,format&rect=0,0,2000,2000&w=750&h=750"
    }
}]
````