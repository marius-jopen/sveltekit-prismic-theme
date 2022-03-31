<script>
// Import the mount function
import { onMount } from 'svelte';

// Import data from parent comps
export let input

// Check if buy button field is filled
if(input.shopify_button_id[0]) {
    
    // Function to display buy button
    onMount(() => {
        let script = document.createElement('script');
        script.src = "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js"
        document.head.append(script);

        script.onload = function() {
            var client = ShopifyBuy.buildClient({
                domain: 'running-order.myshopify.com',
                storefrontAccessToken: '103587f074413a66b4bf5bb64a0780d6',
            });

            ShopifyBuy.UI.onReady(client).then(function (ui) {
                ui.createComponent('product', {
                id: input.shopify_button_id[0].text,
                node: document.getElementById('product'),
                moneyFormat: '%24%7B%7Bamount%7D%7D',
                options: {
                    "product": {
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "calc(25% - 20px)",
                                    "margin-left": "20px",
                                    "margin-bottom": "50px"
                                },
                                "text-align": "left",
                                "-webkit-appearance": "none",
                                "-moz-appearance": "none",
                                    "appearance": "none"
                            },
                            "button": {
                                "font-family": "Helvetica, Arial, sans-serif",
                                "font-size": "15px",
                                "letter-spacing": ".2em",
                                "padding-top": "10px",
                                "padding-bottom": "10px",
                                "padding-left": "20px",
                                "padding-right": "20px",
                                "color": "white",
                                "-webkit-appearance": "none",
                                "-moz-appearance": "none",
                                    "appearance": "none",
                                "border-radius": "0px",
                                ":hover": {
                                "color": "white",
                                "background-color": "black"
                                },
                                "background-color": "black",
                                ":focus": {
                                "background-color": "black"
                                },
                            },
                            "quantityInput": {
                                "font-size": "17px",
                                "padding-top": "16.5px",
                                "padding-bottom": "16.5px",
                                "-webkit-appearance": "none",
                                "-moz-appearance": "none",
                                    "appearance": "none"
                            }
                            },
                            "contents": {
                            "img": false,
                            "title": false,
                            "price": false
                            },
                            "text": {
                            "button": "PRE-ORDER"
                            }
                        },
                        "productSet": {
                            "styles": {
                            "products": {
                                "@media (min-width: 601px)": {
                                "margin-left": "-20px"
                                }
                            }
                            }
                        },
                        "modalProduct": {
                            "contents": {
                                "img": false,
                                "imgWithCarousel": true,
                                "button": false,
                                "buttonWithQuantity": true
                            },
                            "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                "max-width": "100%",
                                "margin-left": "0px",
                                "margin-bottom": "0px"
                                }
                            },
                            "button": {
                                "font-family": "Helvetica, Arial, sans-serif",
                                "font-size": "17px",
                                "padding-top": "16.5px",
                                "padding-bottom": "16.5px",
                                "color": "#000000",
                                ":hover": {
                                "color": "#000000",
                                "background-color": "black"
                                },
                                "background-color": "black",
                                ":focus": {
                                "background-color": "black"
                                },
                            },
                            "quantityInput": {
                                "font-size": "17px",
                                "padding-top": "16.5px",
                                "padding-bottom": "16.5px"
                            }
                            },
                            "text": {
                                "button": "<?php echo $cart_text ?>"
                            }
                        },
                        "cart": {
                            "styles": {
                                "button": {
                                    "font-family": "Helvetica, Arial, sans-serif",
                                    "font-size": "17px",
                                    "padding-top": "16.5px",
                                    "padding-bottom": "16.5px",
                                    "border-radius": "0px",
                                    "color": "black",
                                    ":hover": {
                                        "color": "black",
                                        "background-color": "white"
                                    },
                                    "background-color": "white",
                                    ":focus": {
                                        "background-color": "white"
                                    },
                                },
                                "title": {
                                    "color": "#e8e8d4"
                                },
                                "header": {
                                    "color": "#e8e8d4"
                                },
                                "lineItems": {
                                    "color": "#e8e8d4"
                                },
                                "subtotalText": {
                                    "color": "#e8e8d4"
                                },
                                "subtotal": {
                                    "color": "#e8e8d4"
                                },
                                "notice": {
                                    "color": "#e8e8d4"
                                },
                                "currency": {
                                    "color": "#e8e8d4"
                                },
                                "close": {
                                    "color": "#e8e8d4",
                                    ":hover": {
                                        "color": "#e8e8d4"
                                    }
                                },
                                "empty": {
                                    "color": "#e8e8d4"
                                },
                                "noteDescription": {
                                    "color": "#e8e8d4"
                                },
                                "discountText": {
                                    "color": "#e8e8d4"
                                },
                                "discountIcon": {
                                    "fill": "#e8e8d4"
                                },
                                "discountAmount": {
                                    "color": "#e8e8d4"
                                },
                                "cart": {
                                    "background-color": "#000000"
                                },
                                "footer": {
                                    "background-color": "#000000"
                                }
                            },
                            "text": {
                                "total": "Subtotal",
                                "notice": "",
                                "button": "Checkout"
                            },
                            "popup": false
                        },
                        "toggle": {
                            "styles": {
                            "toggle": {
                                "width": "120px",
                                "font-family": "Helvetica, Arial, sans-serif",
                                "background-color": "blue",
                                "height": "100px",
                                // "opacity": "0",
                                "font-family": "Helvetica, Arial, sans-serif",
                                "background-color": "rgba(0, 0, 0, 0)",
                                ":hover": {
                                "background-color": "rgba(0, 0, 0, 0)"
                                },
                                ":focus": {
                                "background-color": "black"
                                }
                            },
                            "count": {
                                "font-size": "17px",
                                "color": "white",
                                "opacity": "0",
                                ":hover": {
                                "color": "white"
                                }
                            },
                            "iconPath": {
                                "opacity": "0",
                                "fill": "black"
                            }
                            }
                        },
                        "lineItem": {
                            "styles": {
                                "variantTitle": {
                                    "color": "#e8e8d4"
                                },
                                "title": {
                                    "color": "#e8e8d4"
                                },
                                "price": {
                                    "color": "#e8e8d4"
                                },
                                "fullPrice": {
                                    "color": "#e8e8d4"
                                },
                                "discount": {
                                    "color": "#e8e8d4"
                                },
                                "discountIcon": {
                                    "fill": "#e8e8d4"
                                },
                                "quantity": {
                                    "color": "#e8e8d4"
                                },
                                "quantityIncrement": {
                                    "color": "#e8e8d4",
                                    "border-color": "#e8e8d4"
                                },
                                "quantityDecrement": {
                                    "color": "#e8e8d4",
                                    "border-color": "#e8e8d4"
                                },
                                "quantityInput": {
                                    "color": "#e8e8d4",
                                    "border-color": "#e8e8d4"
                                }
                            }
                        }
                    },
                });
            });
        };
    });

}
</script>   

<svelte:head>
    <script src="https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js"></script>
</svelte:head>

<!-- Here the button will get rendered -->
<div id='product'>
</div>

<!-- Cart button -->
<div class="cart-button">
    <svg version="1.1" class="fixed h-5 top-1 right-2 scale-90" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 18.25 19.11" style="enable-background:new 0 0 18.25 19.11;" xml:space="preserve">
        <path d="M15.31,4.34V1.62c0-0.9-0.73-1.62-1.62-1.62H4.56c-0.9,0-1.62,0.73-1.62,1.62v2.72H0v14.77h18.25V4.34H15.31z M4.56,1.25
        h9.13c0.21,0,0.38,0.17,0.38,0.38v2.72H4.18V1.62C4.18,1.42,4.35,1.25,4.56,1.25z M1.25,17.86V5.59H17v12.27H1.25z"/>
    </svg>
</div>

<style lang="postcss">
    :global(.shopify-buy-frame.shopify-buy-frame--toggle.is-sticky.is-active) {
        position: fixed !important;
        right: 0;
        top: -10px !important;
        transition: none !important;
    }

    :global(.shopify-buy-frame.shopify-buy-frame--toggle.is-sticky.is-active iframe) {
        height: 100vh !important;
        position: absolute;
        top: 0px;
        right: 0px;
    }
</style>