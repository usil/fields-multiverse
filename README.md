# Strapi Mysql Starter

Just a 2022 template ready to use with:

- strapi V4
- mysql


# Requirements
- Nodejs ≥ 14
- Mysql database. You could use this docker snippet https://gist.github.com/jrichardsz/73142c5c7eb7136d80b165e75d3a1e22

# Start strapi

- Create a database inside mysql instance with name is "equivalences_manager"
- Export or configure this environment variables

```sh
export HOST=0.0.0.0
export PORT=1337
export APP_KEYS="toBeModified1,toBeModified2"
export API_TOKEN_SALT=tobemodified
export ADMIN_JWT_SECRET=tobemodified
export JWT_SECRET=tobemodified
```

> Configure this variables in heroku web panel

- Excute:

```sh
npm install
npm run start
```

> For more rest points, more detail on the wiki