#Requirements

This application only works with on an (local) server, becauseof e.g. cross origins.

#Steps to install

-	Create a virtuel host (for apache) /path/to/apache2/extra/httpd-vhosts.conf

```bash
  # Application
  <VirtualHost *:80>
      ServerName application.inc
      ServerAlias www.application.inc
      DocumentRoot "/path/to/application/"
      ErrorLog "/path/to/apache2/application.com-error_log"
      CustomLog "/path/to/apache2/application.com-access_log" common
      ServerAdmin christian.birg@googlemail.com
          <Directory "/path/to/application/">
              Options Indexes FollowSymLinks
              AllowOverride All
              Order allow,deny
              Allow from all
          </Directory>
  </VirtualHost>
```

-	Add the virtuel domain to hosts file.

```
# Application
127.0.0.1   application.inc
127.0.0.1   www.application.inc
```

-	Check and uncomment the Loading Rewrite Module in httpd-conf

```
LoadModule rewrite_module libexec/apache2/mod_rewrite.so
```

-	Enable htaccess by prefix htaccess with a dot ".htaccass"

-	Check if your Browser if javascript is enabled

-	Run the app in the browser under "http://application.inc"
