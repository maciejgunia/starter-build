## database
### creating a database
mysql -u root -p
CREATE DATABASE example;
GRANT ALL PRIVILEGES ON example.* TO "example"@"localhost" IDENTIFIED BY "example123";
FLUSH PRIVILEGES;
EXIT

### creating a backup
mysqldump -u root -p example > db/example_$(date "+%y%m%d").sql

### restoring a backup
mysql -u root -p example < db/example_180125.sql
