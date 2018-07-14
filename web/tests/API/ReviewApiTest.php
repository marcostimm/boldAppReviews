<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ReviewApiTest extends TestCase
{

    const APP_SLUG = 'product-upsell';

    /**
     * Test if will return Review
     *
     * @return void
     */
    public function testReviewReturnsValidStatus()
    {
        $response = \Guzzle::get(config('app.url') . '/api/reviews');
        $this->assertEquals($response->getStatusCode(), 200);
    }

    /**
     * Test if will return Review
     *
     * @return void
     */
    public function testReviewReturnsValidData()
    {
        $response = \Guzzle::get(config('app.url') . '/api/reviews');
        $body = json_decode($response->getBody(), true);

        $this->assertArrayHasKey('data',            $body);
        $this->assertArrayHasKey('id',              $body['data'][0][0]);
        $this->assertArrayHasKey('star_rating',     $body['data'][0][0]);
        $this->assertArrayHasKey('shopify_domain',  $body['data'][0][0]);
        $this->assertArrayHasKey('app_slug',        $body['data'][0][0]);
    }

    /**
     * Test if Review will filter by App Slug
     *
     * @return void
     */
    public function testReviewReturnsWillFilterByAppSlug()
    {
        $response = \Guzzle::get(config('app.url') . '/api/reviews?app=' . self::APP_SLUG);
        $body = json_decode($response->getBody(), true);

        $hasOtherApp = false;
        foreach($body['data'] as $row) {
            if ($row[0]['app_slug'] != self::APP_SLUG) {
                $hasOtherApp = true;
                exit;
            }
        }
        $this->assertFalse($hasOtherApp);
    }
    
}
