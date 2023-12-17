## Настройка Sentry - логирование ошибок

1. Регистрируемся в sentry\
2. Создаём проект\
3. Выполняем на локальной машине\
```npx @sentry/wizard@latest -i nextjs```\
4. Добавляем обработчик ошибок рендера https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#report-react-component-render-errors\
5. Добавляем настройку dryRun на development\
6. Добавляем .env и меняем везде\
```NEXT_PUBLIC_SENTRY_DSN=""```\
```NEXT_PUBLIC_SENTRY_ENVIRONMENT=""```\
7. Устанавливаем dsn и environment из переменной среды для всех окружений\
8. Заходим на сервер и добавляем переменные среды\
9. Пушим изменения и ждём билд
