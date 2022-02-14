# SliderPanorama

Displays a full-width Slider which uses the Splide slider libary. It also has the option to insert videos and captions.

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
        "image": {
            "dimensions": {
                "width": 720,
                "height": 576
            },
            "alt": null,
            "copyright": null,
            "url": "https://images.prismic.io/mj-theme/d1e345e2-258b-4fa3-a54e-abe393636dde_TJ_15.jpg?auto=compress,format",
            "Big": {
                "dimensions": {
                    "width": 2500,
                    "height": 2000
                },
                "alt": null,
                "copyright": null,
                "url": "https://images.prismic.io/mj-theme/d1e345e2-258b-4fa3-a54e-abe393636dde_TJ_15.jpg?auto=compress,format&rect=0,0,720,576&w=2500&h=2000"
            },
            "Medium": {
                "dimensions": {
                    "width": 1500,
                    "height": 1200
                },
                "alt": null,
                "copyright": null,
                "url": "https://images.prismic.io/mj-theme/d1e345e2-258b-4fa3-a54e-abe393636dde_TJ_15.jpg?auto=compress,format&rect=0,0,720,576&w=1500&h=1200"
            },
            "Small": {
                "dimensions": {
                    "width": 750,
                    "height": 600
                },
                "alt": null,
                "copyright": null,
                "url": "https://images.prismic.io/mj-theme/d1e345e2-258b-4fa3-a54e-abe393636dde_TJ_15.jpg?auto=compress,format&rect=0,0,720,576&w=750&h=600"
            }
        },
        "link": {
            "link_type": "Web",
            "url": "https://mj-theme.prismic.io/documents~b=working&c=published&l=en-gb/YeGELxEAACkA0CBc/?section=Main"
        },
        "caption": [
            {
                "type": "heading1",
                "text": "This is a cool caption!",
                "spans": []
            }
        ],
        "video": {
            "link_type": "Media"
        },
        "video_source": []
    },
    {
        "image": {
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
        "link": {
            "link_type": "Any"
        },
        "caption": [
            {
                "type": "heading1",
                "text": "Through this collaborative process, the series aims to tackle the politics of self-representation under post-colonial culture. Through this collaborative process, the series aims to tackle the politics of self-representation under post-colonial culture.",
                "spans": []
            }
        ],
        "video": {
            "link_type": "Media",
            "name": "OCEAN.mov",
            "kind": "document",
            "url": "https://mj-theme.cdn.prismic.io/mj-theme/eb4fa127-0894-4046-96d0-e770ee4969ae_OCEAN.mov",
            "size": "7568122"
        },
        "video_source": []
    },
    {
        "image": {
            "dimensions": {
                "width": 1920,
                "height": 2325
            },
            "alt": null,
            "copyright": null,
            "url": "https://images.prismic.io/mj-theme/b8824b07-2af0-4699-a5e8-1adcc57f1717_IMG100-web-1920x2325.jpg?auto=compress,format",
            "Big": {
                "dimensions": {
                    "width": 2500,
                    "height": 3027
                },
                "alt": null,
                "copyright": null,
                "url": "https://images.prismic.io/mj-theme/b8824b07-2af0-4699-a5e8-1adcc57f1717_IMG100-web-1920x2325.jpg?auto=compress,format&rect=0,0,1920,2325&w=2500&h=3027"
            },
            "Medium": {
                "dimensions": {
                    "width": 1500,
                    "height": 1816
                },
                "alt": null,
                "copyright": null,
                "url": "https://images.prismic.io/mj-theme/b8824b07-2af0-4699-a5e8-1adcc57f1717_IMG100-web-1920x2325.jpg?auto=compress,format&rect=0,0,1920,2324&w=1500&h=1816"
            },
            "Small": {
                "dimensions": {
                    "width": 750,
                    "height": 908
                },
                "alt": null,
                "copyright": null,
                "url": "https://images.prismic.io/mj-theme/b8824b07-2af0-4699-a5e8-1adcc57f1717_IMG100-web-1920x2325.jpg?auto=compress,format&rect=0,0,1920,2324&w=750&h=908"
            }
        },
        "link": {
            "link_type": "Any"
        },
        "caption": [
            {
                "type": "heading1",
                "text": "Cool captions all over the place!",
                "spans": []
            }
        ],
        "video": {
            "link_type": "Media"
        },
        "video_source": [
            {
                "type": "heading1",
                "text": "https://player.vimeo.com/external/639556675.hd.mp4?s=e3411305c50345502db9423f0e39a3ce9050afd6&profile_id=175",
                "spans": []
            }
        ]
    }
]
````