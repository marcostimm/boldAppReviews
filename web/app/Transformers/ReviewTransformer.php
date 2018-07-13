<?php

namespace App\Transformers;

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
            return [
                $reviews
            ];
        }
}