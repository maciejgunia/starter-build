### creating a database
* mysql -u root -p
* CREATE DATABASE example;
* GRANT ALL PRIVILEGES ON example.* TO "example"@"localhost" IDENTIFIED BY "example123";
* FLUSH PRIVILEGES;
* EXIT

### creating a backup
mysqldump -u root -p example > db/example_$(date "+%y%m%d").sql

### restoring a backup
mysql -u root -p example < db/example_180125.sql

### adding permissions to folder
sudo chown -R www-data:www-data /var/www/example.com/public_html
sudo chmod -R 770 /var/www/example.com/public_html

## bitnami wordpress banner removal
sudo /opt/bitnami/apps/wordpress/bnconfig --disable_banner 1
sudo  /opt/bitnami/ctlscript.sh restart apache
