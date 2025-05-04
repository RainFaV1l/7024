# Базовый образ PHP 8.3 с FPM
FROM php:8.3-fpm

# Установка системных пакетов и PHP-расширений
RUN apt-get update && apt-get install -y \
    libpq-dev libzip-dev libpng-dev libjpeg-dev libfreetype6-dev \
    supervisor \
    && docker-php-ext-configure gd --with-jpeg --with-freetype \
    && docker-php-ext-install pdo_pgsql gd zip \
    && pecl install redis && docker-php-ext-enable redis \
    && apt-get clean && rm -rf /var/lib/apt/lists/*


# (Опционально) Установка Composer внутрь контейнера
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

COPY ./docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

CMD ["/usr/bin/supervisord"]

# Установка рабочей директории
WORKDIR /var/www/html
