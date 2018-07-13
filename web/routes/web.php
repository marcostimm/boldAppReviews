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

Route::redirect('/', '/dashboard', 301);

Route::any('{slug}', function() {
    return view('react');
})->where('slug', '(?!api)([A-z\d-\/_.]+)?');

// Route::get('/', function () {
//     return view('react');
// });
