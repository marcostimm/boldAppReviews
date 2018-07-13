<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ShopifyApp;
use App\Review;
use App\Transformers\ShopifyAppTransformer;
use App\Transformers\StatsTransformer;

class ShopifyAppController extends Controller
{

    public function index()
    {
        return fractal()
            ->item(ShopifyApp::all())
            ->transformWith(new ShopifyAppTransformer)
            ->toJson();
    }

    public function stats()
    {

        $totalApps = ShopifyApp::count();
        $totalReviews = Review::count();
        $avgAppRating = ShopifyApp::avg('overall_rating');
        $ratingPerApp = round($totalReviews / $totalApps, 2);

        return fractal()
            ->item(['totalApps' => $totalApps, 'totalReviews' => $totalReviews, 'avgAppRating' => $avgAppRating, 'ratingPerApp' => $ratingPerApp])
            ->transformWith(new StatsTransformer)
            ->toJson();
    }

}
