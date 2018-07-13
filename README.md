# Bold App Review

This app provides a easy way to analyze reviews health from shopify Bold apps.

## Getting Started

Clone this repository on your machine and follow the installation instruction

### Prerequisites

Docker

### Installing

Enter in the project root directory and run Docker

```
docker-compose up -d
```

Enter in `web` directory and install all dependencies

```
composer install
```

```
npm install
```


Run the migrations and seed

```
php artisan migrate --seed
```

## Task Scheduling

Docker is prepared to run cron that call the Laravel command scheduler, but you can manually call by the follow url

```
http://localhost/api/apps/sync
```

## 🖥 Access Bold App Review Panel
```
http://localhost
```

## Running the tests

Just run phpunit command

```
phpunit
```

## Author

* **Marcos Timm Rossow** - [Github](https://github.com/marcostimm)

## Acknowledgments

* https://www.creative-tim.com/product/material-dashboard
* Bold 🇨🇦
