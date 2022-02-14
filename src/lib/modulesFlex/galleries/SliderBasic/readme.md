# SliderBasic

Displays a simple Slider

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
                "width": 1800,
                "height": 2471
            },
            "alt": null,
            "copyright": null,
            "url": "https://images.prismic.io/mj-theme/8c018845-459e-4e5f-a738-db6081cde79b_ignant-design-new-tendency-imm-cologne-03.jpg?auto=compress,format",
            "Big": {
                "dimensions": {
                    "width": 2500,
                    "height": 3432
                },
                "alt": null,
                "copyright": null,
                "url": "https://images.prismic.io/mj-theme/8c018845-459e-4e5f-a738-db6081cde79b_ignant-design-new-tendency-imm-cologne-03.jpg?auto=compress,format&rect=0,0,1800,2471&w=2500&h=3432"
            },
            "Medium": {
                "dimensions": {
                    "width": 1500,
                    "height": 2059
                },
                "alt": null,
                "copyright": null,
                "url": "https://images.prismic.io/mj-theme/8c018845-459e-4e5f-a738-db6081cde79b_ignant-design-new-tendency-imm-cologne-03.jpg?auto=compress,format&rect=0,0,1800,2471&w=1500&h=2059"
            },
            "Small": {
                "dimensions": {
                    "width": 750,
                    "height": 1030
                },
                "alt": null,
                "copyright": null,
                "url": "https://images.prismic.io/mj-theme/8c018845-459e-4e5f-a738-db6081cde79b_ignant-design-new-tendency-imm-cologne-03.jpg?auto=compress,format&rect=0,0,1799,2471&w=750&h=1030"
            }
        }
    },
    {
        "image": {
            "dimensions": {
                "width": 1516,
                "height": 2047
            },
            "alt": null,
            "copyright": null,
            "url": "https://images.prismic.io/mj-theme/b0a28cfd-b3fd-4cc1-af08-1edc761e699b_Philippe_Fragniere_NEWTENDENCY_27x20_300dpi_AdobeRGB1998_00013-Web-02.jpg?auto=compress,format",
            "Big": {
                "dimensions": {
                    "width": 2500,
                    "height": 3376
                },
                "alt": null,
                "copyright": null,
                "url": "https://images.prismic.io/mj-theme/b0a28cfd-b3fd-4cc1-af08-1edc761e699b_Philippe_Fragniere_NEWTENDENCY_27x20_300dpi_AdobeRGB1998_00013-Web-02.jpg?auto=compress,format&rect=0,0,1516,2047&w=2500&h=3376"
            },
            "Medium": {
                "dimensions": {
                    "width": 1500,
                    "height": 2025
                },
                "alt": null,
                "copyright": null,
                "url": "https://images.prismic.io/mj-theme/b0a28cfd-b3fd-4cc1-af08-1edc761e699b_Philippe_Fragniere_NEWTENDENCY_27x20_300dpi_AdobeRGB1998_00013-Web-02.jpg?auto=compress,format&rect=0,0,1516,2047&w=1500&h=2025"
            },
            "Small": {
                "dimensions": {
                    "width": 750,
                    "height": 1013
                },
                "alt": null,
                "copyright": null,
                "url": "https://images.prismic.io/mj-theme/b0a28cfd-b3fd-4cc1-af08-1edc761e699b_Philippe_Fragniere_NEWTENDENCY_27x20_300dpi_AdobeRGB1998_00013-Web-02.jpg?auto=compress,format&rect=0,0,1516,2047&w=750&h=1013"
            }
        }
    },
    {
        "image": {
            "dimensions": {
                "width": 1360,
                "height": 907
            },
            "alt": null,
            "copyright": null,
            "url": "https://images.prismic.io/mj-theme/3321b360-8374-4372-8528-c4dd22ffd3e3_ysso-silkeneumann-new-tendency-1360x907.jpg?auto=compress,format",
            "Big": {
                "dimensions": {
                    "width": 2500,
                    "height": 1667
                },
                "alt": null,
                "copyright": null,
                "url": "https://images.prismic.io/mj-theme/3321b360-8374-4372-8528-c4dd22ffd3e3_ysso-silkeneumann-new-tendency-1360x907.jpg?auto=compress,format&rect=0,0,1360,907&w=2500&h=1667"
            },
            "Medium": {
                "dimensions": {
                    "width": 1500,
                    "height": 1000
                },
                "alt": null,
                "copyright": null,
                "url": "https://images.prismic.io/mj-theme/3321b360-8374-4372-8528-c4dd22ffd3e3_ysso-silkeneumann-new-tendency-1360x907.jpg?auto=compress,format&rect=0,0,1360,907&w=1500&h=1000"
            },
            "Small": {
                "dimensions": {
                    "width": 750,
                    "height": 500
                },
                "alt": null,
                "copyright": null,
                "url": "https://images.prismic.io/mj-theme/3321b360-8374-4372-8528-c4dd22ffd3e3_ysso-silkeneumann-new-tendency-1360x907.jpg?auto=compress,format&rect=0,0,1360,907&w=750&h=500"
            }
        }
    }
]
````