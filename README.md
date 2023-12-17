## Запуск проекта

```
npm ci - устанавливаем зависимости (игнорируя проверку версий)
docker compose up - разворачиваем бд в докере
npx prisma migrate deploy - миграция бд
npm run dev
```

----

## Скрипты

- `npm run dev` - Запуск проекта
- `npm run build` - Сборка проекта
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run prettier` - Исправление prettier
- `npm run test:unit` - Запуск unit тестов с jest
- `npm run test:gen` - Генерация тестов с помощью playwright
- `npm run test:pw` - Запуск тестов с помощью playwright

----

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Тесты

В проекте используются 2 вида тестов:
1) Обычные unit тесты на jest - `npm run test:unit`
2) Генерация e2e тестов с playwright - `npm run test:gen`
3) e2e тестирование с playwright - `npm run test:pw`

----

## Документация

Подробнее по развертыванию - [развертывание](/docs)

----