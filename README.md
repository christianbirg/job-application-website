#Requirements

This application only works with on an (local) server, becauseof e.g. cross origins and Node.js and your browser must enable javascript.

#Steps to install

-	Run following command lines in the terminal

```bash
  # run without global param -g in the root directory of the project
  npm install [-g] bower
  # run in the root directory of the project
  bower install

```

##Simple install process

-	Enable bower config by prefix bowerrc with a dot ".bowerrc"

```bash
npm install http-server
```

-	Run following command in the terminal

```bash
node_modules/http-server/bin/http-server public_html
```

-	Open app in the browser http://localhost:8000/

##Other install process

-	Create a virtuel host (for apache) /path/to/apache2/extra/httpd-vhosts.conf

```bash
  # Application
  <VirtualHost *:80>
      ServerName application.inc
      ServerAlias www.application.inc
      DocumentRoot "/path/to/application/public_html"
      ErrorLog "/path/to/apache2/application.com-error_log"
      CustomLog "/path/to/apache2/application.com-access_log" common
      ServerAdmin christian.birg@googlemail.com
          <Directory "/path/to/application/public_html">
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

```bash
mv htaccess .htaccess
```

-	Run the app in the browser under "http://application.inc"
