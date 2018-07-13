<?php

namespace App\Transformers;

use App\ShopifyApp;
use Illuminate\Database\Eloquent\Collection;

/**
 * ShopifyAppTransformer Class
 *
 * @category Transformers
 * @package  Bold
 * @author   Marcos Timm <timm@marcos.im>
 * @license  Copyright (C)
 * @link     https://marcos.im
 */
class ShopifyAppTransformer extends \League\Fractal\TransformerAbstract
{
        public function transform(Collection $apps)
        {
            return [
                $apps
            ];
        }
}