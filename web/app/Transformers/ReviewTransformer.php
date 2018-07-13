<?php

namespace App\Transformers;

use Carbon\Carbon;

use App\Review;
use Illuminate\Database\Eloquent\Collection;

/**
 * ReviewTransformer Class
 *
 * @category Transformers
 * @package  Bold
 * @author   Marcos Timm <timm@marcos.im>
 * @license  Copyright (C)
 * @link     https://marcos.im
 */
class ReviewTransformer extends \League\Fractal\TransformerAbstract
{
        public function transform(Collection $reviews)
        {
            $reviews->map( function( $review ) {
                $review->created_at = $review->created_at ?  Carbon::parse($review['created_at'])->format('d/m/Y \a\t H:i:s') : null;
                $review->updated_at = $review->updated_at ?  Carbon::parse($review['updated_at'])->format('d/m/Y \a\t H:i:s') : null;
                return $review;
            });

            return [
                $reviews
            ];
        }
}