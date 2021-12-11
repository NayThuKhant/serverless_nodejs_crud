# serverless_nodejs_crud

update .env related files, db credentials in knexfile.js and application env in serverless.yml

Run Migration
```console
npx knex migrate:latest
```

Local testing
```console
npm install -g serverless-offline
sls offline
```

Deployment
```console
sls deploy
```
