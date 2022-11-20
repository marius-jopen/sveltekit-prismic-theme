<script>
  import { onMount } from 'svelte';
	export let productUID

  onMount(() => {
    let script = document.createElement('script');
    script.src = "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js"
    document.head.append(script);

    script.onload = function() {
      var client = ShopifyBuy.buildClient({
        domain: 'checkout.runningorder.net',
        storefrontAccessToken: '103587f074413a66b4bf5bb64a0780d6',
      });

      ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
          id: productUID,
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
                "text-align": "left"
              },
              "button": {
                "font-family": "Inter, Arial, sans-serif",
                "font-size": "1rem",
								"letter-spacing": "0.05em",
								"text-transform": "uppercase",
                "font-weight": "500",
                "padding-top": "8px",
                "padding-bottom": "8px",
                "padding-left": "20px",
                "padding-right": "20px",
                "color": "white",
                "border-radius": "0px",
                ":hover": {
                  "color": "white",
                  "background-color": "black"
                },
                "background-color": "black",
                ":focus": {
                  "background-color": "white"
                },
              },
              "quantityInput": {
                "font-size": "17px",
                "padding-top": "16.5px",
                "padding-bottom": "16.5px"
              }
            },
            "contents": {
              "img": false,
              "title": false,
              "price": false
            },
            "text": {
              "button": "Add to cart"
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
</script>

<div id="product" class="px-6 pt-2 pb-8" />

<style lang="postcss">
	:global(.shopify-buy-frame.shopify-buy-frame--toggle.is-sticky.is-active) {
		position: fixed !important;
		right: 0;
		top: -10px !important;
		transition: none !important;
		height: 100px !important;
	}

	:global(.shopify-buy-frame.shopify-buy-frame--toggle.is-sticky.is-active iframe) {
		height: 100vh !important;
		position: absolute;
		top: 0px;
		right: 0px;
		height: 100px !important;
		width: 50px !important;
	}
</style>
