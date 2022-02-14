# FilterItemsTop

A filter which filters all items via tags.

<br>

By clicking on the button filter, a horizontal area which covers the navigation.
Should be included via a SLOT into the navigation

<br>

![preview](preview.png)

<br>

Can receive information via :
- Parent component
    - A list of all items
    - The post-type

<br>

Array structure which needs to be inserted

````
let type = "project"

let exampleData = [
    {
        "id": "Yceq9hIAACsAcHGE",
        "uid": "bitterfly",
        "url": null,
        "type": "project",
        "href": "https://mj-theme.cdn.prismic.io/api/v2/documents/search?ref=YgpW4BEAACIACBeL&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22Yceq9hIAACsAcHGE%22%29+%5D%5D",
        "tags": [
            "Photography"
        ],
        "first_publication_date": "2021-12-25T23:36:25+0000",
        "last_publication_date": "2022-02-03T09:58:07+0000",
        "slugs": [
            "bitterfly"
        ],
        "linked_documents": [],
        "lang": "en-gb",
        "alternate_languages": [],
        "data": {
            "title": [
                {
                    "type": "heading1",
                    "text": "Bitterfly",
                    "spans": []
                }
            ],
            "sub_title": [
                {
                    "type": "heading1",
                    "text": "Cheese from the heart!",
                    "spans": []
                }
            ],
            "description": [],
            "thumbnail": {
                "dimensions": {
                    "width": 1920,
                    "height": 2792
                },
                "alt": null,
                "copyright": null,
                "url": "https://images.prismic.io/mj-theme/a35dd169-0a56-4925-97c5-92792eb92a8d_Michelle-and-Oscar-1920x2792.jpg?auto=compress,format",
                "Big": {
                    "dimensions": {
                        "width": 2500,
                        "height": 3635
                    },
                    "alt": null,
                    "copyright": null,
                    "url": "https://images.prismic.io/mj-theme/a35dd169-0a56-4925-97c5-92792eb92a8d_Michelle-and-Oscar-1920x2792.jpg?auto=compress,format&rect=0,0,1920,2792&w=2500&h=3635"
                },
                "Medium": {
                    "dimensions": {
                        "width": 1500,
                        "height": 2181
                    },
                    "alt": null,
                    "copyright": null,
                    "url": "https://images.prismic.io/mj-theme/a35dd169-0a56-4925-97c5-92792eb92a8d_Michelle-and-Oscar-1920x2792.jpg?auto=compress,format&rect=0,0,1920,2792&w=1500&h=2181"
                },
                "Small": {
                    "dimensions": {
                        "width": 750,
                        "height": 1091
                    },
                    "alt": null,
                    "copyright": null,
                    "url": "https://images.prismic.io/mj-theme/a35dd169-0a56-4925-97c5-92792eb92a8d_Michelle-and-Oscar-1920x2792.jpg?auto=compress,format&rect=0,0,1919,2792&w=750&h=1091"
                }
            },
            "gallery": []
        }
    },
    {
        "id": "YcepexIAAC4AcGrl",
        "uid": "butterfly",
        "url": null,
        "type": "project",
        "href": "https://mj-theme.cdn.prismic.io/api/v2/documents/search?ref=YgpW4BEAACIACBeL&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YcepexIAAC4AcGrl%22%29+%5D%5D",
        "tags": [
            "Photography",
            "Flowers"
        ],
        "first_publication_date": "2021-12-25T23:30:06+0000",
        "last_publication_date": "2022-02-14T13:19:28+0000",
        "slugs": [
            "butterfly"
        ],
        "linked_documents": [],
        "lang": "en-gb",
        "alternate_languages": [],
        "data": {
            "title": [
                {
                    "type": "heading1",
                    "text": "Butterfly",
                    "spans": []
                }
            ],
            "sub_title": [
                {
                    "type": "heading1",
                    "text": "Outstanding food on 3000m2",
                    "spans": []
                }
            ],
            "description": [
                {
                    "type": "heading1",
                    "text": "Outstanding food on 3000m2 is a good thing!",
                    "spans": []
                }
            ],
            "thumbnail": {
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
            "gallery": [
                {
                    "gallery_image": {
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
                    "caption": [
                        {
                            "type": "paragraph",
                            "text": "Image 1",
                            "spans": []
                        }
                    ]
                },
                {
                    "gallery_image": {
                        "dimensions": {
                            "width": 1024,
                            "height": 1024
                        },
                        "alt": null,
                        "copyright": null,
                        "url": "https://images.prismic.io/mj-theme/8587e407-1e1f-4ad9-b920-e371d4f840cd_242690030_286989222937531_152258586832772908_n.jpg?auto=compress,format",
                        "Big": {
                            "dimensions": {
                                "width": 2500,
                                "height": 2500
                            },
                            "alt": null,
                            "copyright": null,
                            "url": "https://images.prismic.io/mj-theme/8587e407-1e1f-4ad9-b920-e371d4f840cd_242690030_286989222937531_152258586832772908_n.jpg?auto=compress,format&rect=0,0,1024,1024&w=2500&h=2500"
                        },
                        "Medium": {
                            "dimensions": {
                                "width": 1500,
                                "height": 1500
                            },
                            "alt": null,
                            "copyright": null,
                            "url": "https://images.prismic.io/mj-theme/8587e407-1e1f-4ad9-b920-e371d4f840cd_242690030_286989222937531_152258586832772908_n.jpg?auto=compress,format&rect=0,0,1024,1024&w=1500&h=1500"
                        },
                        "Small": {
                            "dimensions": {
                                "width": 750,
                                "height": 750
                            },
                            "alt": null,
                            "copyright": null,
                            "url": "https://images.prismic.io/mj-theme/8587e407-1e1f-4ad9-b920-e371d4f840cd_242690030_286989222937531_152258586832772908_n.jpg?auto=compress,format&rect=0,0,1024,1024&w=750&h=750"
                        }
                    },
                    "caption": [
                        {
                            "type": "paragraph",
                            "text": "Image 2",
                            "spans": []
                        }
                    ]
                }
            ]
        }
    },
    {
        "id": "YcerHhIAAC0AcHI8",
        "uid": "betterfly",
        "url": null,
        "type": "project",
        "href": "https://mj-theme.cdn.prismic.io/api/v2/documents/search?ref=YgpW4BEAACIACBeL&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YcerHhIAAC0AcHI8%22%29+%5D%5D",
        "tags": [
            "Ceramics",
            "Flowers"
        ],
        "first_publication_date": "2021-12-25T23:37:06+0000",
        "last_publication_date": "2022-01-31T15:01:16+0000",
        "slugs": [
            "betterfly"
        ],
        "linked_documents": [],
        "lang": "en-gb",
        "alternate_languages": [],
        "data": {
            "title": [
                {
                    "type": "heading1",
                    "text": "Betterfly",
                    "spans": []
                }
            ],
            "sub_title": [
                {
                    "type": "heading1",
                    "text": "Vase",
                    "spans": []
                }
            ],
            "description": [],
            "thumbnail": {
                "dimensions": {
                    "width": 1024,
                    "height": 1024
                },
                "alt": null,
                "copyright": null,
                "url": "https://images.prismic.io/mj-theme/8587e407-1e1f-4ad9-b920-e371d4f840cd_242690030_286989222937531_152258586832772908_n.jpg?auto=compress,format",
                "Big": {
                    "dimensions": {
                        "width": 2500,
                        "height": 2500
                    },
                    "alt": null,
                    "copyright": null,
                    "url": "https://images.prismic.io/mj-theme/8587e407-1e1f-4ad9-b920-e371d4f840cd_242690030_286989222937531_152258586832772908_n.jpg?auto=compress,format&rect=0,0,1024,1024&w=2500&h=2500"
                },
                "Medium": {
                    "dimensions": {
                        "width": 1500,
                        "height": 1500
                    },
                    "alt": null,
                    "copyright": null,
                    "url": "https://images.prismic.io/mj-theme/8587e407-1e1f-4ad9-b920-e371d4f840cd_242690030_286989222937531_152258586832772908_n.jpg?auto=compress,format&rect=0,0,1024,1024&w=1500&h=1500"
                },
                "Small": {
                    "dimensions": {
                        "width": 750,
                        "height": 750
                    },
                    "alt": null,
                    "copyright": null,
                    "url": "https://images.prismic.io/mj-theme/8587e407-1e1f-4ad9-b920-e371d4f840cd_242690030_286989222937531_152258586832772908_n.jpg?auto=compress,format&rect=0,0,1024,1024&w=750&h=750"
                }
            },
            "gallery": []
        }
    },
    {
        "id": "Ycer5xIAACgAcHW8",
        "uid": "sleeping-beauty",
        "url": null,
        "type": "project",
        "href": "https://mj-theme.cdn.prismic.io/api/v2/documents/search?ref=YgpW4BEAACIACBeL&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22Ycer5xIAACgAcHW8%22%29+%5D%5D",
        "tags": [
            "Woman",
            "Clothes"
        ],
        "first_publication_date": "2021-12-25T23:40:26+0000",
        "last_publication_date": "2022-01-31T15:05:09+0000",
        "slugs": [
            "sleeping-beauty"
        ],
        "linked_documents": [],
        "lang": "en-gb",
        "alternate_languages": [],
        "data": {
            "title": [
                {
                    "type": "heading1",
                    "text": "Sleeping Beauty",
                    "spans": []
                }
            ],
            "sub_title": [
                {
                    "type": "heading1",
                    "text": "Transparent",
                    "spans": []
                }
            ],
            "description": [],
            "thumbnail": {
                "dimensions": {
                    "width": 634,
                    "height": 793
                },
                "alt": null,
                "copyright": null,
                "url": "https://images.prismic.io/mj-theme/e913c998-2408-4a2a-811f-d543a8ec0e86_ILGIdeath2-crop.jpg?auto=compress,format",
                "Big": {
                    "dimensions": {
                        "width": 2500,
                        "height": 3127
                    },
                    "alt": null,
                    "copyright": null,
                    "url": "https://images.prismic.io/mj-theme/e913c998-2408-4a2a-811f-d543a8ec0e86_ILGIdeath2-crop.jpg?auto=compress,format&rect=0,0,634,793&w=2500&h=3127"
                },
                "Medium": {
                    "dimensions": {
                        "width": 1500,
                        "height": 1876
                    },
                    "alt": null,
                    "copyright": null,
                    "url": "https://images.prismic.io/mj-theme/e913c998-2408-4a2a-811f-d543a8ec0e86_ILGIdeath2-crop.jpg?auto=compress,format&rect=0,0,634,793&w=1500&h=1876"
                },
                "Small": {
                    "dimensions": {
                        "width": 750,
                        "height": 938
                    },
                    "alt": null,
                    "copyright": null,
                    "url": "https://images.prismic.io/mj-theme/e913c998-2408-4a2a-811f-d543a8ec0e86_ILGIdeath2-crop.jpg?auto=compress,format&rect=0,0,634,793&w=750&h=938"
                }
            },
            "gallery": []
        }
    },
    {
        "id": "Ycer_hIAAC0AcHYm",
        "uid": "sleeping-project",
        "url": null,
        "type": "project",
        "href": "https://mj-theme.cdn.prismic.io/api/v2/documents/search?ref=YgpW4BEAACIACBeL&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22Ycer_hIAAC0AcHYm%22%29+%5D%5D",
        "tags": [
            "Art Direction",
            "Woman",
            "Photography"
        ],
        "first_publication_date": "2021-12-25T23:40:50+0000",
        "last_publication_date": "2022-01-31T15:04:54+0000",
        "slugs": [
            "sleeping-project"
        ],
        "linked_documents": [],
        "lang": "en-gb",
        "alternate_languages": [],
        "data": {
            "title": [
                {
                    "type": "heading1",
                    "text": "Sleeping Project",
                    "spans": []
                }
            ],
            "sub_title": [
                {
                    "type": "heading1",
                    "text": "Red",
                    "spans": []
                }
            ],
            "description": [],
            "thumbnail": {
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
            "gallery": []
        }
    },
    {
        "id": "YcesFRIAAC0AcHaQ",
        "uid": "sleeping-archive",
        "url": null,
        "type": "project",
        "href": "https://mj-theme.cdn.prismic.io/api/v2/documents/search?ref=YgpW4BEAACIACBeL&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YcesFRIAAC0AcHaQ%22%29+%5D%5D",
        "tags": [
            "Art Direction",
            "Flowers"
        ],
        "first_publication_date": "2021-12-25T23:41:13+0000",
        "last_publication_date": "2022-02-03T09:59:00+0000",
        "slugs": [
            "sleeping-archive"
        ],
        "linked_documents": [],
        "lang": "en-gb",
        "alternate_languages": [],
        "data": {
            "title": [
                {
                    "type": "heading1",
                    "text": "Sleeping Archive",
                    "spans": []
                }
            ],
            "sub_title": [
                {
                    "type": "heading1",
                    "text": "From donkey to supermarket!",
                    "spans": []
                }
            ],
            "description": [],
            "thumbnail": {
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
            },
            "gallery": []
        }
    }
]
````