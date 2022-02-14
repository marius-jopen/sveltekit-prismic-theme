# VideoControls

Displays a video with controls
- play and pause on click on video
- play and pause button
- progress bar
- current and total time
- hide controls when video plays and mouse is not moved

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
        "video": {
            "link_type": "Media"
        },
        "vimeo": [
            {
                "type": "heading1",
                "text": "https://player.vimeo.com/external/639556675.hd.mp4?s=e3411305c50345502db9423f0e39a3ce9050afd6&profile_id=175",
                "spans": []
            }
        ]
    }
]
````