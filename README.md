# API_ignite

### Init project with typescript

```powershell
    yarn init -y
    yarn add express
    yarn add @types/express -D
    yarn add typescript -D
    yarn tsc --init
```

#### It restarts target node process when any of required files changes

```powershell
    yarn add ts-node-dev -D
```

### Add in package.json

```json
  "scripts": {
  "dev": "ts-node-dev --transpile-only --ignore-watch node_modules --respawn src/server.ts"
  },
```

### Add uuid

```powershell
    yarn add uuid
    yarn add @types/uuid -D
```

### Add multer manager files

```powershell
    yarn add multer
    yarn add @types/multer -D
```

```powershell
    yarn add csv-parse
```

### Add swagger

```powershell
    yarn add swagger-ui-express
    yarn add @types/swagger-ui-express -D
```
