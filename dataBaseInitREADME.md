1. Устанавливаем зависимость prisma и инициализируем
```npm i -D prisma```
```npx prisma init```

2. Добавляем docker-compose.yml
{version: "3"

services:
  db:
    image: postgres
    restart: always
    ports:
      - 5432:5432
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=postgres
    //На случай, если контейнер ляжет
    volumes:
      - db-data:/var/lib/postgresql/data
volumes:
  db-data:
}

3. Запускаем docker-compose.yml
```docker compose up```
что бы база работала в фоне
```docker compose up -d```
выключение 
флаг -v затирает данные
```docker compose down -v```

Миграция БД
```sudo npx prisma migrate dev```

