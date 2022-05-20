const Router = require('koa-router');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
const IP_HOST = process.env.IP_HOST || '192.168.34.14'

const router = new Router({
    prefix: '/',
});

const Mypath = [{
    "info": {
        name: 'KOA_API',
    },
    item: [{
            // admin
            name: "Admin",
            item: [{
                    name: "SignUp",
                    request: {
                        method: "POST",
                        header: [{
                            key: "Content-Type",
                            value: "application/json",
                            type: "text"
                        }],
                        body: {
                            mode: 'raw',
                            raw: '{"email":"", "password":""}',
                            option: {
                                raw: {
                                    language: 'json',
                                },
                            }
                        },
                        url: "http://" + IP_HOST + ":" + PORT + "/admin/signup",

                    },
                    respone: []

                },
                {
                    name: "SignIn",
                    request: {
                        method: "POST",
                        header: [{
                            key: "Content-Type",
                            value: "application/json",
                            type: "text"
                        }],
                        body: {
                            mode: 'raw',
                            raw: '{"email":"", "password":""}',
                            option: {
                                raw: {
                                    language: 'json',
                                },
                            }
                        },
                        url: "http://" + IP_HOST + ":" + PORT + "/admin/signin",
                    },
                    respone: []
                },
                {
                    name: "Gets",
                    request: {
                        method: "GET",
                        header: [],
                        url: "http://" + IP_HOST + ":" + PORT + "/admin",
                    },
                    respone: []
                },
                {
                    name: "Get",
                    request: {
                        method: "GET",
                        header: [],
                        url: "http://" + IP_HOST + ":" + PORT + "/admin/:id",
                    },
                    respone: []
                },
                {
                    name: "Put",
                    request: {
                        method: "PUT",
                        header: [{
                            key: "Content-Type",
                            value: "application/json",
                            type: "text"
                        }],
                        body: {
                            mode: 'raw',
                            raw: '{"email":"", "password":""}',
                            option: {
                                raw: {
                                    language: 'json',
                                },
                            }
                        },
                        url: "http://" + IP_HOST + ":" + PORT + "/admin/:id",
                    },
                    respone: []
                },
                {
                    name: "Delete",
                    request: {
                        method: "DELETE",
                        header: [],
                        url: "http://" + IP_HOST + ":" + PORT + "/admin/:id",
                    },
                    respone: []
                },
            ]
        },
        {
            // category
            name: "Category",
            item: [{
                    name: "Post",
                    request: {
                        method: "POST",
                        header: [{
                            key: "Content-Type",
                            value: "application/json",
                            type: "text"
                        }],
                        body: {
                            mode: 'raw',
                            raw: '{"name":"","description":""}',
                            option: {
                                raw: {
                                    language: 'json',
                                }
                            }
                        },
                        url: "http://" + IP_HOST + ":" + PORT + "/category",
                    },
                    respone: []
                },
                {
                    name: "Gets",
                    request: {
                        method: "GET",
                        header: [],
                        url: "http://" + IP_HOST + ":" + PORT + "/category",
                    },
                    respone: []
                },
                {
                    name: "Get",
                    request: {
                        method: "GET",
                        header: [],
                        url: "http://" + IP_HOST + ":" + PORT + "/category/:id",
                    },
                    respone: []
                },
                {
                    name: "Put",
                    request: {
                        method: "PUT",
                        header: [{
                            key: "Content-Type",
                            value: "application/json",
                            type: "text"
                        }],
                        body: {
                            mode: 'raw',
                            raw: '{"name":"","description":""}',
                            option: {
                                raw: {
                                    language: 'json',
                                },
                            }
                        },
                        url: "http://" + IP_HOST + ":" + PORT + "/category/:id",
                    },
                    respone: []
                },
                {
                    name: "Delete",
                    request: {
                        method: "DELETE",
                        header: [],
                        url: "http://" + IP_HOST + ":" + PORT + "/category/:id",
                    },
                    respone: []
                },
            ]

        },
        {
            // product
            name: "Product",
            item: [{
                    name: "Post",
                    request: {
                        method: "POST",
                        header: [{
                            key: "Content-Type",
                            value: "application/json",
                            type: "text"
                        }],
                        body: {
                            mode: 'raw',
                            raw: '{"name":"","description":"","price":0,"category_id":0}',
                            option: {
                                raw: {
                                    language: 'json',
                                }
                            }
                        },
                        url: "http://" + IP_HOST + ":" + PORT + "/product",
                    },
                    respone: []
                },
                {
                    name: "Gets",
                    request: {
                        method: "GET",
                        header: [],
                        url: "http://" + IP_HOST + ":" + PORT + "/product",
                    },
                    respone: []
                },
                {
                    name: "Get",
                    request: {
                        method: "GET",
                        header: [],
                        url: "http://" + IP_HOST + ":" + PORT + "/product/:id",
                    },
                    respone: []
                },
                {
                    name: "Put",
                    request: {
                        method: "PUT",
                        header: [{
                            key: "Content-Type",
                            value: "application/json",
                            type: "text"
                        }],
                        body: {
                            mode: 'raw',
                            raw: '{"name":"","description":"","price":0,"category_id":0}',
                            option: {
                                raw: {
                                    language: 'json',
                                },
                            }
                        },
                        url: "http://" + IP_HOST + ":" + PORT + "/product/:id",
                    },
                    respone: []
                },
                {
                    name: "Delete",
                    request: {
                        method: "DELETE",
                        header: [],
                        url: "http://" + IP_HOST + ":" + PORT + "/product/:id",
                    },
                    respone: []
                },
            ]

        },
        {
            // order
            name: "Order",
            item: [{
                    name: "Post",
                    request: {
                        method: "POST",
                        header: [{
                            key: "Content-Type",
                            value: "application/json",
                            type: "text"
                        }],
                        body: {
                            mode: 'raw',
                            raw: '{"product_id":0,"quantity":0}',
                            option: {
                                raw: {
                                    language: 'json',
                                }
                            }
                        },
                        url: "http://" + IP_HOST + ":" + PORT + "/order",
                    },
                    respone: []
                },
                {
                    name: "Gets",
                    request: {
                        method: "GET",
                        header: [],
                        url: "http://" + IP_HOST + ":" + PORT + "/order",
                    },
                    respone: []
                },
                {
                    name: "Get",
                    request: {
                        method: "GET",
                        header: [],
                        url: "http://" + IP_HOST + ":" + PORT + "/order/:id",
                    },
                    respone: []
                },
                {
                    name: "Put",
                    request: {
                        method: "PUT",
                        header: [{
                            key: "Content-Type",
                            value: "application/json",
                            type: "text"
                        }],
                        body: {
                            mode: 'raw',
                            raw: '{"product_id":0,"quantity":0}',
                            option: {
                                raw: {
                                    language: 'json',
                                },
                            }
                        },
                        url: "http://" + IP_HOST + ":" + PORT + "/order/:id",
                    },
                    respone: []
                },
                {
                    name: "Delete",
                    request: {
                        method: "DELETE",
                        header: [],
                        url: "http://" + IP_HOST + ":" + PORT + "/order/:id",
                    },
                    respone: []
                },
            ]
        },
        {
            // order_detail
            name: "Order_detail",
            item: [{
                    name: "Post",
                    request: {
                        method: "POST",
                        header: [{
                            key: "Content-Type",
                            value: "application/json",
                            type: "text"
                        }],
                        body: {
                            mode: 'raw',
                            raw: '{"order_id":0,"product_id":0,"quantity":0}',
                            option: {
                                raw: {
                                    language: 'json',
                                }
                            }
                        },
                        url: "http://" + IP_HOST + ":" + PORT + "/order_detail",
                    },
                    respone: []
                },
                {
                    name: "Gets",
                    request: {
                        method: "GET",
                        header: [],
                        url: "http://" + IP_HOST + ":" + PORT + "/order_detail",
                    },
                    respone: []
                },
                {
                    name: "Get",
                    request: {
                        method: "GET",
                        header: [],
                        url: "http://" + IP_HOST + ":" + PORT + "/order_detail/:id",
                    },
                    respone: []
                },
                {
                    name: "Put",
                    request: {
                        method: "PUT",
                        header: [{
                            key: "Content-Type",
                            value: "application/json",
                            type: "text"
                        }],
                        body: {
                            mode: 'raw',
                            raw: '{"order_id":0,"product_id":0,"quantity":0}',
                            option: {
                                raw: {
                                    language: 'json',
                                },
                            }
                        },
                        url: "http://" + IP_HOST + ":" + PORT + "/order_detail/:id",
                    },
                    respone: []
                },
                {
                    name: "Delete",
                    request: {
                        method: "DELETE",
                        header: [],
                        url: "http://" + IP_HOST + ":" + PORT + "/order_detail/:id",
                    },
                    respone: []
                },
            ]
        },
        {
            // cart
            name: "Cart",
            item: [{
                    name: "Post",
                    request: {
                        method: "POST",
                        header: [{
                            key: "Content-Type",
                            value: "application/json",
                            type: "text"
                        }],
                        body: {
                            mode: 'raw',
                            raw: '{"user_id":0,"product_id":0,"quantity":0}',
                            option: {
                                raw: {
                                    language: 'json',
                                }
                            }
                        },
                        url: "http://" + IP_HOST + ":" + PORT + "/cart",
                    },
                    respone: []
                },
                {
                    name: "Gets",
                    request: {
                        method: "GET",
                        header: [],
                        url: "http://" + IP_HOST + ":" + PORT + "/cart",
                    },
                    respone: []
                },
                {
                    name: "Get",
                    request: {
                        method: "GET",
                        header: [],
                        url: "http://" + IP_HOST + ":" + PORT + "/cart/:id",
                    },
                    respone: []
                },
                {
                    name: "Put",
                    request: {
                        method: "PUT",
                        header: [{
                            key: "Content-Type",
                            value: "application/json",
                            type: "text"
                        }],
                        body: {
                            mode: 'raw',
                            raw: '{"user_id":0,"product_id":0,"quantity":0}',
                            option: {
                                raw: {
                                    language: 'json',
                                },
                            }
                        },
                        url: "http://" + IP_HOST + ":" + PORT + "/cart/:id",
                    },
                    respone: []
                },
                {
                    name: "Delete",
                    request: {
                        method: "DELETE",
                        header: [],
                        url: "http://" + IP_HOST + ":" + PORT + "/cart/:id",
                    },
                    respone: []
                },
            ]
        },
        {
            // cart_detail
            name: "Cart_detail",
            item: [{
                    name: "Post",
                    request: {
                        method: "POST",
                        header: [{
                            key: "Content-Type",
                            value: "application/json",
                            type: "text"
                        }],
                        body: {
                            mode: 'raw',
                            raw: '{"cart_id":0,"product_id":0,"quantity":0}',
                            option: {
                                raw: {
                                    language: 'json',
                                }
                            }
                        },
                        url: "http://" + IP_HOST + ":" + PORT + "/cart_detail",
                    },
                    respone: []
                },
                {
                    name: "Gets",
                    request: {
                        method: "GET",
                        header: [],
                        url: "http://" + IP_HOST + ":" + PORT + "/cart_detail",
                    },
                    respone: []
                },
                {
                    name: "Get",
                    request: {
                        method: "GET",
                        header: [],
                        url: "http://" + IP_HOST + ":" + PORT + "/cart_detail/:id",
                    },
                    respone: []
                },
                {
                    name: "Put",
                    request: {
                        method: "PUT",
                        header: [{
                            key: "Content-Type",
                            value: "application/json",
                            type: "text"
                        }],
                        body: {
                            mode: 'raw',
                            raw: '{"cart_id":0,"product_id":0,"quantity":0}',
                            option: {
                                raw: {
                                    language: 'json',
                                },
                            }
                        },
                        url: "http://" + IP_HOST + ":" + PORT + "/cart_detail/:id",
                    },
                    respone: []
                },
                {
                    name: "Delete",
                    request: {
                        method: "DELETE",
                        header: [],
                        url: "http://" + IP_HOST + ":" + PORT + "/cart_detail/:id",
                    },
                    respone: []
                },
            ]
        },
        {
            // supplier
            name: "Supplier",
            item: [{
                    name: "Post",
                    request: {
                        method: "POST",
                        header: [{
                            key: "Content-Type",
                            value: "application/json",
                            type: "text"
                        }],
                        body: {
                            mode: 'raw',
                            raw: '{"name":"string","address":"string","phone":"string","email":"string"}',
                            option: {
                                raw: {
                                    language: 'json',
                                }
                            }
                        },
                        url: "http://" + IP_HOST + ":" + PORT + "/supplier",
                    },
                    respone: []
                },
                {
                    name: "Gets",
                    request: {
                        method: "GET",
                        header: [],
                        url: "http://" + IP_HOST + ":" + PORT + "/supplier",
                    },
                    respone: []
                },
                {
                    name: "Get",
                    request: {
                        method: "GET",
                        header: [],
                        url: "http://" + IP_HOST + ":" + PORT + "/supplier/:id",
                    },
                    respone: []
                },
                {
                    name: "Put",
                    request: {
                        method: "PUT",
                        header: [{
                            key: "Content-Type",
                            value: "application/json",
                            type: "text"
                        }],
                        body: {
                            mode: 'raw',
                            raw: '{"name":"string","address":"string","phone":"string","email":"string"}',
                            option: {
                                raw: {
                                    language: 'json',
                                },
                            }
                        },
                        url: "http://" + IP_HOST + ":" + PORT + "/supplier/:id",
                    },
                    respone: []
                },
                {
                    name: "Delete",
                    request: {
                        method: "DELETE",
                        header: [],
                        url: "http://" + IP_HOST + ":" + PORT + "/supplier/:id",
                    },
                    respone: []
                },
            ]
        },
        {
            // customer
            name: "Customer",
            item: [{
                    name: "Post",
                    request: {
                        method: "POST",
                        header: [{
                            key: "Content-Type",
                            value: "application/json",
                            type: "text"
                        }],
                        body: {
                            mode: 'raw',
                            raw: '{"name":"string","address":"string","phone":"string","email":"string"}',
                            option: {
                                raw: {
                                    language: 'json',
                                }
                            }
                        },
                        url: "http://" + IP_HOST + ":" + PORT + "/customer",
                    },
                    respone: []
                },
                {
                    name: "Gets",
                    request: {
                        method: "GET",
                        header: [],
                        url: "http://" + IP_HOST + ":" + PORT + "/customer",
                    },
                    respone: []
                },
                {
                    name: "Get",
                    request: {
                        method: "GET",
                        header: [],
                        url: "http://" + IP_HOST + ":" + PORT + "/customer/:id",
                    },
                    respone: []
                },
                {
                    name: "Put",
                    request: {
                        method: "PUT",
                        header: [{
                            key: "Content-Type",
                            value: "application/json",
                            type: "text"
                        }],
                        body: {
                            mode: 'raw',
                            raw: '{"name":"string","address":"string","phone":"string","email":"string"}',
                            option: {
                                raw: {
                                    language: 'json',
                                },
                            }
                        },
                        url: "http://" + IP_HOST + ":" + PORT + "/customer/:id",
                    },
                    respone: []
                },
                {
                    name: "Delete",
                    request: {
                        method: "DELETE",
                        header: [],
                        url: "http://" + IP_HOST + ":" + PORT + "/customer/:id",
                    },
                    respone: []
                },
            ]
        },
    ]
}, ]

router.get('/', async ctx => {
    ctx.status = 200;
    ctx.body = {

        status: 'success',
        message: 'Welcome to my API',
        Api: Mypath
    };
});



module.exports = router;