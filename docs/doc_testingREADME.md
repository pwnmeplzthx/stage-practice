## Настройка Jest

1. Дока по настройке jest для next https://nextjs.org/docs/pages/building-your-application/optimizing/testing#setting-up-jest-with-the-rust-compiler

2. Устанавливаем зависимости
```npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom```
```npm install --save-dev @testing-library/user-event @types/jest ts-node```
3. Добавляем jest.config.ts. Копируем пример из доки. 
```import type { Config } from 'jest'
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
})
 
// Add any custom config to be passed to Jest
const config: Config = {
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    // Add more setup options before each test is run
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)```

4. Добавляем jest.setup.ts. Копируем содержимое файла из доки
```import '@testing-library/jest-dom';```

## Настройка Playwright

5. Добавляем playwright
```npm init playwright@latest```

6. Устанавливаем dotenv и раскомментируем его запуск в верку конфига playwright
```npm i dotenv```

7. Добавляем в поле use.baseURL значение из переменной окружения TEST_ENV_BASE_URL

8. Добавляем переменную окружения с тестовым url TEST_ENV_BASE_URL в .env и .env.exapmle

9. Игнорим e2e тесты unit тестами (Добавляем в jest.config.ts следующую строку)
```modulePathIgnorePatterns: ["<rootDir>/tests/"],```

10. Нагенерируем тестики
```npx playwright codegen localhost:3000```

11. Запускаем нагенерированные тесты
```npx playwright test```