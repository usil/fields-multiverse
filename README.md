# Fields Multiverse

A simple platform to register all your fields and its equivalences across all your systems multiverse .

## Use case

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

## Requirements

- Nodejs ≥ 16
- Mysql database 5.7
    - If you are pro and you use linux or mac, you could use this docker snippet https://gist.github.com/jrichardsz/73142c5c7eb7136d80b165e75d3a1e22
    - If you are a noob and you use windows, check this https://gist.github.com/jrichardsz/d4fce9b45ca5ac27921610b11221965b


## Environment variables (Settings)

| name                  | description | value(Sample) |
|:--------------------- |:----------- |:------------- |
| NODE_ENV             | Type of environment where the application is running|   |
| FIELDS_MULTIVERSE_HOST      | The application host      | 0.0.0.0                     |
| FIELDS_MULTIVERSE_PORT             | The application port | 1337  |
| FIELDS_MULTIVERSE_JWT_SECRET         | Secret used to encode JWT tokens | changeme :warning:  |
| FIELDS_MULTIVERSE_API_TOKEN_SALT           | Salt used to generate API tokens | changeme :warning:  |
| FIELDS_MULTIVERSE_APP_KEYS             | Identifier of server | changeme1,changeme2 |
| FIELDS_MULTIVERSE_DATABASE_CLIENT           | Type of database | mysql |
| FIELDS_MULTIVERSE_DATABASE_HOST             | Database host | 0.0.0.0  |
| FIELDS_MULTIVERSE_DATABASE_PORT             | Database port | 3306 |
| FIELDS_MULTIVERSE_DATABASE_NAME             | Database name |  fields_multiverse_db  |
| FIELDS_MULTIVERSE_DATABASE_USERNAME         | Database username | root |
| FIELDS_MULTIVERSE_DATABASE_PASSWORD         | Database password | changeme :warning:  |
| FIELDS_MULTIVERSE_DATABASE_SSL             | For SSL database connection | false  |

## Local demo with docker

- create .env file and copy content of https://github.com/usil/fields-multiverse/wiki/Env-variables-Generic

```
export $(cat .env | xargs)
docker compose up -d --build
```

> For production environments, use some mysql service like AWS RDS. Don't use mysql with docker.

In your favourite browser, go to http:localhost:1337 . You will be prompted with the admin user creation. Choose some password and that's all

## Create fields

Follow this to create gender fields (sample): https://github.com/usil/fields-multiverse/wiki/Hello-world-sample-:-Gender-field

## Create token

All the endpoints require a token in form of Authorization header

| header key | header value | description |
|------------|--------------|-------------|
| Authorization  | Bearer AKfycbyF7II | security token with 3600 ml of duration|

To create a token, follow these steps

- Enter strapi system
- Click Settings module
- Click on Global Settings - API Tokens
- Click on Create new API Token.
- After following these steps, the system will show you a token which you must save and send as Authorization header in your endpoints.

For more detailed explanation check:

- [Guideline](https://github.com/usil/fields-multiverse/wiki/Security-:-Create-client-token)
- [video tutorial](https://youtu.be/dVQKqZYWyv4?t=26)

## Http Endpoints

|name|endpoint|description|
|:--|:--|:--|
|Get the equivalences of one field|`/api/equivalences-v1?filters[base_field_name][$eq]=gender&filters[base_field_value][$eq]=male`|More details [here](https://github.com/usil/fields-multiverse/wiki/Api-Endpoint-%E2%80%90-Get-one-field-Equivalence)|
|Get all the equivalences between 2 systems. |`/api/equivalence-v1-complex/query1?source_system=system_2&target_system=system_1`|More details [here](https://github.com/usil/fields-multiverse/wiki/Api-Endpoint-%E2%80%90-Get-all-the-equivalences)|

For advanced queries, check

- https://docs.strapi.io/dev-docs/api/rest
- https://docs.strapi.io/dev-docs/api/rest/filters-locale-publication


## Customization

This repository only supports 10 systems. If you want to add more systems you will need to start it in developer mode, add your new fields, rebuild, etc and save the changes in your git repository

To start the development mode easily, you could use docker. Only add this volume to the **fields-multiverse-core** service

```
volumes:
    - ./:/opt/app  
```

and set the **NODE_ENV** variable to **production**


## Roadmap

-  Equivalences v2: New design to grow with rows instead of growing at the column level

## Contributors

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
