FROM php:7.1-fpm

# Install PHP extensions
RUN apt-get update && apt-get install -y \
      libicu-dev \
      libpq-dev \
      libmcrypt-dev \
      cron \
    && rm -r /var/lib/apt/lists/* \
    && docker-php-ext-configure pdo_mysql --with-pdo-mysql=mysqlnd \
    && docker-php-ext-install \
      intl \
      mbstring \
      mcrypt \
      pcntl \
      pdo_mysql \
      pdo_pgsql \
      pgsql \
      zip \
      opcache

# Add crontab file in the cron directory
RUN touch /var/log/cron.log
ADD crontab /etc/cron.d/laravel-cron
RUN chmod 0644 /etc/cron.d/laravel-cron
RUN /usr/bin/crontab /etc/cron.d/laravel-cron

# RUN echo "* * * * * php /var/www/html/artisan schedule:run >> /dev/null 2>&1" >  /etc/cron.d/laravel-cron
# RUN chmod 0644 /etc/cron.d/laravel-cron
# RUN touch /var/log/cron.log
# CMD cron

# Install composer
# RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin --filename=composer

# install phpunit
# RUN curl https://phar.phpunit.de/phpunit.phar -L > phpunit.phar \
#   && chmod +x phpunit.phar \
#   && mv phpunit.phar /usr/local/bin/phpunit \
#  && phpunit --version

# Change uid and gid of apache to docker user uid/gid
RUN usermod -u 1000 www-data && groupmod -g 1000 www-data

WORKDIR /var/www/html


