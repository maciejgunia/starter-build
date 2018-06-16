## creating a database
```bash
mysql -u root -p
```
```sql
CREATE DATABASE example;
GRANT ALL PRIVILEGES ON example.* TO "example"@"localhost" IDENTIFIED BY "example123";
FLUSH PRIVILEGES;
EXIT
```

## creating a backup
```bash
mysqldump -u root -p example > db/example_$(date "+%y%m%d").sql
```

## restoring a backup
```bash
mysql -u root -p example < db/example_180125.sql
```

## adding permissions to folder
```bash
sudo chown -R www-data:www-data /var/www/example.com/public_html
sudo chmod -R 775 /var/www/example.com/public_html
```

## bitnami wordpress banner removal
```bash
sudo /opt/bitnami/apps/wordpress/bnconfig --disable_banner 1
sudo /opt/bitnami/ctlscript.sh restart apache
```
