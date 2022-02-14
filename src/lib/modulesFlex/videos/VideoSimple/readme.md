# VideoSimple

Displays a video muted as loop without controls

<br>

![preview](preview.png)

<br>

Can receive information via :
- Parent component
- Slice Function

<br>

Array structure which needs to be inserted

````
let exampleData = [
    {
        "video": {
            "link_type": "Media",
            "name": "OCEAN.mov",
            "kind": "document",
            "url": "https://mj-theme.cdn.prismic.io/mj-theme/eb4fa127-0894-4046-96d0-e770ee4969ae_OCEAN.mov",
            "size": "7568122"
        },
        "preview_image": {
            "dimensions": {
                "width": 2642,
                "height": 1482
            },
            "alt": null,
            "copyright": null,
            "url": "https://images.prismic.io/mj-theme/4828d948-8059-4a79-9a18-2b404df720cd_Bildschirmfoto+2022-01-14+um+15.27.35.png?auto=compress,format",
            "Big": {
                "dimensions": {
                    "width": 2500,
                    "height": 1402
                },
                "alt": null,
                "copyright": null,
                "url": "https://images.prismic.io/mj-theme/4828d948-8059-4a79-9a18-2b404df720cd_Bildschirmfoto+2022-01-14+um+15.27.35.png?auto=compress,format&rect=0,0,2642,1482&w=2500&h=1402"
            },
            "Medium": {
                "dimensions": {
                    "width": 1500,
                    "height": 841
                },
                "alt": null,
                "copyright": null,
                "url": "https://images.prismic.io/mj-theme/4828d948-8059-4a79-9a18-2b404df720cd_Bildschirmfoto+2022-01-14+um+15.27.35.png?auto=compress,format&rect=0,0,2642,1481&w=1500&h=841"
            },
            "Small": {
                "dimensions": {
                    "width": 750,
                    "height": 421
                },
                "alt": null,
                "copyright": null,
                "url": "https://images.prismic.io/mj-theme/4828d948-8059-4a79-9a18-2b404df720cd_Bildschirmfoto+2022-01-14+um+15.27.35.png?auto=compress,format&rect=0,0,2640,1482&w=750&h=421"
            }
        },
        "vimeo": [
            {
                "type": "heading1",
                "text": "",
                "spans": []
            }
        ]
    }
]
````