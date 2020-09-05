jQuery(document).ready(function() {
  // jQuery("tel_value") = []
  jQuery('.agreement-number').each(function(){
      jQuery(this).on('blur', function() {
        if(jQuery.trim(jQuery(this).val()).length > 0){
          jQuery(this).css("background-color","#FFFFFF")
          // jQuery("tel_value").push(True);
        }
        else{
          jQuery(this).css("background-color","rgba(226, 217, 217)")
          // jQuery("tel_value").push(False);
        }
      })
  })


 });


  


jQuery(function($){
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'ultranmn-jp.myshopify.com',
      storefrontAccessToken: 'e722f8662dcaefd88779db1a61cc85cf',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '5718755344552',
        node: document.getElementById('product-component-1599108119609'),
        moneyFormat: '%C2%A5%7B%7Bamount_no_decimals%7D%7D',
        options: {
            "product": {
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "50px"
                  }
                },
                "button": {
                  "font-size": "16px",
                  "font-weight": "bold",
                  "padding-top": "16px",
                  "padding-bottom": "16px",
                  ":hover": {
                    "background-color": "#0c35bc"
                  },
                  "background-color": "#0d3bd1",
                  ":focus": {
                    "background-color": "#0c35bc"
                  },
                  "border": "1px solid rgba(195,195,195)",
                  "border-radius": "0px",
                  "max-width": "288px",
                  "width": "100%"
                },
                "quantityInput": {
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px"
                }
              },
              "buttonDestination": "checkout",
              "contents": {
                "img": false,
                "title": false,
                "price": false
              },
              "text": {
                "button": "お申込み情報登録へ"
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
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px",
                  ":hover": {
                    "background-color": "#0c35bc"
                  },
                  "background-color": "#0d3bd1",
                  ":focus": {
                    "background-color": "#0c35bc"
                  },
                  "border-radius": "0px",
                  "padding-left": "100px",
                  "padding-right": "100px"
                },
                "quantityInput": {
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px"
                }
              },
              "text": {
                "button": "Add to cart"
              }
            },
            "cart": {
              "styles": {
                "button": {
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px",
                  ":hover": {
                    "background-color": "#0c35bc"
                  },
                  "background-color": "#0d3bd1",
                  ":focus": {
                    "background-color": "#0c35bc"
                  },
                  "border-radius": "0px"
                }
              },
              "text": {
                "total": "Subtotal",
                "button": "Checkout"
              },
              "popup": false
            },
            "toggle": {
              "styles": {
                "toggle": {
                  "background-color": "#0d3bd1",
                  ":hover": {
                    "background-color": "#0c35bc"
                  },
                  ":focus": {
                    "background-color": "#0c35bc"
                  }
                },
                "count": {
                  "font-size": "16px"
                }
              }
            }
          },
      });
    });
  }
});


