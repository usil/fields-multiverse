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

- create .env file and copy content of https://github.com/usil/fields-multiverse/wiki/Linux-env-variables

```
source .env
docker-compose up --build
```

# Start without Docker

- Create a database inside mysql instance with name is "fields_multiverse"
- create .env file and copy content of https://github.com/usil/fields-multiverse/wiki/Linux-env-variables

- Excute:

```sh
source .env
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

### ***Get the equivalences of one field - option 1***

**Base Url** : `http://your-domain.com`

**Endpoint** : `/api/equivalences-v1?filters[base_field_name][$eq]=gender&filters[base_field_value][$eq]=male`

**Method** : `GET`

**Auth required** : Yes. Check [this](#security)

**Body required**: Not

In this example we are getting the equivalences of field called **gender** with value **male**

| key                  | Value | Explanation |
|:--------------------- | ----------- | ------------- |
| filters[base_field_name][$eq]     | gender      | base_field_name equal "gender" |
| filters[base_field_value][$eq]      | male      | base_field_value equal "male" |

**Response**

```
{
    "data": [
        {
            "id": 1,
            "attributes": {
                "base_field_name": "gender",
                "base_field_value": "male",
                "description": null,
                "system1_value": "M",
                "system2_value": "0",
                "system3_value": "MA",
                "system4_value": null,
                "system5_value": null,
                "system6_value": null,
                "system7_value": null,
                "system8_value": null,
                "system9_value": null,
                "system10_value": null,
                "createdAt": "2023-07-03T01:15:52.191Z",
                "updatedAt": "2023-07-03T01:15:56.182Z",
                "publishedAt": "2023-07-03T01:15:56.171Z"
            }
        }
    ],
    "meta": {
        "pagination": {
            "page": 1,
            "pageSize": 25,
            "pageCount": 1,
            "total": 1
        }
    }
}
```

### ***Get all the equivalences***

**Base Url** : `http://your-domain.com`

**Endpoint** : `/api/equivalence-v1-complex/query1?source_system=system_2&target_system=system_1`

**Method** : `GET`

**Auth required** : Yes. Check [this](#security)

**Body required**: Not

In this example we are getting all the equivalences from **system_2** to **system_1**

| key                  | Value | Explanation |
|:--------------------- | ----------- | ------------- |
| source_system     | system_2      | system in which the fields are known |
| target_system      | system_1      | system in which fields are not known |

**Response**:

```
{
    "gender": {
        "0": "M",
        "1": "F"
    },
    "custom_code": {
        "100": "01"
    },
    "document_type": {
        "AAA": "1000",
        "BBB": "1001",
        "CCC": "1002"
    }
}
```

For advanced queries, check

- https://docs.strapi.io/dev-docs/api/rest
- https://docs.strapi.io/dev-docs/api/rest/filters-locale-publication


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

# Customization

This repository only supports 10 systems. If you want to add more systems you will need to start it in developer mode, add your new fields, rebuild, etc and save the changes in your git repository

To start the development mode easily, you could use docker. Only add this volume to the **fields-multiverse-core** service

```
volumes:
    - ./:/opt/app  
```

and set the **NODE_ENV** variable to **production**


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
