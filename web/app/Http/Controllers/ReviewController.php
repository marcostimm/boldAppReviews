<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Review;
use App\Transformers\ReviewTransformer;

class ReviewController extends Controller
{
    public function index(Request $request, Review $review)
    {
        
        // Order and direction
        $order  = $request->order ?? 'updated_at';
        $dir    = $request->dir === "true" ? 'desc' : 'asc';

        // Filter by app slug
        if ($request->has('app')) {
            $reviews = $review->where('app_slug', $request->app)->orderBy($order, $dir)->get();
        } else {
            $reviews = $review->orderBy($order, $dir)->all();
        }

        return fractal()
            ->item($reviews)
            ->transformWith(new ReviewTransformer)
            ->toJson();
    }
}
