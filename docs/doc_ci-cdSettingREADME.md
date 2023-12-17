## Настройка CI/CD

## Настройка прекоммит тестов

1.Добавляем “lint:types”: “tsc —noEmit”

```name: Pull requests check

on:
  pull_request:

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v3
        with:
          node-version: 20.x.x
          cache: npm
      - run: npm ci
      - run: npm run lint
      - run: npm run lint:types
      - run: npm run test```

## Настройка автодеплоя

2. Добавляем deploy-staging.yml

```name: deploy staging

on:
  push:
    branches:
      - main

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v3
        with:
          node-version: 20.x.x
          cache: npm
      - run: npm ci
      - run: npm run lint
      - run: npm run lint:types
      - run: npm run test
  deploy:
    needs: lint
    runs-on: ubuntu-latest
    concurrency:
      group: staging
      cancel-in-progress: true
    steps:
      - name: SSH Command
        uses: D3rHase/ssh-command-action@v0.2.2
        with:
          # hostname / IP of the server
          host: ${{ secrets.STAGING_SSH_HOST }}
          user: ${{ secrets.STAGING_SSH_USERNAME }}
          private_key: ${{ secrets.STAGING_SSH_PRIVATE_KEY }}
          host_fingerprint: ${{ secrets.STAGING_SSH_FINGERPRINT }}
          command: source ~/.nvm/nvm.sh; ~/deploy.sh
```

3. Добавляем в repository → Settings → Secrets and variables\
```STAGING_SSH_HOST = example.ru```\
```STAGING_SSH_USERNAME = serverDeployerLogin```\

4. Генерируем на сервере новую пару ключей в ~/id_rsa\
```ssh-keygen```\

5. Добавляем id_rsa.pub  в ~/.ssh/authorized_keys\
```cd ~/.ssh/```\
```nano authorized_keys```\

6. Получаем finger print для сервера (Нужно сначала выйти с сервера)
```ssh-keyscan -H staging-cms.ru -p 22```\
Копируем полностью последнюю строку начинающуюся с |1| и добавляем в STAGING_SSH_FINGERPRINT\

7. Добавляем скрипт deploy.sh в ~\
```cd ./core
git pull
npm ci
npx prisma generate
npx prisma migrate deploy
npm run build
npx pm2 reload all```

8. даём право на выполнение скрипта\
+x - право на выполнение\
```chmod +x ~/deploy.sh```\

8. Добавляем в deploy-staging.yml запуск e2e тестов. В поле jobs:\
