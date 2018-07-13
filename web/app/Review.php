<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'shopify_domain',
        'app_slug',
        'star_rating',
        'previous_star_rating'
    ];

    /**
     * Set the star rating and previous value
     *
     * @param  string  $value
     * @return void
     */
    public function setStarRatingAttribute($value)
    {
        $currentlyStarRating = $this->getOriginal('star_rating');

        // If the currently star rating is setting and the new value is different, then
        // preserves a old value to previous_start_rating field
        if ($currentlyStarRating != null && $currentlyStarRating != $value) {
            $this->attributes['previous_star_rating'] = $this->attributes['star_rating'];
            $this->attributes['star_rating'] = $value;
        } else {
            $this->attributes['star_rating'] = $value;
        }
    }
}
