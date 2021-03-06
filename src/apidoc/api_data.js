define({ "api": [
  {
    "type": "get",
    "url": "/v1/exchanger/currency/",
    "title": "Read Currency",
    "name": "readCurrency",
    "group": "CRUD_Currencies",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Read a currency</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Numeric",
            "optional": false,
            "field": "currencyId",
            "description": "<p>The id of a currency</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n    \"currencyNumericCode\": <value>,\n    \"currencyDescription\": <value>,\n    \"currencyAbbreviation\": <value>,\n    \"currencySymbol\": <value>\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/CRUDCurrencies.js",
    "groupTitle": "CRUD_Currencies",
    "error": {
      "examples": [
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"messages\" : [\n     {\n       \"path\" : \"{Nombre de la propiedad}\",\n       \"message\" : \"{Motivo del error}\"\n     },\n     ...\n  ]\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/v1/exchanger/",
    "title": "Amount Conversion",
    "name": "convertAmount",
    "group": "Currency_Exchange",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Convert an amount from a currency to another.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Numeric",
            "optional": false,
            "field": "amount",
            "description": "<p>Amount to convert</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "originCurrency",
            "description": "<p>The origin currency of the amount</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destinationCurrency",
            "description": "<p>The destination currency of the amount</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n \"currencyNumericCode\": <value>,\n \"currencyDescription\": <value>,\n \"currencyAbbreviation\": <value>,\n \"currencySymbol\": <value>,\n \"amountConverted\": <value>\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/exchanger.js",
    "groupTitle": "Currency_Exchange",
    "error": {
      "examples": [
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"messages\" : [\n     {\n       \"path\" : \"{Nombre de la propiedad}\",\n       \"message\" : \"{Motivo del error}\"\n     },\n     ...\n  ]\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/v1/exchanger/articles/:articleId/",
    "title": "Convert Article Price",
    "name": "convertArticle",
    "group": "Currency_Exchange",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Gets the article's price and converts it to the specified currency.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "currency[]",
            "description": "<p>Currency list separated with ,</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n    \"articleId\": <value>,\n    \"conversions\": {\n        {\n            \"currencyId\": <value>,\n            \"currencyNumericCode\": <value>,\n            \"currencyDescription\": <value>,\n            \"currencyAbbreviation\": <value>,\n            \"currencySymbol\": <value>,\n            \"amountConverted\": <value>\n        },\n        {...}\n      }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/exchanger.js",
    "groupTitle": "Currency_Exchange",
    "error": {
      "examples": [
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"messages\" : [\n     {\n       \"path\" : \"{Nombre de la propiedad}\",\n       \"message\" : \"{Motivo del error}\"\n     },\n     ...\n  ]\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/v1/exchanger/orders/:orderId",
    "title": "Convert Order Price Amount",
    "name": "convertOrder",
    "group": "Currency_Exchange",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Gets the total amount of an order and converts it to the specified currency.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "currency[]",
            "description": "<p>Currency list separated with ,</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n    \"orderId\": <value>,\n    \"conversions\": {\n        {\n            \"currencyNumericCode\": <value>,\n            \"currencyDescription\": <value>,\n            \"currencyAbbreviation\": <value>,\n            \"currencySymbol\": <value>,\n            \"amountConverted\": <value>\n        },\n        {...}\n    }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/exchanger.js",
    "groupTitle": "Currency_Exchange",
    "error": {
      "examples": [
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"messages\" : [\n     {\n       \"path\" : \"{Nombre de la propiedad}\",\n       \"message\" : \"{Motivo del error}\"\n     },\n     ...\n  ]\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/v1/exchanger/currency/price",
    "title": "Get Quote",
    "name": "getQuote",
    "group": "Quotation",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Gets the direct conversion of a currency</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "originCurrency",
            "description": "<p>The origin currency</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destinationCurrency",
            "description": "<p>The destination currency</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n   \"originCurrency\" {\n       \"currencyNumericCode\": <value>,\n       \"currencyDescription\": <value>,\n       \"currencyAbbreviation\": <value>,\n       \"currencySymbol\": <value>,\n       \"amount\": <value>\n   },\n   \"destinationCurrency\" {\n       \"currencyNumericCode\": <value>,\n       \"currencyDescription\": <value>,\n       \"currencyAbbreviation\": <value>,\n       \"currencySymbol\": <value>,\n       \"amount\": <value>\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/exchanger.js",
    "groupTitle": "Quotation",
    "error": {
      "examples": [
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"messages\" : [\n     {\n       \"path\" : \"{Nombre de la propiedad}\",\n       \"message\" : \"{Motivo del error}\"\n     },\n     ...\n  ]\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "direct",
    "url": "currency-order",
    "title": "Get Order in Currency",
    "group": "RabbitMQ_GET",
    "description": "<p>Ask for the total amount of an Order in a currency</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Numeric",
            "optional": false,
            "field": "currencyId",
            "description": "<p>The id of a currency</p>"
          },
          {
            "group": "Parameter",
            "type": "Numeric",
            "optional": false,
            "field": "orderId",
            "description": "<p>The id of an order</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/rabbit/CRUD.js",
    "groupTitle": "RabbitMQ_GET",
    "name": "DirectCurrencyOrder"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_common_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_common_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/node.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_node_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/node.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_node_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/node.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_node_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/ms/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_ms_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/ms/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_ms_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/ms/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_ms_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/ms/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_ms_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/node.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_node_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/node.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_node_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/node.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_node_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/ms/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_ms_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/ms/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_ms_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/ms/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_ms_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/ms/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_ms_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_braces_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_braces_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_braces_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_braces_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_braces_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_braces_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_braces_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_braces_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_cache_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_cache_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_cache_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_cache_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_cache_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_cache_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_cache_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_cache_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_component_emitter_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_component_emitter_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_component_emitter_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_component_emitter_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_component_emitter_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_component_emitter_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_component_emitter_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_component_emitter_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/copy-descriptor/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_copy_descriptor_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_copy_descriptor_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/node.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_node_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/node.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_node_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/node.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_node_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_expand_brackets_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_expand_brackets_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_expand_brackets_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_expand_brackets_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_expand_brackets_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_expand_brackets_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_extglob_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_extglob_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_extglob_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_extglob_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_extglob_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_extglob_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_extglob_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_extglob_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/fragment-cache/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_fragment_cache_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_fragment_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/fragment-cache/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_fragment_cache_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_fragment_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/fragment-cache/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_fragment_cache_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_fragment_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/fragment-cache/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_fragment_cache_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_fragment_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/fragment-cache/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_fragment_cache_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_fragment_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/htmlparser2/node_modules/isarray/build/build.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_htmlparser2_node_modules_isarray_build_build_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_htmlparser2_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/htmlparser2/node_modules/isarray/build/build.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_htmlparser2_node_modules_isarray_build_build_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_htmlparser2_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/htmlparser2/node_modules/isarray/build/build.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_htmlparser2_node_modules_isarray_build_build_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_htmlparser2_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/htmlparser2/node_modules/isarray/build/build.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_htmlparser2_node_modules_isarray_build_build_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_htmlparser2_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/htmlparser2/node_modules/isarray/build/build.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_htmlparser2_node_modules_isarray_build_build_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_htmlparser2_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/htmlparser2/node_modules/isarray/build/build.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_htmlparser2_node_modules_isarray_build_build_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_htmlparser2_node_modules_isarray_build_build_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/map-cache/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_map_cache_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_map_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/map-cache/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_map_cache_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_map_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/map-cache/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_map_cache_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_map_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/map-cache/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_map_cache_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_map_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/map-cache/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_map_cache_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_map_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_ms_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_ms_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_ms_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_ms_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/object-copy/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_object_copy_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_object_copy_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/regex-not/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_regex_not_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_regex_not_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/regex-not/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_regex_not_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_regex_not_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/repeat-string/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_repeat_string_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_repeat_string_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_common_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_common_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/src/node.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_node_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/src/node.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_node_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/src/node.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_node_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/ms/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_ms_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/ms/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_ms_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/ms/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_ms_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/ms/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_ms_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/compiler.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_compiler_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/source-maps.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_source_maps_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_source_maps_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/static-extend/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_static_extend_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_static_extend_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/to-regex/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_to_regex_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_to_regex_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/to-regex/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_to_regex_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_to_regex_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/use/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_use_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_use_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/use/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_use_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_use_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/util-deprecate/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_util_deprecate_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_util_deprecate_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/util-deprecate/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_util_deprecate_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_util_deprecate_browser_js",
    "name": "Public"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./src/apidoc/main.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_src_apidoc_main_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_src_apidoc_main_js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./src/main.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_src_main_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_src_main_js",
    "name": ""
  }
] });
