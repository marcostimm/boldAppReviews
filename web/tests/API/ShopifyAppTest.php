<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ShopifyAppTest extends TestCase
{
    /**
     * Test if will return 200
     *
     * @return void
     */
    public function testReviewReturnsValidStatus()
    {
        $response = \Guzzle::get(config('app.url') . '/api/apps');
        $this->assertEquals($response->getStatusCode(), 200);
    }

    /**
     * Test if will return shopify app list
     *
     * @return void
     */
    public function testReviewReturnsValidData()
    {
        $response = \Guzzle::get(config('app.url') . '/api/apps');
        $body = json_decode($response->getBody(), true);

        $this->assertArrayHasKey('data',            $body);
        $this->assertArrayHasKey('name',            $body['data'][0][0]);
        $this->assertArrayHasKey('slug',            $body['data'][0][0]);
        $this->assertArrayHasKey('overall_rating',  $body['data'][0][0]);
    }

    /**
     * Test if will return shopify app stats
     *
     * @return void
     */
    public function testReviewReturnsStats()
    {
        $response = \Guzzle::get(config('app.url') . '/api/apps/stats');
        $body = json_decode($response->getBody(), true);

        $this->assertArrayHasKey('data',            $body);
        $this->assertArrayHasKey('totalApps',       $body['data'][0]);
        $this->assertArrayHasKey('totalReviews',    $body['data'][0]);
        $this->assertArrayHasKey('avgAppRating',    $body['data'][0]);
        $this->assertArrayHasKey('ratingPerApp',    $body['data'][0]);
    }
}
