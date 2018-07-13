<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Carbon\Carbon;

use App\ShopifyApp;
use App\Review;

class syncReview extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sync:review';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sync Shopify reviews';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->info('----- Start Shopify Apps review sync -----');

        $shopifyApps = ShopifyApp::all();

        if (!$shopifyApps) {
            $this->error('No shopify apps to get reviews');
            exit();
        }

        // Get all reviews for each app an call to process
        foreach($shopifyApps as $app) {
            $this->info(':: Get reviews from ' . $app->name);

            $app_review_url = str_replace('{app_slug}', $app->slug, config('app.shopify_reviews_url'));

            $res = \Guzzle::get($app_review_url);

            if ($res->getStatusCode() != 200) {
                $this->error("Error getting reviews from url $app_review_url");
                continue;
            }

            // Process all reviews of a app
            $this->processReviews($app->slug, json_decode($res->getBody(), true));

        }

        $this->info('----- Finish review sync -----');
        echo '----- Finish review sync -----';
    }

    private function processReviews(string $slug, array $reviews) : Bool 
    {

        // find the app by slug
        $shopifyApp = ShopifyApp::withSlug($slug)->first();

        if(!$shopifyApp) {
            $this->error("Cant process reviews from $slug. Shopify App not founded");
            return false;
        }

        // Save overall rating of the app
        $shopifyApp->overall_rating = $reviews['overall_rating'];
        $shopifyApp->save();

        // Create or Update a review based on domain and app
        // Model will take care to store previous rating value
        foreach($reviews['reviews'] as $review) {

            Review::updateOrCreate(
                [
                    'shopify_domain'    => $review['shop_domain'],
                    'app_slug'          => $slug
                ],
                [
                    'date'              => Carbon::parse($review['created_at'])->format('Y-m-d H:i:s'),
                    'star_rating'       => $review['star_rating'] // ⚠️⚠️⚠️ For test, set a manual int value here like `rand(1,5)` and sync again ⚠️⚠️⚠️
                ]
            );
        }
        return true;
    }

}
