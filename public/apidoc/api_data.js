define({ "api": [
  {
    "type": "post",
    "url": "/account/edit_profile",
    "title": "Edit Profile User",
    "version": "1.0.0",
    "name": "EditProfileUser",
    "group": "Account",
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the User <code>(Required)</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Leave blank if want not to change password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fb_token",
            "description": "<p>Facebook Token of the User .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>select option a both <b>m and f</b> (<i>m=Male, f=Female, or null as default</i>)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthdate",
            "description": "<p>format date <code>yyyy-mm-dd</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone number example <code>+62857555898020</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": "<p>Photo URL of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response Success Edit User (example)",
          "content": "{\n  \"error\": false,\n  \"message\": \"Edit User Succesfully\",\n  \"data\": {\n    \"user\": {\n      \"id\": 1,\n      \"name\": \"Hery kuswandi\",\n      \"email\": \"hery@gmail.com\",\n      \"fb_token\": null,\n      \"gender\": null,\n      \"birtdate\": null,\n      \"phone\": \"084737437434\",\n      \"address\": null,\n      \"photo\": null,\n      \"created_at\": \"2017-02-09 13:55:50\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Field Required",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"The name field is required.\",\n  \"data\": {\n    \"user\": {}\n  }\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: User NotFound",
          "content": "{\n  \"error\": true,\n  \"message\": \"User Not Found.\",\n  \"data\": {\n    \"user\": {}\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/account.edit_profile.js",
    "groupTitle": "Account",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/account/profile",
    "title": "Get Detail Profile User",
    "version": "1.0.0",
    "name": "ProfileUser",
    "group": "Account",
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Success Profil User (example)",
          "content": "{\n  \"error\": false,\n  \"message\": \"Detail of User\",\n  \"data\": {\n    \"user\": {\n      \"id\": 1,\n      \"name\": \"Hery kuswandi\",\n      \"email\": \"hery@gmail.com\",\n      \"fb_token\": null,\n      \"gender\": null,\n      \"birtdate\": null,\n      \"phone\": \"084737437434\",\n      \"address\": null,\n      \"photo\": null,\n      \"created_at\": \"2017-02-09 13:55:50\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: User NotFound",
          "content": "{\n  \"error\": true,\n  \"message\": \"User Not Found.\",\n  \"data\": {\n    \"user\": {}\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/account.profile.js",
    "groupTitle": "Account",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/account/login",
    "title": "login using email & password",
    "version": "1.0.0",
    "name": "LoginUser",
    "group": "Authentication",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User <code>(Required)</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the User <code>(Required)</code>.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response Success Login User (example)",
          "content": "{\n  \"error\": false,\n  \"message\": \"Login User Successfully\",\n  \"data\": {\n    \"user\": {\n      \"id\": 1,\n      \"name\": \"Hery kuswandi\",\n      \"email\": \"hery@gmail.com\",\n      \"fb_token\": null,\n      \"gender\": null,\n      \"birtdate\": null,\n      \"phone\": \"084737437434\",\n      \"address\": null,\n      \"photo\": null,\n      \"created_at\": \"2017-02-09 13:55:50\"\n    },\n    \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQ1OGE0NmQyZGZhNzJhNzkwYTQ1ZWE3MjI0YTk4YzRmNDYzNGJkZjFhMjQ0YTU5NjU2ZWFmODU5YzdmZjE3ZWFlY2EyMzAzZWRjOWI0NGY3In0.eyJhdWQiOiIxIiwianRpIjoiZDU4YTQ2ZDJkZmE3MmE3OTBhNDVlYTcyMjRhOThjNGY0NjM0YmRmMWEyNDRhNTk2NTZlYWY4NTljN2ZmMTdlYWVjYTIzMDNlZGM5YjQ0ZjciLCJpYXQiOjE0ODc2ODI5OTYsIm5iZiI6MTQ4NzY4Mjk5NiwiZXhwIjoxNTE5MjE4OTk2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.imflCCtJkDwqPxc8eR-wQt3xbki475mCKYnzj7CqYuQnS4F3mXmIk2igkSQC1wF_jhKQpZvC8ht9m0yRoRYoiNsPLyYWrT3rlUMnwNFP6nZo6e-cJ5YOxkWGOrI61k4MTViwuqlwJmxn7ROTDnb8fgBhM9Ci03jkqdGKf0AjGOUD9QAA7zVkOB75S5GFnYrkFeLXAvWSXJNWb5iQIOhbDLhfWABCSDiZdqp1BjWdeTqzftsvItgpbENIuxEVf3jiPhHVrm5JOnBo6QiHR4CgEP0ycC2AgvPiWzTlYs-IG16iPbkKTu9aEjIDY0X3RAY8ExAPGvAl3ZQUP5ZzYw5_4lZfWZIObn8Dzap15iaDOxFAoDQR4176DlaLqF6VbA2Xc86lzDfMertkXnIEbnzfSIBZt3pSU0ZXxxMUGfwBEjAqhNcDJ6_9xyyyaQE66DdhK5OUlnhnjKeggV007iuhsVEkVfzML_uI1c5odqfHyT_pO9-dvNK8Smu9lyXuIWYTNbcb3tOwbKn3rh45-esdXCMVhWzx_4xzi2E9D4RUy3iMC9-zvevorNw1FSNPEdgumC_oQ4omz4V-SzcXWEUfpcrAT13HT6nSBpDQGzLPOxqzX6jW0JGD2_X25OTc2pyH8Jntq8YUBlJUAKvYudKh77gLCByKaKJO5B5UMrXPHf4\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response Failure: Validation",
          "content": "{\n  \"error\": true,\n  \"message\": \"Failed: email and password does not match\",\n  \"data\": {\n    \"user\": {},\n    \"token\": \"\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "Response Internal error",
          "content": "   HTTP/1.1 500 Internal Server Error\n\t\tYou should Contact Administrator",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/auth.login.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/account/register",
    "title": "register using email & password",
    "version": "1.0.0",
    "name": "RegisterUser",
    "group": "Authentication",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the User <code>(Required)</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User <code>(Required)</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the User <code>(Required)</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fb_token",
            "description": "<p>Facebook Token of the User .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>select option a both <b>m and f</b> (<i>m=Male, f=Female, or null as default</i>)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthdate",
            "description": "<p>format date <code>yyyy-mm-dd</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone number example <code>+62857555898020</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": "<p>Photo URL of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response Success Registering User (example)",
          "content": "{\n  \"error\": false,\n  \"message\": \"Register User Successfully\",\n  \"data\": {\n    \"user\": {\n      \"id\": 6,\n      \"name\": \"Dinda Lestari\",\n      \"email\": \"dinda@gmail.comsa\",\n      \"fb_token\": null,\n      \"gender\": null,\n      \"birtdate\": null,\n      \"phone\": \"084737437434\",\n      \"address\": null,\n      \"photo\": null,\n      \"created_at\": \"2017-02-21 13:16:15\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response Failure: User Already exists",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"The email has already been taken.\",\n  \"data\": {\n    \"user\": {}\n  }\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Field Required",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"The name field is required.\",\n  \"data\": {\n    \"user\": {}\n  }\n}",
          "type": "json"
        },
        {
          "title": "Response Internal error",
          "content": "   HTTP/1.1 500 Internal Server Error\n\t\tYou should Contact Administrator",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/auth.register.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/category/create",
    "title": "Create New Category",
    "version": "1.0.0",
    "name": "CreateCategory",
    "group": "Category",
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Category <code>(Required)</code>.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response Success Create Category (example)",
          "content": "\n{\n  \"error\": false,\n  \"message\": \"Create Category Successfully\",\n  \"data\": {\n    \"category\": {\n      \"id\": 5,\n      \"name\": \"Sport And Healty\",\n      \"created_at\": \"2017-02-12 09:26:08\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Field Required",
          "content": "{\n  \"error\": true,\n  \"message\": \"The name field is required.\",\n  \"data\": {\n    \"category\": {}\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/category/create.js",
    "groupTitle": "Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/category/data/",
    "title": "Retrieve List Category",
    "version": "1.0.0",
    "name": "DataCategory",
    "group": "Category",
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Success Retrieve List Category (example)",
          "content": "{\n  \"error\": false,\n  \"message\": \"List of Category\",\n  \"data\": {\n    \"list_category\": [\n      {\n        \"id\": 7,\n        \"name\": \"Sweater Blue Ocean Coldplay\",\n        \"created_at\": \"2017-02-16 10:20:51\"\n      },\n      {\n        \"id\": 8,\n        \"name\": \"Polo Holiday\",\n        \"created_at\": \"2017-02-16 10:20:55\"\n      },\n      {\n        \"id\": 5,\n        \"name\": \"Sport And Healty\",\n        \"created_at\": \"2017-02-12 09:26:08\"\n      }\n    ],\n    \"page\": \"1\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response Failure: Data Not Found",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Category Not Found\",\n  \"data\": {\n    \"list_category\": [],\n    \"page\": \"1\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/category/data.js",
    "groupTitle": "Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Option Parameter usage:",
        "content": "?q=&page=1&sortby=created_at&order=desc&filters[name]=&filters[id]=",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>parameter for searching .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number (20 row each 1 page) <code>Default Page 1</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sortby",
            "description": "<p>Field name as a key for sorting <code>e.g sortby=name</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>fill between <code>asc</code> or <code>desc</code>.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/category/{ID}",
    "title": "Retrieve Single Category",
    "version": "1.0.0",
    "name": "DetailCategory",
    "group": "Category",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://tawar.in/api/category/1",
        "type": "json"
      }
    ],
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Success Retrieve single Category (example)",
          "content": "{\n  \"error\": false,\n  \"message\": \"Detail of Category\",\n  \"data\": {\n    \"category\": {\n      \"id\": 5,\n      \"name\": \"Sport And Healty\",\n      \"created_at\": \"2017-02-12 09:26:08\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Data Not Found",
          "content": "{\n  \"error\": true,\n  \"message\": \"Category Not Found.\",\n  \"data\": {\n    \"category\": {}\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/category/detail.js",
    "groupTitle": "Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/category/delete/{ID}",
    "title": "Delete Category",
    "version": "1.0.0",
    "name": "TrashCategory",
    "group": "Category",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://tawar.in/api/category/delete/1",
        "type": "json"
      }
    ],
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Success Soft Delete Category (example)",
          "content": "{\n  \"error\": false,\n  \"message\": \"Delete Category Sucessfully\",\n  \"data\": {\n    \"category\": {\n      \"id\": 5,\n      \"name\": \"Sport And Healty\",\n      \"created_at\": \"2017-02-12 09:26:08\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Data Not Found",
          "content": "{\n  \"error\": true,\n  \"message\": \"Data not found or already removed..\",\n  \"data\": {\n    \"category\": {}\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/category/trash.js",
    "groupTitle": "Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/category/delete/{ID}",
    "title": "Delete Category",
    "version": "1.0.0",
    "name": "TrashCategory",
    "group": "Category",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://tawar.in/category/delete/1",
        "type": "json"
      }
    ],
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>indicated for response status. if <code>true</code> include row object. if <code>false</code> include string error messages</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>array data of categorys</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Success Soft Delete Category (example)",
          "content": "{\n  \"success\": true,\n  \"row\": {\n    \"id\": 6,\n    \"name\": \"tes\",\n    \"created_at\": \"2017-02-12 10:22:18\",\n    \"updated_at\": \"2017-02-12 10:22:30\",\n    \"deleted_at\": \"2017-02-12 10:53:16\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Data Not Found",
          "content": "{\n  \"success\": false,\n  \"messages\": \"Data not found or already removed.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/category.trash.js",
    "groupTitle": "Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/category/update",
    "title": "Update Category",
    "version": "1.0.0",
    "name": "UpdateCategory",
    "group": "Category",
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Existing ID of the Category <code>(Required)</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the  Category <code>(Required)</code>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>indicated for response status. if <code>true</code> include row object. if <code>false</code> include string error messages</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "row",
            "description": "<p>information about category</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Success Update Category (example)",
          "content": "{\n  \"error\": false,\n  \"message\": \"Update Category Successfully\",\n  \"data\": {\n    \"category\": {\n      \"id\": 5,\n      \"name\": \"Sport And Healty\",\n      \"created_at\": \"2017-02-12 09:26:08\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}\n\n{\n  \"error\": true,\n  \"message\": \"The name field is required.\",\n  \"data\": {\n    \"category\": {}\n  }\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Data Not Found",
          "content": "{\n  \"error\": true,\n  \"message\": \"Category Not Found.\",\n  \"data\": {\n    \"category\": {}\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/category/update.js",
    "groupTitle": "Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/chat/create",
    "title": "Create New Chat",
    "version": "1.0.0",
    "name": "CreateChat",
    "group": "Chat",
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "text",
            "description": "<p>Value as a json <code>(Required)</code>. e.g Format : <code>{'messages':'Hi, There i want to buy these product. but my money i's not enough','id_product':'2'}</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "chats_room_id",
            "description": "<p>id from data chats room <code>(Required)</code>.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response Success Create Chat (example)",
          "content": "\n{\n  \"error\": false,\n  \"message\": \"Detail of Chat\",\n  \"data\": {\n    \"chat\": {\n      \"id\": 4,\n      \"users_id\": 4,\n      \"chats_rooms_id\": 2,\n      \"text\": \"{'messages':'Hi, There i want to buy these product. but my money i's not enough','id_product':'2'}\",\n      \"created_at\": \"2017-02-09 14:37:02\",\n      \"user\": {\n        \"id\": 4,\n        \"name\": \"psdfp\",\n        \"email\": \"hery@gmail.comdssds\",\n        \"fb_token\": null,\n        \"gender\": null,\n        \"birtdate\": null,\n        \"phone\": null,\n        \"address\": null,\n        \"photo\": null,\n        \"created_at\": \"2017-02-16 19:45:06\"\n      }\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}\n\n{\n  \"error\": true,\n  \"message\": \"The name field is required.\",\n  \"data\": {\n    \"chat\": {}\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/chat/create.js",
    "groupTitle": "Chat",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/chat/data",
    "title": "Retrieve List Chat",
    "version": "1.0.0",
    "name": "DataChat",
    "group": "Chat",
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Success Retrieve List Chat (example)",
          "content": "\n{\n  \"error\": false,\n  \"message\": \"List of Chat\",\n  \"data\": {\n    \"list_chat\": [\n      {\n        \"id\": 5,\n        \"users_id\": 2,\n        \"chats_rooms_id\": 2,\n        \"text\": \"{'messages':'Hi, There i want to buy these product. but my money i's not enough','id_product':'2'}\",\n        \"created_at\": \"2017-02-12 12:22:25\",\n        \"user\": {\n          \"id\": 2,\n          \"name\": \"Dinda Lestari\",\n          \"email\": \"dinda@gmail.com\",\n          \"fb_token\": null,\n          \"gender\": null,\n          \"birtdate\": null,\n          \"phone\": \"084737437434\",\n          \"address\": null,\n          \"photo\": null,\n          \"created_at\": \"2017-02-09 13:57:03\"\n        }\n      },\n      {\n        \"id\": 4,\n        \"users_id\": 4,\n        \"chats_rooms_id\": 2,\n        \"text\": \"{'messages':'Hi, There i want to buy these product. but my money i's not enough','id_product':'2'}\",\n        \"created_at\": \"2017-02-09 14:37:02\",\n        \"user\": {\n          \"id\": 4,\n          \"name\": \"psdfp\",\n          \"email\": \"hery@gmail.comdssds\",\n          \"fb_token\": null,\n          \"gender\": null,\n          \"birtdate\": null,\n          \"phone\": null,\n          \"address\": null,\n          \"photo\": null,\n          \"created_at\": \"2017-02-16 19:45:06\"\n        }\n      }\n    ],\n    \"page\": \"1\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response Failure: Data Not Found",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Chat Not Found\",\n  \"data\": {\n    \"list_chat\": [],\n    \"page\": \"1\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/chat/data.js",
    "groupTitle": "Chat",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Option Parameter usage:",
        "content": "?q=&page=1&sortby=created_at&order=desc&filters[name]=&filters[id]=",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>parameter for searching .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number (20 row each 1 page) <code>Default Page 1</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sortby",
            "description": "<p>Field name as a key for sorting <code>e.g sortby=name</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>fill between <code>asc</code> or <code>desc</code>.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/chat/{ID}",
    "title": "Retrieve Single Chat",
    "version": "1.0.0",
    "name": "DetailChat",
    "group": "Chat",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://tawar.in/api/chat/5",
        "type": "json"
      }
    ],
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Success Retrieve single Chat (example)",
          "content": "\n{\n  \"error\": false,\n  \"message\": \"Detail of Chat\",\n  \"data\": {\n    \"chat\": {\n      \"id\": 4,\n      \"users_id\": 4,\n      \"chats_rooms_id\": 2,\n      \"text\": \"{'messages':'Hi, There i want to buy these product. but my money i's not enough','id_product':'2'}\",\n      \"created_at\": \"2017-02-09 14:37:02\",\n      \"user\": {\n        \"id\": 4,\n        \"name\": \"psdfp\",\n        \"email\": \"hery@gmail.comdssds\",\n        \"fb_token\": null,\n        \"gender\": null,\n        \"birtdate\": null,\n        \"phone\": null,\n        \"address\": null,\n        \"photo\": null,\n        \"created_at\": \"2017-02-16 19:45:06\"\n      }\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Data Not Found",
          "content": "{\n  \"error\": true,\n  \"message\": \"Chat Not Found.\",\n  \"data\": {\n    \"chat\": {}\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/chat/detail.js",
    "groupTitle": "Chat",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/chat/delete/{ID}",
    "title": "Delete Chat",
    "version": "1.0.0",
    "name": "TrashChat",
    "group": "Chat",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://tawar.in/api/chat/delete/5",
        "type": "json"
      }
    ],
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>indicated for response status. if <code>true</code> include row object. if <code>false</code> include string error messages</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>array data of chats</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Success Soft Delete Chat (example)",
          "content": "{\n  \"success\": true,\n  \"row\": {\n    \"text\": \"{'messages':'Hi, There i want to buy these product. my money is 300.00,00','id_product':'2'}\",\n    \"chats_rooms_id\": \"2\",\n    \"users_id\": 1,\n    \"updated_at\": \"2017-02-12 12:30:08\",\n    \"created_at\": \"2017-02-12 12:22:25\",\n    \"deleted_at\": \"2017-02-12 12:45:55\",\n    \"id\": 5\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Data Not Found",
          "content": "{\n  \"error\": true,\n  \"message\": \"Data not found or already removed..\",\n  \"data\": {\n    \"category\": {}\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/chat/trash.js",
    "groupTitle": "Chat",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/chat/update",
    "title": "Update Chat",
    "version": "1.0.0",
    "name": "UpdateChat",
    "group": "Chat",
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the existing Chat <code>(Required)</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "text",
            "description": "<p>Value as a json <code>(Required)</code>. e.g Format : <code>{'messages':'Hi, There i want to buy these product. but my money i's not enough','id_product':'2'}</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "chats_room_id",
            "description": "<p>id from data chats room <code>(Required)</code>.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response Success Update Chat (example)",
          "content": "\n{\n  \"error\": false,\n  \"message\": \"update chat successfully\",\n  \"data\": {\n    \"chat\": {\n      \"id\": 4,\n      \"users_id\": 4,\n      \"chats_rooms_id\": 2,\n      \"text\": \"{'messages':'Hi, There i want to buy these product. but my money i's not enough','id_product':'2'}\",\n      \"created_at\": \"2017-02-09 14:37:02\",\n      \"user\": {\n        \"id\": 4,\n        \"name\": \"psdfp\",\n        \"email\": \"hery@gmail.comdssds\",\n        \"fb_token\": null,\n        \"gender\": null,\n        \"birtdate\": null,\n        \"phone\": null,\n        \"address\": null,\n        \"photo\": null,\n        \"created_at\": \"2017-02-16 19:45:06\"\n      }\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}\n\n{\n  \"error\": true,\n  \"message\": \"The name field is required.\",\n  \"data\": {\n    \"chat\": {}\n  }\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Data Not Found",
          "content": "{\n  \"error\": true,\n  \"message\": \"Chat Not Found.\",\n  \"data\": {\n    \"chat\": {}\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/chat/update.js",
    "groupTitle": "Chat",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/chats_room/create",
    "title": "Create New ChatsRoom",
    "version": "1.0.0",
    "name": "CreateChatsRoom",
    "group": "ChatsRoom",
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Category <code>(Required)</code>.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response Success Create ChatsRoom (example)",
          "content": "\n{\n  \"error\": false,\n  \"message\": \"Create Chat Room Sucessfully\",\n  \"data\": {\n    \"chatsroom\": {\n      \"id\": 1,\n      \"name\": \"Chats Room 01\",\n      \"created_at\": \"2017-02-09 14:26:23\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}\n\n{\n  \"error\": true,\n  \"message\": \"The name field is required.\",\n  \"data\": {\n    \"chatsroom\": {}\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/chatsroom/create.js",
    "groupTitle": "ChatsRoom",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/chats_room/data",
    "title": "Retrieve List ChatsRoom",
    "version": "1.0.0",
    "name": "DataChatsRoom",
    "group": "ChatsRoom",
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Success Retrieve List ChatsRoom (example)",
          "content": "{\n  \"error\": false,\n  \"message\": \"List of Chats Room\",\n  \"data\": {\n    \"list_chatsroom\": [\n      {\n        \"id\": 2,\n        \"name\": \"Chats Room 02\",\n        \"created_at\": \"2017-02-09 14:26:46\"\n      },\n      {\n        \"id\": 1,\n        \"name\": \"Chats Room 01\",\n        \"created_at\": \"2017-02-09 14:26:23\"\n      }\n    ],\n    \"page\": \"1\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response Failure: Data Not Found",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"ChatsRoom Not Found\",\n  \"data\": {\n    \"list_chatsroom\": [],\n    \"page\": \"1\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/chatsroom/data.js",
    "groupTitle": "ChatsRoom",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Option Parameter usage:",
        "content": "?q=&page=1&sortby=created_at&order=desc&filters[name]=&filters[id]=",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>parameter for searching .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number (20 row each 1 page) <code>Default Page 1</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sortby",
            "description": "<p>Field name as a key for sorting <code>e.g sortby=name</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>fill between <code>asc</code> or <code>desc</code>.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/chats_room/{ID}",
    "title": "Retrieve Single ChatsRoom",
    "version": "1.0.0",
    "name": "DetailChatsRoom",
    "group": "ChatsRoom",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://tawar.in/api/chats_room/1",
        "type": "json"
      }
    ],
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>indicated for response status. if <code>true</code> include row object. if <code>false</code> include string error messages</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "row",
            "description": "<p>information about chats room</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Success Retrieve single ChatsRoom (example)",
          "content": "\n{\n  \"error\": false,\n  \"message\": \"Detail of Chats Room\",\n  \"data\": {\n    \"chatsroom\": {\n      \"id\": 1,\n      \"name\": \"Chats Room 01\",\n      \"created_at\": \"2017-02-09 14:26:23\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Data Not Found",
          "content": "{\n  \"error\": true,\n  \"message\": \"ChatsRoom Not Found.\",\n  \"data\": {\n    \"chatsroom\": {}\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/chatsroom/detail.js",
    "groupTitle": "ChatsRoom",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/chats_room/delete/{ID}",
    "title": "Delete ChatsRoom",
    "version": "1.0.0",
    "name": "TrashChatsRoom",
    "group": "ChatsRoom",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://tawar.in/api/chats_room/delete/1",
        "type": "json"
      }
    ],
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Success Soft Delete ChatsRoom (example)",
          "content": "\n{\n  \"error\": false,\n  \"message\": \"Delete Chats Room Successfully\",\n  \"data\": {\n    \"chatsroom\": {\n      \"id\": 1,\n      \"name\": \"Chats Room 01\",\n      \"created_at\": \"2017-02-09 14:26:23\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Data Not Found",
          "content": "{\n  \"error\": true,\n  \"message\": \"Data not found or already removed..\",\n  \"data\": {\n    \"chatsroom\": {}\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/chatsroom/trash.js",
    "groupTitle": "ChatsRoom",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/chats_room/update",
    "title": "Update ChatsRoom",
    "version": "1.0.0",
    "name": "UpdateChatsRoom",
    "group": "ChatsRoom",
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Existing ID of the ChatsRoom <code>(Required)</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the  ChatsRoom <code>(Required)</code>.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response Success Update ChatsRoom (example)",
          "content": "\n{\n  \"error\": false,\n  \"message\": \"Update Chats Room Successfully\",\n  \"data\": {\n    \"chatsroom\": {\n      \"id\": 1,\n      \"name\": \"Chats Room 01\",\n      \"created_at\": \"2017-02-09 14:26:23\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}\n\n{\n  \"error\": true,\n  \"message\": \"The name field is required.\",\n  \"data\": {\n    \"chatsroom\": {}\n  }\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Data Not Found",
          "content": "{\n  \"error\": true,\n  \"message\": \"ChatsRoom Not Found.\",\n  \"data\": {\n    \"chatsroom\": {}\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/chatsroom/update.js",
    "groupTitle": "ChatsRoom",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/comment/create",
    "title": "Create New Comment",
    "version": "1.0.0",
    "name": "CreateComment",
    "group": "Comment",
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Messages of the Comment <code>(Required)</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "products_id",
            "description": "<p>ID of the related product <code>(Required)</code>.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response Success Create Comment (example)",
          "content": "\n{\n  \"error\": false,\n  \"message\": \"Create Comment Successfully\",\n  \"data\": {\n    \"comment\": {\n      \"id\": 9,\n      \"products_id\": 4,\n      \"users_id\": 1,\n      \"messages\": \"I like this. Best Great T-shirt ever\",\n      \"created_at\": \"2017-02-12 12:38:29\",\n      \"product\": {\n        \"id\": 4,\n        \"name\": \"Sweater Blue Ocean Coldplay\",\n        \"price\": \"30000.00\",\n        \"description\": \"Available SIze X,Xl,L Free Delivery in Area Jabodetabek\",\n        \"images\": \"{'http://thumb.rl/product1.jpg','http://thumb.rl/product2.jpg'}\",\n        \"categories_id\": 2,\n        \"users_id\": 1,\n        \"created_at\": \"2017-02-12 12:10:40\"\n      },\n      \"user\": {\n        \"id\": 1,\n        \"name\": \"Hery kuswandi\",\n        \"email\": \"hery@gmail.com\",\n        \"fb_token\": null,\n        \"gender\": null,\n        \"birtdate\": null,\n        \"phone\": \"084737437434\",\n        \"address\": null,\n        \"photo\": null,\n        \"created_at\": \"2017-02-09 13:55:50\"\n      }\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Field Required",
          "content": "{\n  \"error\": true,\n  \"message\": \"The messages field is required.\",\n  \"data\": {\n    \"comment\": {}\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/comment/create.js",
    "groupTitle": "Comment",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/comment/data",
    "title": "Retrieve List Comment",
    "version": "1.0.0",
    "name": "DataComment",
    "group": "Comment",
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Success Retrieve List Comment (example)",
          "content": "\n{\n  \"error\": false,\n  \"message\": \"List of Comment\",\n  \"data\": {\n    \"list_comment\": [\n      {\n        \"id\": 2,\n        \"products_id\": 1,\n        \"users_id\": 1,\n        \"messages\": \"ahh gk reomenden in\",\n        \"created_at\": \"2017-02-09 14:43:24\",\n        \"product\": null,\n        \"user\": {\n          \"id\": 1,\n          \"name\": \"Hery kuswandi\",\n          \"email\": \"hery@gmail.com\",\n          \"fb_token\": null,\n          \"gender\": null,\n          \"birtdate\": null,\n          \"phone\": \"084737437434\",\n          \"address\": null,\n          \"photo\": null,\n          \"created_at\": \"2017-02-09 13:55:50\"\n        }\n      },\n      {\n        \"id\": 1,\n        \"products_id\": 1,\n        \"users_id\": 1,\n        \"messages\": \"Produknya kok gini ya ,\",\n        \"created_at\": \"2017-02-09 14:43:08\",\n        \"product\": null,\n        \"user\": {\n          \"id\": 1,\n          \"name\": \"Hery kuswandi\",\n          \"email\": \"hery@gmail.com\",\n          \"fb_token\": null,\n          \"gender\": null,\n          \"birtdate\": null,\n          \"phone\": \"084737437434\",\n          \"address\": null,\n          \"photo\": null,\n          \"created_at\": \"2017-02-09 13:55:50\"\n        }\n      }\n    ],\n    \"page\": \"1\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response Failure: Data Not Found",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Comment Not Found\",\n  \"data\": {\n    \"list_comment\": [],\n    \"page\": \"1\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/comment/data.js",
    "groupTitle": "Comment",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Option Parameter usage:",
        "content": "?q=&page=1&sortby=created_at&order=desc&filters[name]=&filters[id]=",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>parameter for searching .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number (20 row each 1 page) <code>Default Page 1</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sortby",
            "description": "<p>Field name as a key for sorting <code>e.g sortby=name</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>fill between <code>asc</code> or <code>desc</code>.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/comment/{ID}",
    "title": "Retrieve Single Comment",
    "version": "1.0.0",
    "name": "DetailComment",
    "group": "Comment",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://tawar.in/api/comment/9",
        "type": "json"
      }
    ],
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Success Retrieve single Comment (example)",
          "content": "\n{\n  \"error\": false,\n  \"message\": \"Detail of Comment\",\n  \"data\": {\n    \"comment\": {\n      \"id\": 9,\n      \"products_id\": 4,\n      \"users_id\": 1,\n      \"messages\": \"I like this. Best Great T-shirt ever\",\n      \"created_at\": \"2017-02-12 12:38:29\",\n      \"product\": {\n        \"id\": 4,\n        \"name\": \"Sweater Blue Ocean Coldplay\",\n        \"price\": \"30000.00\",\n        \"description\": \"Available SIze X,Xl,L Free Delivery in Area Jabodetabek\",\n        \"images\": \"{'http://thumb.rl/product1.jpg','http://thumb.rl/product2.jpg'}\",\n        \"categories_id\": 2,\n        \"users_id\": 1,\n        \"created_at\": \"2017-02-12 12:10:40\"\n      },\n      \"user\": {\n        \"id\": 1,\n        \"name\": \"Hery kuswandi\",\n        \"email\": \"hery@gmail.com\",\n        \"fb_token\": null,\n        \"gender\": null,\n        \"birtdate\": null,\n        \"phone\": \"084737437434\",\n        \"address\": null,\n        \"photo\": null,\n        \"created_at\": \"2017-02-09 13:55:50\"\n      }\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Data Not Found",
          "content": "{\n  \"error\": true,\n  \"message\": \"Comment Not Found.\",\n  \"data\": {\n    \"comment\": {}\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/comment/detail.js",
    "groupTitle": "Comment",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/comment/delete/{ID}",
    "title": "Delete Comment",
    "version": "1.0.0",
    "name": "TrashComment",
    "group": "Comment",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://tawar.in/api/comment/delete/9",
        "type": "json"
      }
    ],
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Success Soft Delete Comment (example)",
          "content": "\n{\n  \"error\": false,\n  \"message\": \"Detail of Comment\",\n  \"data\": {\n    \"comment\": {\n      \"id\": 9,\n      \"products_id\": 4,\n      \"users_id\": 1,\n      \"messages\": \"I like this. Best Great T-shirt ever\",\n      \"created_at\": \"2017-02-12 12:38:29\",\n      \"product\": {\n        \"id\": 4,\n        \"name\": \"Sweater Blue Ocean Coldplay\",\n        \"price\": \"30000.00\",\n        \"description\": \"Available SIze X,Xl,L Free Delivery in Area Jabodetabek\",\n        \"images\": \"{'http://thumb.rl/product1.jpg','http://thumb.rl/product2.jpg'}\",\n        \"categories_id\": 2,\n        \"users_id\": 1,\n        \"created_at\": \"2017-02-12 12:10:40\"\n      },\n      \"user\": {\n        \"id\": 1,\n        \"name\": \"Hery kuswandi\",\n        \"email\": \"hery@gmail.com\",\n        \"fb_token\": null,\n        \"gender\": null,\n        \"birtdate\": null,\n        \"phone\": \"084737437434\",\n        \"address\": null,\n        \"photo\": null,\n        \"created_at\": \"2017-02-09 13:55:50\"\n      }\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Data Not Found",
          "content": "{\n  \"error\": true,\n  \"message\": \"Data not found or already removed..\",\n  \"data\": {\n    \"comment\": {}\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/comment/trash.js",
    "groupTitle": "Comment",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/comment/update",
    "title": "Update Comment",
    "version": "1.0.0",
    "name": "UpdateComment",
    "group": "Comment",
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Existing ID of the Comment <code>(Required)</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Messages of the Comment <code>(Required)</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "products_id",
            "description": "<p>ID of the related product <code>(Required)</code>.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response Success Update Comment (example)",
          "content": "\n{\n  \"error\": false,\n  \"message\": \"Update Comment Successfully\",\n  \"data\": {\n    \"comment\": {\n      \"id\": 9,\n      \"products_id\": 4,\n      \"users_id\": 1,\n      \"messages\": \"I like this. Best Great T-shirt ever\",\n      \"created_at\": \"2017-02-12 12:38:29\",\n      \"product\": {\n        \"id\": 4,\n        \"name\": \"Sweater Blue Ocean Coldplay\",\n        \"price\": \"30000.00\",\n        \"description\": \"Available SIze X,Xl,L Free Delivery in Area Jabodetabek\",\n        \"images\": \"{'http://thumb.rl/product1.jpg','http://thumb.rl/product2.jpg'}\",\n        \"categories_id\": 2,\n        \"users_id\": 1,\n        \"created_at\": \"2017-02-12 12:10:40\"\n      },\n      \"user\": {\n        \"id\": 1,\n        \"name\": \"Hery kuswandi\",\n        \"email\": \"hery@gmail.com\",\n        \"fb_token\": null,\n        \"gender\": null,\n        \"birtdate\": null,\n        \"phone\": \"084737437434\",\n        \"address\": null,\n        \"photo\": null,\n        \"created_at\": \"2017-02-09 13:55:50\"\n      }\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}\n\n{\n  \"error\": true,\n  \"message\": \"The message field is required.\",\n  \"data\": {\n    \"comment\": {}\n  }\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Data Not Found",
          "content": "{\n  \"error\": true,\n  \"message\": \"Comment Not Found.\",\n  \"data\": {\n    \"comment\": {}\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/comment/update.js",
    "groupTitle": "Comment",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    }
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
    "filename": "./doc/main.js",
    "group": "D__nodejs_tawarin_api_doc_main_js",
    "groupTitle": "D__nodejs_tawarin_api_doc_main_js",
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
    "filename": "./public/apidoc/main.js",
    "group": "D__nodejs_tawarin_api_public_apidoc_main_js",
    "groupTitle": "D__nodejs_tawarin_api_public_apidoc_main_js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/product/create",
    "title": "Create New Product",
    "version": "1.0.0",
    "name": "CreateProduct",
    "group": "Product",
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Product <code>(Required)</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "categories_id",
            "description": "<p>Description of the Product<code>(Required)</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "Decimal",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the Product <code>(Required)</code>. E.g 12000.00</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "images",
            "description": "<p>Images of the Product. e.g <code>{'http://thumb.rl/product1.jpg','http://thumb.rl/product2.jpg'}</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response Success Create Product (example)",
          "content": "{\n  \"error\": false,\n  \"message\": \"Create Product Sucessfully\",\n  \"data\": {\n    \"product\": {\n      \"id\": 4,\n      \"name\": \"Sweater Blue Ocean Coldplay\",\n      \"price\": \"30000.00\",\n      \"description\": \"Available SIze X,Xl,L Free Delivery in Area Jabodetabek\",\n      \"images\": \"{'http://thumb.rl/product1.jpg','http://thumb.rl/product2.jpg'}\",\n      \"categories_id\": 2,\n      \"users_id\": 1,\n      \"created_at\": \"2017-02-12 12:10:40\",\n      \"category\": {\n        \"id\": 2,\n        \"name\": \"SeafOOd\",\n        \"created_at\": \"2017-02-09 14:16:57\"\n      },\n      \"user\": {\n        \"id\": 1,\n        \"name\": \"Hery kuswandi\",\n        \"email\": \"hery@gmail.com\",\n        \"fb_token\": null,\n        \"gender\": null,\n        \"birtdate\": null,\n        \"phone\": \"084737437434\",\n        \"address\": null,\n        \"photo\": null,\n        \"created_at\": \"2017-02-09 13:55:50\"\n      }\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}\n\n{\n  \"error\": true,\n  \"message\": \"The name field is required.\",\n  \"data\": {\n    \"product\": {}\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/product/create.js",
    "groupTitle": "Product",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/product/data",
    "title": "Retrieve List Product",
    "version": "1.0.0",
    "name": "DataProduct",
    "group": "Product",
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Success Retrieve List Product (example)",
          "content": "{\n  \"error\": false,\n  \"message\": \"List of Product\",\n  \"data\": {\n    \"list_product\": [\n      {\n        \"id\": 4,\n        \"name\": \"Sweater Blue Ocean Coldplay\",\n        \"price\": \"30000.00\",\n        \"description\": \"Available SIze X,Xl,L Free Delivery in Area Jabodetabek\",\n        \"images\": \"{'http://thumb.rl/product1.jpg','http://thumb.rl/product2.jpg'}\",\n        \"categories_id\": 2,\n        \"users_id\": 1,\n        \"created_at\": \"2017-02-12 12:10:40\",\n        \"category\": {\n          \"id\": 2,\n          \"name\": \"Sweater\",\n          \"created_at\": \"2017-02-09 14:16:57\"\n        },\n        \"user\": {\n          \"id\": 1,\n          \"name\": \"Hery kuswandi\",\n          \"email\": \"hery@gmail.com\",\n          \"fb_token\": null,\n          \"gender\": null,\n          \"birtdate\": null,\n          \"phone\": \"084737437434\",\n          \"address\": null,\n          \"photo\": null,\n          \"created_at\": \"2017-02-09 13:55:50\"\n        }\n      },\n      {\n        \"id\": 2,\n        \"name\": \"Baju Blue\",\n        \"price\": \"230000.00\",\n        \"description\": null,\n        \"images\": null,\n        \"categories_id\": null,\n        \"users_id\": 2,\n        \"created_at\": null,\n      \"category\": {\n          \"id\": 1,\n          \"name\": \"Kaos\",\n          \"created_at\": \"2017-02-09 14:16:57\"\n        },    \n        \"user\": {\n          \"id\": 2,\n          \"name\": \"Dinda Lestari\",\n          \"email\": \"dinda@gmail.com\",\n          \"fb_token\": null,\n          \"gender\": null,\n          \"birtdate\": null,\n          \"phone\": \"084737437434\",\n          \"address\": null,\n          \"photo\": null,\n          \"created_at\": \"2017-02-09 13:57:03\"\n        }\n      }\n    ],\n    \"page\": \"1\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response Failure: Data Not Found",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Product Not Found\",\n  \"data\": {\n    \"list_product\": [],\n    \"page\": \"1\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/product/data.js",
    "groupTitle": "Product",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Option Parameter usage:",
        "content": "?q=&page=1&sortby=created_at&order=desc&filters[name]=&filters[id]=",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>parameter for searching .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number (20 row each 1 page) <code>Default Page 1</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sortby",
            "description": "<p>Field name as a key for sorting <code>e.g sortby=name</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>fill between <code>asc</code> or <code>desc</code>.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/product/{ID}",
    "title": "Retrieve Single Product",
    "version": "1.0.0",
    "name": "DetailProduct",
    "group": "Product",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://tawar.in/api/product/4",
        "type": "json"
      }
    ],
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Success Retrieve single Product (example)",
          "content": "{\n  \"error\": false,\n  \"message\": \"Detail of Product\",\n  \"data\": {\n    \"product\": {\n      \"id\": 4,\n      \"name\": \"Sweater Blue Ocean Coldplay\",\n      \"price\": \"30000.00\",\n      \"description\": \"Available SIze X,Xl,L Free Delivery in Area Jabodetabek\",\n      \"images\": \"{'http://thumb.rl/product1.jpg','http://thumb.rl/product2.jpg'}\",\n      \"categories_id\": 2,\n      \"users_id\": 1,\n      \"created_at\": \"2017-02-12 12:10:40\",\n      \"category\": {\n        \"id\": 2,\n        \"name\": \"SeafOOd\",\n        \"created_at\": \"2017-02-09 14:16:57\"\n      },\n      \"user\": {\n        \"id\": 1,\n        \"name\": \"Hery kuswandi\",\n        \"email\": \"hery@gmail.com\",\n        \"fb_token\": null,\n        \"gender\": null,\n        \"birtdate\": null,\n        \"phone\": \"084737437434\",\n        \"address\": null,\n        \"photo\": null,\n        \"created_at\": \"2017-02-09 13:55:50\"\n      }\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Data Not Found",
          "content": "{\n  \"error\": true,\n  \"message\": \"Product Not Found.\",\n  \"data\": {\n    \"product\": {}\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/product/detail.js",
    "groupTitle": "Product",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/product/delete/{ID}",
    "title": "Delete Product",
    "version": "1.0.0",
    "name": "TrashProduct",
    "group": "Product",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://tawar.in/api/product/delete/1",
        "type": "json"
      }
    ],
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Success Soft Delete Product (example)",
          "content": "{\n  \"error\": false,\n  \"message\": \"Detail of Product\",\n  \"data\": {\n    \"product\": {\n      \"id\": 4,\n      \"name\": \"Sweater Blue Ocean Coldplay\",\n      \"price\": \"30000.00\",\n      \"description\": \"Available SIze X,Xl,L Free Delivery in Area Jabodetabek\",\n      \"images\": \"{'http://thumb.rl/product1.jpg','http://thumb.rl/product2.jpg'}\",\n      \"categories_id\": 2,\n      \"users_id\": 1,\n      \"created_at\": \"2017-02-12 12:10:40\",\n      \"category\": {\n        \"id\": 2,\n        \"name\": \"SeafOOd\",\n        \"created_at\": \"2017-02-09 14:16:57\"\n      },\n      \"user\": {\n        \"id\": 1,\n        \"name\": \"Hery kuswandi\",\n        \"email\": \"hery@gmail.com\",\n        \"fb_token\": null,\n        \"gender\": null,\n        \"birtdate\": null,\n        \"phone\": \"084737437434\",\n        \"address\": null,\n        \"photo\": null,\n        \"created_at\": \"2017-02-09 13:55:50\"\n      }\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Data Not Found",
          "content": "{\n  \"error\": true,\n  \"message\": \"Data not found or already removed..\",\n  \"data\": {\n    \"product\": {}\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/product/trash.js",
    "groupTitle": "Product",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/product/update",
    "title": "Update Product",
    "version": "1.0.0",
    "name": "UpdateProduct",
    "group": "Product",
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the existing Product <code>(Required)</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Product <code>(Required)</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "categories_id",
            "description": "<p>Description of the Product<code>(Required)</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "Decimal",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the Product <code>(Required)</code>. E.g 12000.00</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "images",
            "description": "<p>Images of the Product. e.g <code>{'http://thumb.rl/product1.jpg','http://thumb.rl/product2.jpg'}</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response Success Update Product (example)",
          "content": "{\n  \"error\": false,\n  \"message\": \"Update Product Sucessfully\",\n  \"data\": {\n    \"product\": {\n      \"id\": 4,\n      \"name\": \"Sweater Blue Ocean Coldplay\",\n      \"price\": \"30000.00\",\n      \"description\": \"Available SIze X,Xl,L Free Delivery in Area Jabodetabek\",\n      \"images\": \"{'http://thumb.rl/product1.jpg','http://thumb.rl/product2.jpg'}\",\n      \"categories_id\": 2,\n      \"users_id\": 1,\n      \"created_at\": \"2017-02-12 12:10:40\",\n      \"category\": {\n        \"id\": 2,\n        \"name\": \"SeafOOd\",\n        \"created_at\": \"2017-02-09 14:16:57\"\n      },\n      \"user\": {\n        \"id\": 1,\n        \"name\": \"Hery kuswandi\",\n        \"email\": \"hery@gmail.com\",\n        \"fb_token\": null,\n        \"gender\": null,\n        \"birtdate\": null,\n        \"phone\": \"084737437434\",\n        \"address\": null,\n        \"photo\": null,\n        \"created_at\": \"2017-02-09 13:55:50\"\n      }\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}\n\n{\n  \"error\": true,\n  \"message\": \"The name field is required.\",\n  \"data\": {\n    \"product\": {}\n  }\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Data Not Found",
          "content": "{\n  \"error\": true,\n  \"message\": \"Product Not Found.\",\n  \"data\": {\n    \"product\": {}\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/product/update.js",
    "groupTitle": "Product",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/transaction/create",
    "title": "Create New Transaction",
    "version": "1.0.0",
    "name": "CreateTransaction",
    "group": "Transaction",
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Decimal",
            "optional": false,
            "field": "subtotal",
            "description": "<p>Subtotal of the Transaction. e.g: 125000.00</p>"
          },
          {
            "group": "Parameter",
            "type": "Decimal",
            "optional": false,
            "field": "discount",
            "description": "<p>Discount of the Transaction. e.g: 5000.00</p>"
          },
          {
            "group": "Parameter",
            "type": "Decimal",
            "optional": false,
            "field": "tax",
            "description": "<p>Tax of the Transaction. e.g: 5000.00</p>"
          },
          {
            "group": "Parameter",
            "type": "Decimal",
            "optional": false,
            "field": "total",
            "description": "<p>Total of the Transaction <code>(Required)</code>. e.g: 120000.00</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response Success Create Transaction (example)",
          "content": "{\n  \"error\": false,\n  \"message\": \"Create Transaction Successfully\",\n  \"data\": {\n    \"transaction\": {\n      \"id\": \"TRX1702120110427\",\n      \"users_id\": 1,\n      \"discount\": \"5000.00\",\n      \"tax\": \"5000.00\",\n      \"subtotal\": \"125000.00\",\n      \"total\": \"120000.00\",\n      \"notes\": null,\n      \"created_at\": \"2017-02-12 13:10:42\",\n      \"user\": {\n        \"id\": 1,\n        \"name\": \"Hery kuswandi\",\n        \"email\": \"hery@gmail.com\",\n        \"fb_token\": null,\n        \"gender\": null,\n        \"birtdate\": null,\n        \"phone\": \"084737437434\",\n        \"address\": null,\n        \"photo\": null,\n        \"created_at\": \"2017-02-09 13:55:50\"\n      }\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}\n\n{\n  \"error\": true,\n  \"message\": \"The Total field is required.\",\n  \"data\": {\n    \"transaction\": {}\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/transaction/create.js",
    "groupTitle": "Transaction",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/transaction/data",
    "title": "Retrieve List Transaction",
    "version": "1.0.0",
    "name": "DataTransaction",
    "group": "Transaction",
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Success Retrieve List Transaction (example)",
          "content": "\n{\n  \"error\": false,\n  \"message\": \"List of Transaction\",\n  \"data\": {\n    \"list_transaction\": [\n      {\n        \"id\": \"TRX1702120111074\",\n        \"users_id\": 1,\n        \"discount\": \"5000.00\",\n        \"tax\": \"5000.00\",\n        \"subtotal\": \"125000.00\",\n        \"total\": \"120000.00\",\n        \"notes\": null,\n        \"created_at\": \"2017-02-12 13:11:07\",\n        \"user\": {\n          \"id\": 1,\n          \"name\": \"Hery kuswandi\",\n          \"email\": \"hery@gmail.com\",\n          \"fb_token\": null,\n          \"gender\": null,\n          \"birtdate\": null,\n          \"phone\": \"084737437434\",\n          \"address\": null,\n          \"photo\": null,\n          \"created_at\": \"2017-02-09 13:55:50\"\n        }\n      },\n      {\n        \"id\": \"TRX1702120110427\",\n        \"users_id\": 1,\n        \"discount\": \"5000.00\",\n        \"tax\": \"5000.00\",\n        \"subtotal\": \"125000.00\",\n        \"total\": \"120000.00\",\n        \"notes\": null,\n        \"created_at\": \"2017-02-12 13:10:42\",\n        \"user\": {\n          \"id\": 1,\n          \"name\": \"Hery kuswandi\",\n          \"email\": \"hery@gmail.com\",\n          \"fb_token\": null,\n          \"gender\": null,\n          \"birtdate\": null,\n          \"phone\": \"084737437434\",\n          \"address\": null,\n          \"photo\": null,\n          \"created_at\": \"2017-02-09 13:55:50\"\n        }\n      }\n    ],\n    \"page\": \"1\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response Failure: Data Not Found",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Transaction Not Found\",\n  \"data\": {\n    \"list_transaction\": [],\n    \"page\": \"1\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/transaction/data.js",
    "groupTitle": "Transaction",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Option Parameter usage:",
        "content": "?q=&page=1&sortby=created_at&order=desc&filters[name]=&filters[id]=",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>parameter for searching .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number (20 row each 1 page) <code>Default Page 1</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sortby",
            "description": "<p>Field name as a key for sorting <code>e.g sortby=name</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>fill between <code>asc</code> or <code>desc</code>.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/transaction/{ID}",
    "title": "Retrieve Single Transaction",
    "version": "1.0.0",
    "name": "DetailTransaction",
    "group": "Transaction",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://tawar.in/api/transaction/TRX1702120111074",
        "type": "json"
      }
    ],
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Success Retrieve single Transaction (example)",
          "content": "{\n  \"error\": false,\n  \"message\": \"Detail of Transaction\",\n  \"data\": {\n    \"transaction\": {\n      \"id\": \"TRX1702120110427\",\n      \"users_id\": 1,\n      \"discount\": \"5000.00\",\n      \"tax\": \"5000.00\",\n      \"subtotal\": \"125000.00\",\n      \"total\": \"120000.00\",\n      \"notes\": null,\n      \"created_at\": \"2017-02-12 13:10:42\",\n      \"user\": {\n        \"id\": 1,\n        \"name\": \"Hery kuswandi\",\n        \"email\": \"hery@gmail.com\",\n        \"fb_token\": null,\n        \"gender\": null,\n        \"birtdate\": null,\n        \"phone\": \"084737437434\",\n        \"address\": null,\n        \"photo\": null,\n        \"created_at\": \"2017-02-09 13:55:50\"\n      }\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Data Not Found",
          "content": "{\n  \"error\": true,\n  \"message\": \"Detail Not Found.\",\n  \"data\": {\n    \"detail\": {}\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/transaction/detail.js",
    "groupTitle": "Transaction",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/transaction/delete/{ID}",
    "title": "Delete Transaction",
    "version": "1.0.0",
    "name": "TrashTransaction",
    "group": "Transaction",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://tawar.in/api/transaction/delete/TRX1702120111074",
        "type": "json"
      }
    ],
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Success Soft Delete Transaction (example)",
          "content": "{\n  \"error\": false,\n  \"message\": \"Delete Transaction Successfully\",\n  \"data\": {\n    \"transaction\": {\n      \"id\": \"TRX1702120110427\",\n      \"users_id\": 1,\n      \"discount\": \"5000.00\",\n      \"tax\": \"5000.00\",\n      \"subtotal\": \"125000.00\",\n      \"total\": \"120000.00\",\n      \"notes\": null,\n      \"created_at\": \"2017-02-12 13:10:42\",\n      \"user\": {\n        \"id\": 1,\n        \"name\": \"Hery kuswandi\",\n        \"email\": \"hery@gmail.com\",\n        \"fb_token\": null,\n        \"gender\": null,\n        \"birtdate\": null,\n        \"phone\": \"084737437434\",\n        \"address\": null,\n        \"photo\": null,\n        \"created_at\": \"2017-02-09 13:55:50\"\n      }\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Data Not Found",
          "content": "{\n  \"error\": true,\n  \"message\": \"Data not found or already removed..\",\n  \"data\": {\n    \"transaction\": {}\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/transaction/trash.js",
    "groupTitle": "Transaction",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/transactions_detail/create",
    "title": "Create New Transactions_detail",
    "version": "1.0.0",
    "name": "CreateTransactions_detail",
    "group": "Transactions_detail",
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transactions_id",
            "description": "<p>Existing ID From Data Transaction <code>(Required)</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "products_id",
            "description": "<p>Existing ID From Data Product <code>(Required)</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "Decimal",
            "optional": false,
            "field": "real_price",
            "description": "<p>Real Price from related product in products_id <code>(Required)</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "Decimal",
            "optional": false,
            "field": "bargain_price",
            "description": "<p>bargain price for this product</code>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>indicated for response status. if <code>true</code> include row object. if <code>false</code> include string error messages</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "row",
            "description": "<p>information about transactions_detail</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Success Create Transactions_detail (example)",
          "content": "\n{\n  \"error\": false,\n  \"message\": \"Create TransactionsDetail Successfully\",\n  \"data\": {\n    \"transactions_detail\": {\n      \"id\": 1,\n      \"transactions_id\": \"TRX170209025558\",\n      \"products_id\": 2,\n      \"real_price\": \"4000.00\",\n      \"bargain_price\": \"5000.00\",\n      \"created_at\": \"2017-02-09 15:05:55\",\n      \"product\": {\n        \"id\": 2,\n        \"name\": \"Baju Blue\",\n        \"price\": \"230000.00\",\n        \"description\": null,\n        \"images\": null,\n        \"categories_id\": null,\n        \"users_id\": 2,\n        \"created_at\": null\n      },\n      \"transaction\": {\n        \"id\": \"TRX170209025558\",\n        \"users_id\": 1,\n        \"discount\": null,\n        \"tax\": null,\n        \"subtotal\": null,\n        \"total\": \"2000.00\",\n        \"notes\": null,\n        \"created_at\": \"2017-02-09 14:55:58\"\n      }\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}\n\n{\n  \"error\": true,\n  \"message\": \"The products_id field is required.\",\n  \"data\": {\n    \"transactions_detail\": {}\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/transaction_detail/create.js",
    "groupTitle": "Transactions_detail",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/transaction/data",
    "title": "Retrieve List Transactions_detail",
    "version": "1.0.0",
    "name": "DataTransactions_detail",
    "group": "Transactions_detail",
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Success Retrieve List Transactions_detail (example)",
          "content": "\n\n{\n  \"error\": false,\n  \"message\": \"List of TransactionsDetail\",\n  \"data\": {\n    \"list_transactions_details_detail\": [\n      {\n        \"id\": 5,\n        \"transactions_id\": \"TRX170209025558\",\n        \"products_id\": 4,\n        \"real_price\": \"125000.00\",\n        \"bargain_price\": \"100000.00\",\n        \"created_at\": \"2017-02-12 13:35:57\",\n        \"product\": {\n          \"id\": 4,\n          \"name\": \"Sweater Blue Ocean Coldplay\",\n          \"price\": \"30000.00\",\n          \"description\": \"Available SIze X,Xl,L Free Delivery in Area Jabodetabek\",\n          \"images\": \"{'http://thumb.rl/product1.jpg','http://thumb.rl/product2.jpg'}\",\n          \"categories_id\": 2,\n          \"users_id\": 1,\n          \"created_at\": \"2017-02-12 12:10:40\"\n        },\n        \"transaction\": {\n          \"id\": \"TRX170209025558\",\n          \"users_id\": 1,\n          \"discount\": null,\n          \"tax\": null,\n          \"subtotal\": null,\n          \"total\": \"2000.00\",\n          \"notes\": null,\n          \"created_at\": \"2017-02-09 14:55:58\"\n        }\n      },\n      {\n        \"id\": 1,\n        \"transactions_id\": \"TRX170209025558\",\n        \"products_id\": 2,\n        \"real_price\": \"4000.00\",\n        \"bargain_price\": \"5000.00\",\n        \"created_at\": \"2017-02-09 15:05:55\",\n        \"product\": {\n          \"id\": 2,\n          \"name\": \"Baju Blue\",\n          \"price\": \"230000.00\",\n          \"description\": null,\n          \"images\": null,\n          \"categories_id\": null,\n          \"users_id\": 2,\n          \"created_at\": null\n        },\n        \"transaction\": {\n          \"id\": \"TRX170209025558\",\n          \"users_id\": 1,\n          \"discount\": null,\n          \"tax\": null,\n          \"subtotal\": null,\n          \"total\": \"2000.00\",\n          \"notes\": null,\n          \"created_at\": \"2017-02-09 14:55:58\"\n        }\n      }\n    ],\n    \"page\": \"1\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response Failure: Data Not Found",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Transactions_detail Not Found\",\n  \"data\": {\n    \"list_transactions_detail\": [],\n    \"page\": \"1\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/transaction_detail/data.js",
    "groupTitle": "Transactions_detail",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Option Parameter usage:",
        "content": "?q=&page=1&sortby=created_at&order=desc&filters[name]=&filters[id]=",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>parameter for searching .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number (20 row each 1 page) <code>Default Page 1</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sortby",
            "description": "<p>Field name as a key for sorting <code>e.g sortby=name</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>fill between <code>asc</code> or <code>desc</code>.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/transactions_detail/{ID}",
    "title": "Retrieve Single Transactions_detail",
    "version": "1.0.0",
    "name": "DetailTransactions_detail",
    "group": "Transactions_detail",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://tawar.in/api/transactions_detail/4",
        "type": "json"
      }
    ],
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>indicated for response status. if <code>true</code> include row object. if <code>false</code> include string error messages</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "row",
            "description": "<p>information about transactions_details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Success Retrieve single Transactions_detail (example)",
          "content": "\n{\n  \"error\": false,\n  \"message\": \"Detail of TransactionsDetail\",\n  \"data\": {\n    \"transactions_detail\": {\n      \"id\": 1,\n      \"transactions_id\": \"TRX170209025558\",\n      \"products_id\": 2,\n      \"real_price\": \"4000.00\",\n      \"bargain_price\": \"5000.00\",\n      \"created_at\": \"2017-02-09 15:05:55\",\n      \"product\": {\n        \"id\": 2,\n        \"name\": \"Baju Blue\",\n        \"price\": \"230000.00\",\n        \"description\": null,\n        \"images\": null,\n        \"categories_id\": null,\n        \"users_id\": 2,\n        \"created_at\": null\n      },\n      \"transaction\": {\n        \"id\": \"TRX170209025558\",\n        \"users_id\": 1,\n        \"discount\": null,\n        \"tax\": null,\n        \"subtotal\": null,\n        \"total\": \"2000.00\",\n        \"notes\": null,\n        \"created_at\": \"2017-02-09 14:55:58\"\n      }\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Data Not Found",
          "content": "{\n  \"error\": true,\n  \"message\": \"Transactions_detail Not Found.\",\n  \"data\": {\n    \"transactions_detail\": {}\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/transaction_detail/detail.js",
    "groupTitle": "Transactions_detail",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/transactions_detail/delete/{ID}",
    "title": "Delete Transactions_detail",
    "version": "1.0.0",
    "name": "TrashTransactions_detail",
    "group": "Transactions_detail",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://tawar.in/api/transactions_detail/delete/4",
        "type": "json"
      }
    ],
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>indicated for response status. if <code>true</code> include row object. if <code>false</code> include string error messages</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>array data of transactions_details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Success Soft Delete Transactions_detail (example)",
          "content": "\n{\n  \"error\": false,\n  \"message\": \"Delete TransactionsDetail Successfully\",\n  \"data\": {\n    \"transactions_detail\": {\n      \"id\": 1,\n      \"transactions_id\": \"TRX170209025558\",\n      \"products_id\": 2,\n      \"real_price\": \"4000.00\",\n      \"bargain_price\": \"5000.00\",\n      \"created_at\": \"2017-02-09 15:05:55\",\n      \"product\": {\n        \"id\": 2,\n        \"name\": \"Baju Blue\",\n        \"price\": \"230000.00\",\n        \"description\": null,\n        \"images\": null,\n        \"categories_id\": null,\n        \"users_id\": 2,\n        \"created_at\": null\n      },\n      \"transaction\": {\n        \"id\": \"TRX170209025558\",\n        \"users_id\": 1,\n        \"discount\": null,\n        \"tax\": null,\n        \"subtotal\": null,\n        \"total\": \"2000.00\",\n        \"notes\": null,\n        \"created_at\": \"2017-02-09 14:55:58\"\n      }\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "{\n  \"error\": \"true\",\n  \"message\": \"User Unauthenticated. Make Sure Your Token is Correct\",\n  \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Data Not Found",
          "content": "{\n  \"error\": true,\n  \"message\": \"Data not found or already removed..\",\n  \"data\": {\n    \"transactions_detail\": {}\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/transaction_detail/trash.js",
    "groupTitle": "Transactions_detail",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>specify access token as a Bearer. format value : <code>Bearer your-token-from-login</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  Accept:application/json\n  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMWE1NGNmOGU1ZTExYmFkZDExYjlkNTJhYWFlNjJlMjE1NTFkYzVjNjVmOGQ1OGZmODk4NjRiZTZmYzYwYzVhOWJkZWRkZmMwMjkxMmRiIn0.eyJhdWQiOiIxIiwianRpIjoiZjIxYTU0Y2Y4ZTVlMTFiYWRkMTFiOWQ1MmFhYWU2MmUyMTU1MWRjNWM2NWY4ZDU4ZmY4OTg2NGJlNmZjNjBjNWE5YmRlZGRmYzAyOTEyZGIiLCJpYXQiOjE0ODY4ODcyMzgsIm5iZiI6MTQ4Njg4NzIzOCwiZXhwIjoxNTE4NDIzMjM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EAkDLLvuF6NnBXIBYRWXke5EkeaFwl_ORCWHWOlqGeJzLrKTNu0wOyzyyWvNRwSc67FzS4J9sDQhFportJh-YBfcF9tNYeskDFh0n_ZvLlGhYhgyARWEkGV2LCoGxZfndEGQZRst74fhjbqWmI9wskiKiboAa9jJr1XwN1bHHgXASTh22ZX8y1wCFhOc2Yi89ePPHvLmpe87JWxrXw2mDwbNrxYA9lSAyft-IyEMT3jNphNQTDZ1OhL8x6suZjuqbJr11eLfGDE2Oliaj8N2XnMuB6yAWu5yvsIClPmknSMf4yElUOElZh-pk9bjr3OB9yLZid9v1gZLJeCfMBcEJxtrtiwO2hrzui29EMrdpX9LJXv3s_nQbdL4zP4w6NAYafVEYuVd6JU6mWH_RYiynssnDow8o473G8waO6Ovvd08ybHmGHRtApUD6-JfMwQ3N16qqGoIjwCbwELRnkCeiRBmNgsXbSTSDx9_XkeaN6t4A1OgQQJD3bf4eTk1zZVyFCkY02USn96Yq2sWqsUyRgXOjToy_uDLsiIv-vUFuI6l0noILYd9JjWz1h7ZpX9ifh2l8RuTOqn7zY8rUwBaaWU79mwE23uAZg53UcwxhWASo7x3OsNZsahhoxFkE62eYktXcjU0j8pKraht9eMGI9MR9Fp--QYwxGiFtFvNtds\n}",
          "type": "json"
        }
      ]
    }
  }
] });
