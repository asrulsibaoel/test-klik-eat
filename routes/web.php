<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return new \Illuminate\Http\RedirectResponse('/documentations/index.html');
});

/**
 * @api {post} /account/register Register the user
 * @apiName RegisterUser
 * @apiGroup Authorization
 *
 * @apiParam {String} name The User's name
 * @apiParam {String} email The User's email
 * @apiParam {String} password The User's password
 * @apiSuccessExample Success-Response :
 * {
"error": false,
"message": "Detail of User",
"data": {
"user": {
"id": 1,
"name": "admin",
"email": "admin@admin.com",
"fb_token": null,
"gender": null,
"birtdate": null,
"phone": null,
"address": null,
"photo": null,
"created_at": "2017-03-07 09:37:21"
}
}
}
 *
 * @apiErrorExample Error-Response :
 *                  {
 *                       "response": {
 *                         "error": 1,
 *                         "message": "An error occured caused by : SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'university_name' cannot be null (SQL: insert into `university` (`university_name`, `address`) values (, ))",
 *                         "data": {}
 *                       }
 *                    }
 *
 */
Route::post('/account/register', 'UserController@register');

/**
 * @api {post} /account/login Login to get access token
 * @apiName GetAuthorizationKey
 * @apiGroup Authorization
 *
 *
 * @apiParam {String} email The User's email
 * @apiParam {String} password The User's password
 * @apiSuccessExample Success-Response :
 * {
"error": false,
"message": "Login User Successfully",
"data": {
"user": {
"id": 1,
"name": "admin",
"email": "admin@admin.com",
"fb_token": null,
"gender": null,
"birtdate": null,
"phone": null,
"address": null,
"photo": null,
"created_at": "2017-03-07 09:37:21"
},
"token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImU1Y2ViMDNjNTlhMjZlMDY1M2UyNTQzMGNkNjI2ZTZlNmEyYmJjZWVmYWJlYWVkOGIwYmI0OWRiNmU4YjBmZjI2ZWQ0ZTViMTE1YjBlNzc0In0.eyJhdWQiOiIxIiwianRpIjoiZTVjZWIwM2M1OWEyNmUwNjUzZTI1NDMwY2Q2MjZlNmU2YTJiYmNlZWZhYmVhZWQ4YjBiYjQ5ZGI2ZThiMGZmMjZlZDRlNWIxMTViMGU3NzQiLCJpYXQiOjE0ODg5MDk1MjgsIm5iZiI6MTQ4ODkwOTUyOCwiZXhwIjoxNTIwNDQ1NTI3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.UULMtDPflE4d6JN7rD1La83gu1NlcMvYI3R2EwfcjAPnU4le9N2MJIg_bSSOZGcyY7x8wTqFegcB17szsBfC_Yh5HsMmBmzmOtjRl8hwLhEgwmI7VMfLTDcua2S4oEqHXIXdJ-u17pULfVT1vxgSvN-mm6DC9HpWO2ZbJRSoMs6DqNow8AyFp5oD6gE51vLKDfAzT-eWs8DDvCTs5cVuPbc4j5RIdS4dKHzmVkG9_k3JF83QLxCKb3KAesvqK3II2FW-Zy0Un_OUhqtdgBMDghIsSOzrbXseEwEtoXG5Q2g2t-kP8K3mCU-Cg4Go2p6bQlpD0FPE8kKoQNRPQ93F1a2HayJdd1dWa9RorVgfPuS8SePSujwNjwM5zmN1I3supPlOSd_w0Uzfgg5UZSL_HVicV1i2g_j0nvNmerMbxqrUOcUj3EBwVt8Fm38dRpiQV-yqcOCUNpmtQLJ2rSrY-UWzT7egVAXFRK8JIf3W3W_-L68ks1ef8Ho_p9Bpiw1AebWSZHHJcTIPJp8xrAYaSuYJjd6EOBCvyRabz1tTJkNxZdNFVcE33UXE17AyvD7zKQDqCPWnIMy7rWaedqP-VspIOD09CJoxk8KpzW2X9Z0usTRo2brqFvjHIfHX0ug2QDUvSa2LV8K8aiCcE_m3NA5MkMmXGd3_WwdJVcTN234"
}
}
 *
 * @apiErrorExample Error-Response :
 *                  {
 *                       "response": {
 *                         "error": 1,
 *                         "message": "An error occured caused by : SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'university_name' cannot be null (SQL: insert into `university` (`university_name`, `address`) values (, ))",
 *                         "data": {}
 *                       }
 *                    }
 *
 */
Route::post('/account/login', 'UserController@login');