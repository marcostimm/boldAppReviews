<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ShopifyApp extends Model
{
    public $timestamps = false;

    /**
     * Scope a query to only include Apps with slug
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param mixed $type
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeWithSlug($query, $slug)
    {
        return $query->where('slug', $slug);
    }
}
