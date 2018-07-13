<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'shopify_domain',
        'app_slug',
        'star_rating',
        'previous_star_rating',
        'date'
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
        
        // $currentlyCreatedData = $this->getOriginal('created_at');


        // If the currently star rating is setting and the new value is different, then
        // preserves a old value to previous_start_rating field
        if ($currentlyStarRating != null && $currentlyStarRating != $value) {
            $this->attributes['previous_star_rating']   = $this->attributes['star_rating'];
            $this->attributes['star_rating']            = $value;
        } else {
            $this->attributes['star_rating'] = $value;
        }
    }

    /**
	 * Save the model instance to the database.
	 *
	 * @return bool
	 */
    public function save(array $options = [])
    {

        // I'm supposing that Shopify update the record and keep `created_at` 
        // field with the new date. In this case, I manually set `created_at` 
        // when I create a new record and when the star rating change, I use this field in `updated_at` field.

        $currentlyStarRating = $this->getOriginal('star_rating');
        if ($currentlyStarRating != null && $currentlyStarRating != $this->attributes['star_rating']) {
            $this->updated_at = $this->attributes['date'];
        } else {
            $this->created_at = $this->attributes['date'];
        }
        unset($this->date);

        parent::save($options);
    }

}
