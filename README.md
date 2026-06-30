## Getting Started

Для работы приложения требуется запущенный бэкенд с подключённой базой данных.

1. Запустите сервер API и убедитесь, что база данных доступна.
2. Создайте файл `.env` с переменными среды, например:

```
NEXT_PUBLIC_API_BASE=http://127.0.0.1:1337/api/
NEXT_PUBLIC_API_ORIGIN=http://127.0.0.1:1337
NEXT_PUBLIC_API_HOSTNAME=127.0.0.1
NEXT_PUBLIC_API_PROTOCOL=http
```

3. Запуск приложения:

```bash
npm run dev
```

Приложение доступно по адресу [http://localhost:3000](http://localhost:3000).
