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
            "description": "<p>information about user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Success Edit User (example)",
          "content": "{\n  \"success\": true,\n  \"row\": {\n    \"id\": 1,\n    \"name\": \"Hery kuswandi\",\n    \"email\": \"hery@gmail.com\",\n    \"fb_token\": null,\n    \"gender\": null,\n    \"birtdate\": null,\n    \"phone\": \"084737437434\",\n    \"address\": null,\n    \"photo\": null,\n    \"created_at\": \"2017-02-09 13:55:50\",\n    \"updated_at\": \"2017-02-09 13:55:50\",\n    \"deleted_at\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Field Required",
          "content": "{\n  \"success\": false,\n  \"messages\": \"The name field is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: User NotFound",
          "content": "{\n  \"success\": false,\n  \"messages\": \"User Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/account.edit_profile.js",
    "groupTitle": "Account"
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
            "description": "<p>information about user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Success Profil User (example)",
          "content": "{\n  \"success\": true,\n  \"row\": {\n    \"id\": 1,\n    \"name\": \"Hery kuswandi\",\n    \"email\": \"hery@gmail.com\",\n    \"fb_token\": null,\n    \"gender\": null,\n    \"birtdate\": null,\n    \"phone\": \"084737437434\",\n    \"address\": null,\n    \"photo\": null,\n    \"created_at\": \"2017-02-09 13:55:50\",\n    \"updated_at\": \"2017-02-09 13:55:50\",\n    \"deleted_at\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: User NotFound",
          "content": "{\n  \"success\": false,\n  \"messages\": \"User Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/account.profile.js",
    "groupTitle": "Account"
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
            "description": "<p>object as information about user login</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "row.token",
            "description": "<p><i style=\"color:red;\">field token in row object it's an important.</i> please keep dan remember this token. for next request, you need define this token in header information for authentication.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Success Login User (example)",
          "content": "{\n  \"success\": true,\n  \"row\": {\n    \"id\": 1,\n    \"name\": \"Hery kuswandi\",\n    \"email\": \"hery@gmail.com\",\n    \"fb_token\": null,\n    \"gender\": null,\n    \"birtdate\": null,\n    \"phone\": \"084737437434\",\n    \"address\": null,\n    \"photo\": null,\n    \"created_at\": \"2017-02-09 13:55:50\",\n    \"updated_at\": \"2017-02-09 13:55:50\",\n    \"deleted_at\": null,\n    \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjczNjQ4N2EyNGVlYWI3MDdkM2MwMjc1MGE0Y2E3NTIxMjIyNmMxMzJmNzQxOTgwMDQyMzQyYzBjNWJkNzQzMjYzZjM4NjY0ZmVhYjc2NjM1In0.eyJhdWQiOiIxIiwianRpIjoiNzM2NDg3YTI0ZWVhYjcwN2QzYzAyNzUwYTRjYTc1MjEyMjI2YzEzMmY3NDE5ODAwNDIzNDJjMGM1YmQ3NDMyNjNmMzg2NjRmZWFiNzY2MzUiLCJpYXQiOjE0ODY4ODU4OTcsIm5iZiI6MTQ4Njg4NTg5NywiZXhwIjoxNTE4NDIxODk3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.qYKUe46ctd50ufO6QzVa7KG1TgrJ_mt_oJEEP7docECCxZ6GCLffiPEedP1WDqev8eEYwq0MGf832iE5BcV99YnSIbRm_LdHtQKfC124epjvpWRI0aCFK6N0yaC88rFhBuXHkRt0OjVGf0Sq5DmhHoeePyCpO0jKKRoRVhdgVOObeRWT-747nWAF6VOMo7kHj2JK4zfA1I6habdUOolWlbrMUJLDqcqEwlRsBtXnqPS66iUeDodE2eSTaYti1SS4lKkWgNexV1jwEmWj_QZ5059P3JpfQCv5W1r9LHQeN6LpSLLJnypQJlQg3EuckGUT8Aiu7IS_BkFNaj20l1d3XAJdne5gyNIBS-n6psXRplUQyiXO-RybnGsyxBnPQHzatWpvhpG7hwfCGxR7Kf9hMexWhCChVD4-QPQo09zL1bOgd7HV1is0AS7y9YNwq5vN9qeShEh9SmKvO8qfpa2n86gf_nz_l6ogRxYfY-5I6mo66zt6Dk5i7sNsLkuOodS5dTNfTGpTmwokYJCMwecItSvTUg8MLQfG0A4gACofQkCUowcNvLxXhGR4XVZ-2xdysLtsswfYQ3Vdr2P9iL6KGUHbNINSVon_-0ivoWT3foW7fGmG0SLsxpsy2Kwp1kgHbZ69qBL0rXgY_yZ8iurFxAyAyLyXGwK99XNzfoPF1UI\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response Failure: Email & Password does not match",
          "content": "{\n  \"success\": false,\n  \"messages\": \"email and password does not match\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Field Required",
          "content": "{\n  \"success\": false,\n  \"messages\": \"The name field is required.\"\n}",
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
            "description": "<p>object as information about user registered</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Success Registering User (example)",
          "content": " {\n  \"success\": true,\n  \"row\": {\n    \"email\": \"speed.rcm@gmail.com\",\n    \"name\": \"Dinda Lestari\",\n    \"fb_token\": null,\n    \"phone\": \"084737437434\",\n    \"updated_at\": \"2017-02-12 06:13:20\",\n    \"created_at\": \"2017-02-12 06:13:20\",\n    \"id\": 5\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response Failure: User Already exists",
          "content": "{\n  \"success\": false,\n  \"messages\": \"The email has already been taken.\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Field Required",
          "content": "{\n  \"success\": false,\n  \"messages\": \"The name field is required.\"\n}",
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
          "title": "Response Success Create Category (example)",
          "content": "{\n  \"success\": true,\n  \"row\": {\n    \"name\": \"Sport And Healty\",\n    \"updated_at\": \"2017-02-12 09:26:08\",\n    \"created_at\": \"2017-02-12 09:26:08\",\n    \"id\": 5\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Field Required",
          "content": "{\n  \"success\": false,\n  \"messages\": \"The name field is required.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/category/create.js",
    "groupTitle": "Category"
  },
  {
    "type": "GET",
    "url": "/category/data",
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
          "title": "Response Success Retrieve List Category (example)",
          "content": "{\n  \"success\": true,\n  \"data\": [\n    {\n      \"id\": 1,\n      \"name\": \"Food\",\n      \"created_at\": \"2017-02-09 14:16:48\",\n      \"updated_at\": \"2017-02-09 14:16:48\",\n      \"deleted_at\": null\n    },\n    {\n      \"id\": 5,\n      \"name\": \"Sport And Healty\",\n      \"created_at\": \"2017-02-12 09:26:08\",\n      \"updated_at\": \"2017-02-12 09:26:08\",\n      \"deleted_at\": null\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/category/data.js",
    "groupTitle": "Category"
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
        "content": "curl -i http://tawar.in/category/1",
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
            "description": "<p>information about categorys</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Success Retrieve single Category (example)",
          "content": "{\n  \"success\": true,\n  \"row\": {\n    \"id\": 6,\n    \"name\": \"tes\",\n    \"created_at\": \"2017-02-12 10:22:18\",\n    \"updated_at\": \"2017-02-12 10:22:30\",\n    \"deleted_at\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Data Not Found",
          "content": "{\n  \"success\": false,\n  \"messages\": \"Data Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/category/detail.js",
    "groupTitle": "Category"
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
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Data Not Found",
          "content": "{\n  \"success\": false,\n  \"messages\": \"Data not found or already removed.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/category/trash.js",
    "groupTitle": "Category"
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
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
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
    "groupTitle": "Category"
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
          "content": "{\n  \"success\": true,\n  \"row\": {\n    \"name\": \"Sport And Healty Updated\",\n    \"updated_at\": \"2017-02-12 09:26:08\",\n    \"created_at\": \"2017-02-12 09:26:08\",\n    \"id\": 5\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Field Required",
          "content": "{\n  \"success\": false,\n  \"messages\": \"The name field is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Category Not Found",
          "content": "{\n  \"success\": false,\n  \"messages\": \"Category Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/category/update.js",
    "groupTitle": "Category"
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
            "description": "<p>information about chat</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Success Create Chat (example)",
          "content": "{\n  \"success\": true,\n  \"row\": {\n    \"text\": \"{'messages':'Hi, There i want to buy these product. but my money it's not enough','id_product':'2'}\",\n    \"chats_rooms_id\": \"2\",\n    \"users_id\": 1,\n    \"updated_at\": \"2017-02-12 12:22:25\",\n    \"created_at\": \"2017-02-12 12:22:25\",\n    \"id\": 5\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Field Required",
          "content": "{\n  \"success\": false,\n  \"messages\": \"The name field is required.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/chat/create.js",
    "groupTitle": "Chat"
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
          "title": "Response Success Retrieve List Chat (example)",
          "content": "{\n  \"success\": true,\n  \"data\": [\n    {\n      \"id\": 1,\n      \"users_id\": 1,\n      \"chats_rooms_id\": 1,\n      \"text\": \"{pesan:holla,product:2}\",\n      \"created_at\": \"2017-02-09 14:36:34\",\n      \"updated_at\": \"2017-02-09 14:37:23\",\n      \"deleted_at\": null\n    },\n    {\n      \"id\": 4,\n      \"users_id\": 1,\n      \"chats_rooms_id\": 2,\n      \"text\": \"{'messages':'Hi, There i want to buy these product. but my money it's not enough','id_product':'2'}\",\n      \"created_at\": \"2017-02-09 14:37:02\",\n      \"updated_at\": \"2017-02-12 12:28:51\",\n      \"deleted_at\": null\n    }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/chat/data.js",
    "groupTitle": "Chat"
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
        "content": "curl -i http://tawar.in/chat/5",
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
            "description": "<p>information about chats</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Success Retrieve single Chat (example)",
          "content": "{\n  \"success\": true,\n  \"row\": {\n    \"text\": \"{'messages':'Hi, There i want to buy these product. my money is 300.00,00','id_product':'2'}\",\n    \"chats_rooms_id\": \"2\",\n    \"users_id\": 1,\n    \"updated_at\": \"2017-02-12 12:30:08\",\n    \"created_at\": \"2017-02-12 12:22:25\",\n    \"id\": 5\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Data Not Found",
          "content": "{\n  \"success\": false,\n  \"messages\": \"Data Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/chat/detail.js",
    "groupTitle": "Chat"
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
        "content": "curl -i http://tawar.in/chat/delete/5",
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
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Data Not Found",
          "content": "{\n  \"success\": false,\n  \"messages\": \"Data not found or already removed.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/chat/trash.js",
    "groupTitle": "Chat"
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
            "description": "<p>information about chat</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Success Update Chat (example)",
          "content": "{\n  \"success\": true,\n  \"row\": {\n    \"text\": \"{'messages':'Hi, There i want to buy these product. my money is 300.00,00','id_product':'2'}\",\n    \"chats_rooms_id\": \"2\",\n    \"users_id\": 1,\n    \"updated_at\": \"2017-02-12 12:30:08\",\n    \"created_at\": \"2017-02-12 12:22:25\",\n    \"id\": 5\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Field Required",
          "content": "{\n  \"success\": false,\n  \"messages\": \"The name field is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Chat Not Found",
          "content": "{\n  \"success\": false,\n  \"messages\": \"Chat Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/chat/update.js",
    "groupTitle": "Chat"
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
            "description": "<p>Name of the ChatsRoom <code>(Required)</code>.</p>"
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
            "description": "<p>information about chats room</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Success Create ChatsRoom (example)",
          "content": "{\n  \"success\": true,\n  \"row\": {\n    \"name\": \"Chats Room 07\",\n    \"updated_at\": \"2017-02-12 09:26:08\",\n    \"created_at\": \"2017-02-12 09:26:08\",\n    \"id\": 5\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Field Required",
          "content": "{\n  \"success\": false,\n  \"messages\": \"The name field is required.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/chatsroom/create.js",
    "groupTitle": "ChatsRoom"
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
            "description": "<p>array data of chats rooms</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Success Retrieve List ChatsRoom (example)",
          "content": "{\n  \"success\": true,\n  \"data\": [\n    {\n      \"id\": 1,\n      \"name\": \"Chats Room 01\",\n      \"created_at\": \"2017-02-09 14:26:23\",\n      \"updated_at\": \"2017-02-09 14:26:57\",\n      \"deleted_at\": null\n    },\n    {\n      \"id\": 2,\n      \"name\": \"Chats Room 02\",\n      \"created_at\": \"2017-02-09 14:26:46\",\n      \"updated_at\": \"2017-02-09 14:26:46\",\n      \"deleted_at\": null\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/chatsroom/data.js",
    "groupTitle": "ChatsRoom"
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
        "content": "curl -i http://tawar.in/chats_room/1",
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
          "content": "{\n  \"success\": true,\n  \"row\": {\n    \"id\": 6,\n    \"name\": \"Chats Room 08\",\n    \"created_at\": \"2017-02-12 10:22:18\",\n    \"updated_at\": \"2017-02-12 10:22:30\",\n    \"deleted_at\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Data Not Found",
          "content": "{\n  \"success\": false,\n  \"messages\": \"Data Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/chatsroom/detail.js",
    "groupTitle": "ChatsRoom"
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
        "content": "curl -i http://tawar.in/chats_room/delete/1",
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
            "description": "<p>array data of chats rooms</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Success Soft Delete ChatsRoom (example)",
          "content": "{\n  \"success\": true,\n  \"row\": {\n    \"id\": 6,\n    \"name\": \"Chats Room 03\",\n    \"created_at\": \"2017-02-12 10:22:18\",\n    \"updated_at\": \"2017-02-12 10:22:30\",\n    \"deleted_at\": \"2017-02-12 10:53:16\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Data Not Found",
          "content": "{\n  \"success\": false,\n  \"messages\": \"Data not found or already removed.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/chatsroom/trash.js",
    "groupTitle": "ChatsRoom"
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
          "title": "Response Success Update ChatsRoom (example)",
          "content": "{\n  \"success\": true,\n  \"row\": {\n    \"name\": \"Chats Room 08\",\n    \"updated_at\": \"2017-02-12 09:26:08\",\n    \"created_at\": \"2017-02-12 09:26:08\",\n    \"id\": 5\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Field Required",
          "content": "{\n  \"success\": false,\n  \"messages\": \"The name field is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: ChatsRoom Not Found",
          "content": "{\n  \"success\": false,\n  \"messages\": \"ChatsRoom Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/chatsroom/update.js",
    "groupTitle": "ChatsRoom"
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
            "description": "<p>information about comment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Success Create Comment (example)",
          "content": "{\n  \"success\": true,\n  \"row\": {\n    \"products_id\": \"4\",\n    \"messages\": \"I like this. Best Great T-shirt ever\",\n    \"users_id\": 1,\n    \"updated_at\": \"2017-02-12 12:38:29\",\n    \"created_at\": \"2017-02-12 12:38:29\",\n    \"id\": 9\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Field Required",
          "content": "{\n  \"success\": false,\n  \"messages\": \"The messages field is required.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/comment/create.js",
    "groupTitle": "Comment"
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
            "description": "<p>array data of comments</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Success Retrieve List Comment (example)",
          "content": "{\n  \"success\": true,\n  \"data\": [\n    {\n      \"id\": 1,\n      \"name\": \"Food\",\n      \"created_at\": \"2017-02-09 14:16:48\",\n      \"updated_at\": \"2017-02-09 14:16:48\",\n      \"deleted_at\": null\n    },\n    {\n      \"id\": 5,\n      \"name\": \"Sport And Healty\",\n      \"created_at\": \"2017-02-12 09:26:08\",\n      \"updated_at\": \"2017-02-12 09:26:08\",\n      \"deleted_at\": null\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/comment/data.js",
    "groupTitle": "Comment"
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
        "content": "curl -i http://tawar.in/comment/9",
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
            "description": "<p>information about comments</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Success Retrieve single Comment (example)",
          "content": "{\n  \"success\": true,\n  \"row\": {\n    \"products_id\": \"4\",\n    \"messages\": \"I like this. Best Great T-shirt ever\",\n    \"users_id\": 1,\n    \"updated_at\": \"2017-02-12 12:38:29\",\n    \"created_at\": \"2017-02-12 12:38:29\",\n    \"id\": 9\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Data Not Found",
          "content": "{\n  \"success\": false,\n  \"messages\": \"Data Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/comment/detail.js",
    "groupTitle": "Comment"
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
        "content": "curl -i http://tawar.in/comment/delete/9",
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
            "description": "<p>array data of comments</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Success Soft Delete Comment (example)",
          "content": "{\n  \"success\": true,\n  \"row\": {\n    \"products_id\": \"4\",\n    \"messages\": \"I like this. Best Great T-shirt ever\",\n    \"users_id\": 1,\n    \"updated_at\": \"2017-02-12 12:38:29\",\n    \"created_at\": \"2017-02-12 12:38:29\",\n    \"deleted_at\": \"2017-02-12 12:53:16\",\n   \"id\": 9\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Data Not Found",
          "content": "{\n  \"success\": false,\n  \"messages\": \"Data not found or already removed.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/comment/trash.js",
    "groupTitle": "Comment"
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
            "description": "<p>information about comment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Success Update Comment (example)",
          "content": "{\n  \"success\": true,\n  \"row\": {\n    \"products_id\": \"4\",\n    \"messages\": \"I like this. Best Great T-shirt ever\",\n    \"users_id\": 1,\n    \"updated_at\": \"2017-02-12 12:45:21\",\n    \"created_at\": \"2017-02-12 12:38:29\",\n    \"id\": 9\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Field Required",
          "content": "{\n  \"success\": false,\n  \"messages\": \"The messages field is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Comment Not Found",
          "content": "{\n  \"success\": false,\n  \"messages\": \"Comment Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/comment/update.js",
    "groupTitle": "Comment"
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
            "description": "<p>information about product</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Success Create Product (example)",
          "content": "{\n  \"success\": true,\n  \"row\": {\n    \"name\": \"T-shirt Blue Coldplay\",\n    \"price\": \"200000.00\",\n    \"description\": \"Available SIze X,Xl,L Free Delivery in Area Jabodetabek\",\n    \"images\": \"{'http://thumb.rl/product1.jpg','http://thumb.rl/product2.jpg'}\",\n    \"categories_id\": \"2\",\n    \"users_id\": 1,\n    \"updated_at\": \"2017-02-12 12:09:17\",\n    \"created_at\": \"2017-02-12 12:09:17\",\n    \"id\": 3\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Field Required",
          "content": "{\n  \"success\": false,\n  \"messages\": \"The name field is required.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/product/create.js",
    "groupTitle": "Product"
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
            "description": "<p>array data of products</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Success Retrieve List Product (example)",
          "content": "{\n  \"success\": true,\n  \"data\": [\n    {\n      \"id\": 3,\n      \"name\": \"T-shirt Blue Coldplay\",\n      \"price\": \"200000.00\",\n      \"description\": \"Available SIze X,Xl,L Free Delivery in Area Jabodetabek\",\n      \"images\": \"{'http://thumb.rl/product1.jpg','http://thumb.rl/product2.jpg'}\",\n      \"categories_id\": 2,\n      \"users_id\": 1,\n      \"created_at\": \"2017-02-12 12:09:17\",\n      \"updated_at\": \"2017-02-12 12:09:17\",\n      \"deleted_at\": null\n    },\n    {\n      \"id\": 4,\n      \"name\": \"Sweater Blue Ocean Coldplay\",\n      \"price\": \"30000.00\",\n      \"description\": \"All Size\",\n      \"images\": \"{'http://thumb.rl/product1.jpg'}\",\n      \"categories_id\": 2,\n      \"users_id\": 1,\n      \"created_at\": \"2017-02-12 12:10:40\",\n      \"updated_at\": \"2017-02-12 12:12:37\",\n      \"deleted_at\": null\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/product/data.js",
    "groupTitle": "Product"
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
        "content": "curl -i http://tawar.in/product/4",
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
            "description": "<p>information about products</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Success Retrieve single Product (example)",
          "content": "{\n  \"success\": true,\n  \"row\": {\n    \"id\": 4,\n    \"name\": \"Sweater Blue Ocean Coldplay\",\n    \"price\": \"30000.00\",\n    \"description\": \"Available SIze X,Xl,L Free Delivery in Area Jabodetabek\",\n    \"images\": \"{'http://thumb.rl/product1.jpg','http://thumb.rl/product2.jpg'}\",\n    \"categories_id\": 2,\n    \"users_id\": 1,\n    \"created_at\": \"2017-02-12 12:10:40\",\n    \"updated_at\": \"2017-02-12 12:12:37\",\n    \"deleted_at\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Data Not Found",
          "content": "{\n  \"success\": false,\n  \"messages\": \"Data Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/product/detail.js",
    "groupTitle": "Product"
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
        "content": "curl -i http://tawar.in/product/delete/1",
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
            "description": "<p>array data of products</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Success Soft Delete Product (example)",
          "content": "{\n  \"success\": true,\n  \"row\": {\n    \"id\": 3,\n    \"name\": \"T-shirt Blue Coldplay\",\n    \"price\": \"200000.00\",\n    \"description\": \"Available SIze X,Xl,L Free Delivery in Area Jabodetabek\",\n    \"images\": \"{'http://thumb.rl/product1.jpg','http://thumb.rl/product2.jpg'}\",\n    \"categories_id\": 2,\n    \"users_id\": 1,\n    \"created_at\": \"2017-02-12 12:09:17\",\n    \"updated_at\": \"2017-02-12 12:09:17\",\n    \"deleted_at\": \"2017-02-12 12:14:41\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Data Not Found",
          "content": "{\n  \"success\": false,\n  \"messages\": \"Data not found or already removed.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/product/trash.js",
    "groupTitle": "Product"
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
            "description": "<p>information about product</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Success Update Product (example)",
          "content": "{\n  \"success\": true,\n  \"row\": {\n    \"id\": 4,\n    \"name\": \"Sweater Blue Ocean Coldplay\",\n    \"price\": \"30000.00\",\n    \"description\": \"Available SIze X,Xl,L Free Delivery in Area Jabodetabek\",\n    \"images\": \"{'http://thumb.rl/product1.jpg','http://thumb.rl/product2.jpg'}\",\n    \"categories_id\": 2,\n    \"users_id\": 1,\n    \"created_at\": \"2017-02-12 12:10:40\",\n    \"updated_at\": \"2017-02-12 12:12:37\",\n    \"deleted_at\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Field Required",
          "content": "{\n  \"success\": false,\n  \"messages\": \"The name field is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Product Not Found",
          "content": "{\n  \"success\": false,\n  \"messages\": \"Product Not Found or Not allowed for updated this product\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/product/update.js",
    "groupTitle": "Product"
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
            "description": "<p>information about transaction</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Success Create Transaction (example)",
          "content": "{\n  \"success\": true,\n  \"row\": {\n    \"tax\": \"5000\",\n    \"subtotal\": \"125000.00\",\n    \"total\": \"120000.00\",\n    \"discount\": \"5000\",\n    \"users_id\": 1,\n    \"id\": \"TRX1702120111074\",\n    \"updated_at\": \"2017-02-12 13:11:07\",\n    \"created_at\": \"2017-02-12 13:11:07\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Field Required",
          "content": "{\n  \"success\": false,\n  \"messages\": \"The name field is required.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/transaction/create.js",
    "groupTitle": "Transaction"
  },
  {
    "type": "GET",
    "url": "/transaction/detail/{ID_TRANSACTION}",
    "title": "Retrieve List Detail Transaction By ID Transactions",
    "version": "1.0.0",
    "name": "DataDetailTransaction",
    "group": "Transaction",
    "permission": [
      {
        "name": "User Token Required"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://tawar.in/transaction/detail/TRX170209025558",
        "type": "json"
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
            "description": "<p>array data of transactions</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Success Retrieve List Transaction (example)",
          "content": "{\n  \"success\": true,\n  \"data\": [\n    {\n      \"id\": 1,\n      \"transactions_id\": \"TRX170209025558\",\n      \"products_id\": 2,\n      \"real_price\": \"4000.00\",\n      \"bargain_price\": \"5000.00\",\n      \"created_at\": \"2017-02-09 15:05:55\",\n      \"updated_at\": \"2017-02-09 15:05:55\",\n      \"deleted_at\": null\n    },\n    {\n      \"id\": 5,\n      \"transactions_id\": \"TRX170209025558\",\n      \"products_id\": 4,\n      \"real_price\": \"125000.00\",\n      \"bargain_price\": \"100000.00\",\n      \"created_at\": \"2017-02-12 13:35:57\",\n      \"updated_at\": \"2017-02-12 13:35:57\",\n      \"deleted_at\": null\n    },\n    {\n      \"id\": 6,\n      \"transactions_id\": \"TRX170209025558\",\n      \"products_id\": 3,\n      \"real_price\": \"200000.00\",\n      \"bargain_price\": \"150000.00\",\n      \"created_at\": \"2017-02-12 13:41:37\",\n      \"updated_at\": \"2017-02-12 13:41:37\",\n      \"deleted_at\": null\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/transaction/data_detail.js",
    "groupTitle": "Transaction"
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
            "description": "<p>array data of transactions</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Success Retrieve List Transaction (example)",
          "content": "{\n  \"success\": true,\n  \"data\": [\n    {\n      \"id\": \"TRX1702120110427\",\n      \"users_id\": 1,\n      \"discount\": \"5000.00\",\n      \"tax\": \"5000.00\",\n      \"subtotal\": \"125000.00\",\n      \"total\": \"120000.00\",\n      \"notes\": null,\n      \"created_at\": \"2017-02-12 13:10:42\",\n      \"updated_at\": \"2017-02-12 13:10:42\",\n      \"deleted_at\": null\n    },\n    {\n      \"id\": \"TRX1702121252419\",\n      \"users_id\": 1,\n      \"discount\": \"51000.00\",\n      \"tax\": \"7000.00\",\n      \"subtotal\": \"185000.00\",\n      \"total\": \"1340000.00\",\n      \"notes\": null,\n      \"created_at\": \"2017-02-12 12:27:41\",\n      \"updated_at\": \"2017-02-12 12:32:31\",\n      \"deleted_at\": null\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/transaction/data.js",
    "groupTitle": "Transaction"
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
        "content": "curl -i http://tawar.in/transaction/TRX1702120111074",
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
            "description": "<p>information of transactions</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Success Retrieve single Transaction (example)",
          "content": "{\n  \"success\": true,\n  \"row\": {\n    \"id\": \"TRX1702120111074\",\n    \"users_id\": 1,\n    \"discount\": \"5000.00\",\n    \"tax\": \"5000.00\",\n    \"subtotal\": \"125000.00\",\n    \"total\": \"120000.00\",\n    \"notes\": null,\n    \"created_at\": \"2017-02-12 13:11:07\",\n    \"updated_at\": \"2017-02-12 13:11:07\",\n    \"deleted_at\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Data Not Found",
          "content": "{\n  \"success\": false,\n  \"messages\": \"Data Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/transaction/detail.js",
    "groupTitle": "Transaction"
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
        "content": "curl -i http://tawar.in/transaction/delete/TRX1702120111074",
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
            "description": "<p>array data of transactions</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Success Soft Delete Transaction (example)",
          "content": "{\n  \"success\": true,\n  \"row\": {\n    \"id\": \"TRX1702120111074\",\n    \"users_id\": 1,\n    \"discount\": \"5000.00\",\n    \"tax\": \"5000.00\",\n    \"subtotal\": \"125000.00\",\n    \"total\": \"120000.00\",\n    \"notes\": null,\n    \"created_at\": \"2017-02-12 13:11:07\",\n    \"updated_at\": \"2017-02-12 13:11:07\",\n    \"deleted_at\": \"2017-02-12 14:15:21\",\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Data Not Found",
          "content": "{\n  \"success\": false,\n  \"messages\": \"Data not found or already removed.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/transaction/trash.js",
    "groupTitle": "Transaction"
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
          "content": "{\n  \"success\": true,\n  \"row\": {\n    \"transactions_id\": \"TRX170209025558\",\n    \"products_id\": \"4\",\n    \"real_price\": \"125000.00\",\n    \"bargain_price\": \"100000.00\",\n    \"updated_at\": \"2017-02-12 13:35:57\",\n    \"created_at\": \"2017-02-12 13:35:57\",\n    \"id\": 5\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Field Required",
          "content": "{\n  \"success\": false,\n  \"messages\": \"The name field is required.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/transaction_detail/create.js",
    "groupTitle": "Transactions_detail"
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
        "content": "curl -i http://tawar.in/transactions_detail/4",
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
          "content": "{\n  \"success\": true,\n  \"row\": {\n    \"id\": 5,\n    \"transactions_id\": \"TRX170209025558\",\n    \"products_id\": 4,\n    \"real_price\": \"125000.00\",\n    \"bargain_price\": \"100000.00\",\n    \"created_at\": \"2017-02-12 13:35:57\",\n    \"updated_at\": \"2017-02-12 13:35:57\",\n    \"deleted_at\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Data Not Found",
          "content": "{\n  \"success\": false,\n  \"messages\": \"Data Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/transaction_detail/detail.js",
    "groupTitle": "Transactions_detail"
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
        "content": "curl -i http://tawar.in/transactions_detail/delete/4",
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
          "content": "{\n  \"success\": true,\n  \"row\": {\n    \"id\": 5,\n    \"transactions_id\": \"TRX170209025558\",\n    \"products_id\": 4,\n    \"real_price\": \"125000.00\",\n    \"bargain_price\": \"100000.00\",\n    \"created_at\": \"2017-02-12 13:35:57\",\n    \"updated_at\": \"2017-02-12 13:35:57\",\n    \"deleted_at\": \"2017-02-12 15:31:22\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401 Unauthorized Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"Unauthenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Response Failure: Data Not Found",
          "content": "{\n  \"success\": false,\n  \"messages\": \"Data not found or already removed.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1/transaction_detail/trash.js",
    "groupTitle": "Transactions_detail"
  }
] });
