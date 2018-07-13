<?php

use Illuminate\Database\Seeder;

class shopifyApps extends Seeder
{

    private $apps = [
        ['Product Upsell',                      'product-upsell'],
        ['Product Discount',                    'product-discount'],
        ['Store Locator',                       'store-locator'],
        ['Product Options by Bold',             'product-options'],
        ['Quantity Breaks',                     'quantity-breaks'],
        ['Product Bundles',                     'product-bundles'],
        ['Customer Pricing',                    'customer-pricing'],
        ['Product Builder',                     'product-builder'],
        ['Social Autopilot',                    'social-triggers'],
        ['Recurring Orders & Subscription Box', 'recurring-orders'],
        ['Multi Currency',                      'multi-currency'],
        ['Intuit QuickBooks',                   'quickbooks-online'],
        ['Xero',                                'xero'],
        ['Bold Brain',                          'the-bold-brain']
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        foreach($this->apps as $app)
        {
            DB::table('shopify_apps')->insert([
                'name'      => $app[0],
                'slug'      => $app[1]
            ]);
        }
    }
}
