# Equivalences manager

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
- paypal
- yape
# Start without Docker

- Create a database inside mysql instance with name is "equivalences_manager"
- Export or configure this environment variables

```sh
export HOST=0.0.0.0
export PORT=1337
export APP_KEYS="toBeModified1,toBeModified2"
export NODE_ENV="development"
export DATABASE_CLIENT="mysql"
export DATABASE_HOST="localhost"
export DATABASE_PORT=3306
export DATABASE_NAME="equivalences_manager"
export DATABASE_USERNAME="changeme"
export DATABASE_PASSWORD="changeme"
```

| name                  | Description | Default Value |
| --------------------- | ----------- | ------------- |
| HOST      | The application host      | 0.0.0.0                     |
| PORT             | The application port | 1337  |
| APP_KEYS             | Identifier of server |  |
| NODE_ENV             | Type of environment where the application is running|   |
| DATABASE_CLIENT             | Type of database |  |
| DATABASE_HOST             | Database host | 0.0.0.0  |
| DATABASE_PORT             | Database port | 3306 |
| DATABASE_NAME             | Database name |  equivalences_manager  |
| DATABASE_USERNAME             | Database username | root |
| DATABASE_PASSWORD             | Database password | 12345  |



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
<br>

**If you added filter you need added params in your endpoint.**

| query param | query param value | description |
|------------|--------------|-------------|
| filters[changeme1][$eq]  | changeme2 | with this query param you can filter the result. "changeme1" should change for a equivalence attribute that you want filter, and "changeme2" should change for attribute value  |

<br>
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
    "default_attribute": "id_number",
    "description": "this is a new attribute",
    "paypal": "document",
    "yape": "dni"
}
```






<br>
> For more rest points, more detail on the wiki