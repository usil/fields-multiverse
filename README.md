# Fields Multiverse 

A simple platform to register all your fields and its equivalences across all your systems multiverse .

# Use case

Let's say we have 3 big and important systems (inside or outside) our company, each one has its own way and style of fields, attributes, codes, etc and we need to integrate them

Example: Paypal, Payoneer and Google Pay

These systems have their own way to save their customer **gender** information.

Example:

|System | Field | Values|
|:-- |:-- |:--|
|Paypal | sex | M - male<br>F - female |
|Payoneer | gender_identity | 0 - male<br>1 - female |
|Google Pay | gender_class | MA - male<br>FE - female |

What would happen if you tried to integrate these three systems?

If you don't know how each system stores your customer information, you'd have problems. But that's why **fields-multiverse**  was created :heart:

# Requirements

- Nodejs ≥ 16
- Mysql database. You could use this docker snippet https://gist.github.com/jrichardsz/73142c5c7eb7136d80b165e75d3a1e22

Based on [strapi](https://strapi.io) 2023 version

# Start with docker

- create .env file and copy content of .env.example and put values

```
source .env
docker-compose up --build
```

# Start without Docker

- Create a database inside mysql instance with name is "fields-multiverse"
- Export or configure this environment variables

```sh
export HOST=0.0.0.0
export PORT=1337
export ADMIN_JWT_SECRET="changeme"
export API_TOKEN_SALT="changeme"
export APP_KEYS="toBeModified1,toBeModified2"
export NODE_ENV="development"
export DATABASE_CLIENT="mysql"
export DATABASE_HOST="localhost"
export DATABASE_PORT=3306
export DATABASE_NAME="fields-multiverse"
export DATABASE_USERNAME="changeme"
export DATABASE_PASSWORD="changeme"
export DATABASE_SSL=false
```


- Excute:

```sh
npm install
npm run start
```

# Environment variables or settings

| name                  | Description | Default Value |
| --------------------- | ----------- | ------------- |
| HOST      | The application host      | 0.0.0.0                     |
| PORT             | The application port | 1337  |
| ADMIN_JWT_SECRET         | Secret used to encode JWT tokens | admin-jwt-default  |
| API_TOKEN_SALT           | Salt used to generate API tokens | api-token-salt-default  |
| APP_KEYS             | Identifier of server |  |
| NODE_ENV             | Type of environment where the application is running|   |
| DATABASE_CLIENT           | Type of database |  |
| DATABASE_HOST             | Database host | 0.0.0.0  |
| DATABASE_PORT             | Database port | 3306 |
| DATABASE_NAME             | Database name |  fields-multiverse  |
| DATABASE_USERNAME         | Database username | root |
| DATABASE_PASSWORD         | Database password | 12345  |
| DATABASE_SSL             | For SSL database connection | false  |

# Equivalences v1

## Attributes

- base_attribute
- description
- system1
- system2
- system3
- system4
- system5
- system6
- system7
- system8
- system9
- system10

## Endpoints

### ***Get all the equivalences***

**Base Url** : `http://your-domain.com`

**Endpoint** : `/api/equivalences`

**Method** : `GET`

**Auth required** : Yes. Check [this](#security)

**Body required**: Not

### ***Get the equivalences of one field***

**Base Url** : `http://your-domain.com`

**Endpoint** : `/api/equivalences?filters[base_field][$eq]=gender`

**Method** : `GET`

**Auth required** : Yes. Check [this](#security)

**Body required**: Not

In this example the queried base field is **gender**.

For advanced queries, check this https://docs.strapi.io/dev-docs/api/rest/filters-locale-publication

# Security

All the endpoints require a token in form of Authorization header

| header key | header value | description |
|------------|--------------|-------------|
| Authorization  | Bearer AKfycbyF7II | security token with 3600 ml of duration|

To create a token, follow these steps

- Enter strapi system
- Click Settings module
- Click on Global Settings - API Tokens
- Click on Create new API Token.

> [video tutorial](https://youtu.be/dVQKqZYWyv4?t=26)

```
After following these steps, the system will show you a token which you must save and send as Authorization header in your endpoints.
```

# Notes

- This repository only supports 10 systems. If you want to add more systems you will need to rebuild the docker image and save the new systems to the schema json equivalence file***

# Roadmap

-  Equivalences v2: New design to grow with rows instead of growing at the column level

# Contributors

<table>
  <tbody>
    <td>
      <img src="https://avatars0.githubusercontent.com/u/3322836?s=460&v=4" width="100px;"/>
      <br />
      <label><a href="http://jrichardsz.github.io/">JRichardsz</a></label>
      <br />
    </td>  
    <td>
      <img src="https://avatars.githubusercontent.com/u/66818290?s=400&u=d2f95a7497efd7fa830cf96fc2dc01120f27f3c5&v=4" width="100px;"/>
      <br />
      <label><a href="https://github.com/iSkyNavy">Diego Ramos</a></label>
      <br />
    </td>
  </tbody>
</table>
