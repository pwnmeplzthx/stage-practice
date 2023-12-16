## Настройка CI/CD

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

2. 