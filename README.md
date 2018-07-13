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

Enter in `web` directory and run the migrations and seed

```
php artisan migrate --seed
```

Download all dependencies

```
npm install
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
