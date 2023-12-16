## Настройка сервера

ServerShop
https://timeweb.cloud
1. Подключаемся к серверу к пользователю root по паролю

    —Adding users\
        ```adduser admin```\
        ```usermod -aG sudo admin```\
    —Reboot server\
        ```sudo systemctl restart ssh```\
    —Server status\
        ```sudo systemctl status ssh```\

2. Отключаемся от сервера и копируем публичный ключ на сервер
    SSH\
    —Copy key to server\
        ```ssh-copy-id admin@serverIp/domain```\
    —Check ssh key\
        ```cat .ssh/id_rsa.pub```\

3. Отключаем доступ к root пользователю и аутентификацию по паролю
    —Delete root user\
        ```sudo nano /etc/ssh/sshd_config```\
        -> PermitRootLogin no\
        -> PasswordAuthentication no\

4. генерируем ключ, добавляем в гит, клонируем репозиторий
5. Устанавливаем nvm
Installing NVM\
```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash```\

—Run app on server\
    ```npm run build```\
    ```npm start```\

—Запуск процесса в фоне\
    ```npx pm2 start nom —name next —start```\
    Старт при запуске системы\
    ```npx pm2 startup```\
    Выполнить команду, которую он пришлет\
--Перезапуск pm2\
    ```npx pm2 reload all```

Firewall installing\
    ```sudo apt-get install ufw```\
—Firewall status\
    ```sudo ufw status verbose```\
—Settings ufw\
    ```sudo ufw allow ssh```\
    ```sudo ufw allow http```\
    ```sudo ufw allow https```\
—Enable firewall\
    ```sudo ufw enable```\

Проектирование запросов\
(Файрвол не пропускает на порты)\
Nginx installing\
    ```sudo apt install nginx```\
—Enable nginx (запуск при запуске машины)\
    ```sudo systemctl is-enabled nginx```\
—Settings nginx\
    ```cd /etc/nginx```\
    ```sudo nano nginx.conf```\
—Ссылки на конфигурационные файлы\
    Тут хранятся ссылки (можно удалять)\
    ```cd /sites-enabled```\
    Тут хранятся конфигурации\
    ```cd /sites-available```\
    Удаляем дефолтную конфигурацию  Создаем\
    ```sudo nano /etc/nginx/sites-available/serverIpOrDomain.conf```\
```
server { 
    server_name app.micro-courses.ru; 

    location / { 
        include proxy_params; 
        proxy_pass http://127.0.0.1:3000; 
    } 
    listen 80; 
}
```
Без домена\
```
server {
  server_name 82.97.244.86;
  location / {
    include proxy_params;

    proxy_pass http://127.0.0.1:3000;
  }

  listen *:80;
  listen [::]:80;
}
```


Делаем ссылку в sites-enabled\
```sudo ln -s /etc/nginx/sites-available/82.97.244.86.conf /etc/nginx/sites-enabled/```\

—Nginx test config\
    ```sudo nginx -t```\
—Nginx reboot\
    ```sudo nginx -s reload```\

HTTPS\
```sudo apt install certbot python3-certbot-nginx```\
```sudo certbot --nginx -d staging-cms.ru```\
```sudo systemctl status certbot.timer``` - проверить планировщик обновлений\ 
```certbot renew --dry-run``` - проверить обновление\


    


