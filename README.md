# Equivalences manager v1

Just a 2023 template ready to use with:

- nodejs
- strapi v4
- mysql


# Requirements
- Nodejs ≥ 16
- Mysql database. You could use this docker snippet https://gist.github.com/jrichardsz/73142c5c7eb7136d80b165e75d3a1e22

# Content / Entities

## Equivalences

### Attributes
- id
- default_attribute
- description
- system1
- system2
- system3
- system4
- system5

# Start without Docker

- Create a database inside mysql instance with name is "equivalences_manager"
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
export DATABASE_NAME="equivalences_manager"
export DATABASE_USERNAME="changeme"
export DATABASE_PASSWORD="changeme"
export DATABASE_SSL=false
```

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
| DATABASE_NAME             | Database name |  equivalences_manager  |
| DATABASE_USERNAME         | Database username | root |
| DATABASE_PASSWORD         | Database password | 12345  |
| DATABASE_SSL             | For SSL database connection | false  |




- Excute:

```sh
npm install
npm run start
```

# Start with docker

## Steps

```
- create .env file and copy content of .env.example and put values
- docker-compose up --build
```
# Use API - Steps

## **CREATE API TOKEN**
- Enter strapi system
- Click Settings module
- Click on GLOBAL SETTINGS - API Tokens
- Click on Create new API Token.

> [video tutorial](https://youtu.be/dVQKqZYWyv4?t=26)

```
After following these steps, the system will show you a token which you must save and send as Authorization in your private endpoints.
```

<hr>

## Equivalences - Endpoints

<hr>

## ***Get list of equivalences***

**Base Url** : `http://acme.com`

**Endpoint** : `/api/equivalences/`

**Method** : `GET`

**Auth required** : Yes

| header key | header value | description |
|------------|--------------|-------------|
| Authorization  | Bearer AKfycbyF7II | security token with 3600 ml of duration|

***note: you can added filter or other helpers to this endpoint [doc](https://docs.strapi.io/dev-docs/api/rest/filters-locale-publication) .***

<br>

**If you added filter you need added params in your endpoint.**

| query param | query param value | description |
|------------|--------------|-------------|
| filters[changeme1][$eq]  | changeme2 | with this query param you can filter the result. "changeme1" should change for a equivalence attribute that you want filter, and "changeme2" should change for attribute value  |

<br>
<hr>


## ***Create equivalences***

**Base Url** : `http://acme.com`

**Endpoint** : `/api/equivalences/`

**Method** : `POST`

**Auth required** : Yes

| header key | header value | description |
|------------|--------------|-------------|
| Authorization  | Bearer AKfycbyF7II | security token with 3600 ml of duration|

**Request**

**type: body**

```json
{
    "default_attribute": "name",
    "description": "this is a new attribute",
    "system1": "unique_name",
    "system2": "name",
    "system3": "nombre",
    "system4": "attr_name",
    "system5": "system5_name"

}
```

<br>

# Use cases

Let's say we have 3 big and important systems and each one has its own way and style of declaring its variables.

Take **YAPE, PLIN and BCP for example.**

These systems have their own way of storing their customer information.

For example to save the identity document of the clients

***YAPE*** save as **document**

***PLIN*** save as **id_document**

***BCP*** save as **id_number**

What would happen if you tried to integrate these three systems?

If you don't know how each system stores your customer information, you'd have problems. But that's why **equivalences_manager** :bowtie: was created.

## If you need to send information between systems and need to save its equivalencies, this repository is for you :smile: .

***note: this repository only supports 5 systems, if you want to add more systems you will need to rebuild the docker image and save the new systems to the schema json equivalence file***

# Roadmap

**Equivalences manager v2**

-  entities / tables more normalized.

