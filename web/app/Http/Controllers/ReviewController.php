<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Review;
use App\Transformers\ReviewTransformer;

class ReviewController extends Controller
{
    public function index(Request $request, Review $review)
    {

        // Filter by app slug
        if ($request->has('app')) {
            $reviews = $review->where('app_slug', $request->app)->get();
        } else {
            $reviews = Review::all();
        }

        return fractal()
        ->item($reviews)
        ->transformWith(new ReviewTransformer)
        ->toJson();
    }
}
