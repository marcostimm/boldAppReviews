<?php

namespace App\Transformers;

use Illuminate\Database\Eloquent\Collection;

/**
 * StatsTransformer Class
 *
 * @category Transformers
 * @package  Bold
 * @author   Marcos Timm <timm@marcos.im>
 * @license  Copyright (C)
 * @link     https://marcos.im
 */
class StatsTransformer extends \League\Fractal\TransformerAbstract
{
        public function transform($params)
        {
            return [
                $params
            ];
        }
}