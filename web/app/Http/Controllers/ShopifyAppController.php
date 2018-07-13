<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ShopifyApp;
use App\Transformers\ShopifyAppTransformer;

class ShopifyAppController extends Controller
{

    public function index()
    {
        return fractal()
            ->item(ShopifyApp::all())
            ->transformWith(new ShopifyAppTransformer)
            ->toJson();
    }

}
