## Project Directory Structure

```bash
├── .editorconfig
├── .env.example
├── .gitattributes
├── .gitignore
├── README.md
├── app
│   ├── Http
│   │   └── Controllers
│   │       ├── AuthController.php
│   │       ├── Controller.php
│   │       ├── DepartmentController.php
│   │       └── EmployeeController.php
│   ├── Models
│   │   ├── Department.php
│   │   ├── Employee.php
│   │   └── User.php
│   └── Providers
│       └── AppServiceProvider.php
├── artisan
├── bootstrap
│   ├── app.php
│   ├── cache
│   │   └── .gitignore
│   └── providers.php
├── composer.json
├── config
│   ├── app.php
│   ├── auth.php
│   ├── cache.php
│   ├── database.php
│   ├── filesystems.php
│   ├── logging.php
│   ├── mail.php
│   ├── permission.php
│   ├── queue.php
│   ├── sanctum.php
│   ├── services.php
│   └── session.php
├── database
│   ├── .gitignore
│   ├── factories
│   │   └── UserFactory.php
│   ├── migrations
│   │   ├── 0001_01_01_000000_create_users_table.php
│   │   ├── 0001_01_01_000001_create_cache_table.php
│   │   ├── 0001_01_01_000002_create_jobs_table.php
│   │   ├── 2025_04_06_030247_create_personal_access_tokens_table.php
│   │   ├── 2025_04_06_031858_create_permission_tables.php
│   │   ├── 2025_04_06_043417_create_departments_table.php
│   │   └── 2025_04_06_043453_create_employees_table.php
│   └── seeders
│       ├── DatabaseSeeder.php
│       └── RolesSeeder.php
├── docker-compose.yml
├── package.json
├── phpunit.xml
├── public
│   ├── .htaccess
│   ├── favicon.ico
│   ├── index.php
│   └── robots.txt
├── resources
│   ├── css
│   │   └── app.css
│   ├── js
│   │   ├── App.vue
│   │   ├── api.js
│   │   ├── app.js
│   │   ├── components
│   │   │   └── Dashboard.vue
│   │   ├── router
│   │   │   └── index.js
│   │   ├── stores
