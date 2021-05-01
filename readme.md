<h1 style=" border-radius: 50%;"> 
 <img src="https://i.imgur.com/ElQDYkY.png" alt="Logo" height="50px" />
</h1>


Permit to register users and its settings, also manage websocket connections and messages. The app has friendly errors, validation, also a simple versioning was made.

## Table of Contents
* [Installing](#installing)
  * [Configuring](#configuring)
    * [SQLite](#sqlite)
      * [Migrations](#migrations)
    * [.env](#env)
* [Usage](#usage)
  * [Routes](#routes)
    * [Requests](#requests)
* [Running the tests](#running-the-tests)
  * [Coverage report](#coverage-report)

# Installing
Easy peasy lemon squeezy:
```
$ yarn
```
Or:
```
$ npm install
```

## Configuring
The application use just one database: [SQLite](https://www.sqlite.org/index.html).

### SQLite
Store the users, settings, messages and connections. For more information to how to setup your database see:
* [typeorm](https://typeorm.io/#/using-ormconfig)
> You can find the application's `ormconfig.js` file in the root folder.

#### Migrations
Remember to run the database migrations:
```
$ yarn ts-node-dev ./node_modules/typeorm/cli.js migration:run
```
Or:
```
$ yarn typeorm migration:run
```
> See more information on [TypeORM Migrations](https://typeorm.io/#/migrations).

### .env
In this file you may configure your Redis database connection, JWT settings, the environment, app's port and a url to documentation (this will be returned with error responses, see [error section](#error-handling)). Rename the `.env.example` in the root directory to `.env` then just update with your settings.

|key|description|default
|---|---|---
|PORT|Port number where the app will run.|`3333`


# Usage
To start up the app run:
```
$ yarn dev:server
```
Or:
```
npm run dev:server
```


## Routes
|route|HTTP Method|params|description
|:---|:---:|:---:|:---:
|`/settings/:username`|GET|`username` of the user.|Return the user's setting.
|`/settings`|POST|Body with settings data.|Create new setting.
|`/settings/:username`|PUT|`username` of the user and body with `chat` new value.|Update an user's setting.
|`/users`|POST|Body with user's `email`.|Create a new user.
|`/users/:user_id/messages`|GET|`id` of the user.|Return user's messages.
|`/messages`|POST|Body with message data.|Return user's messages.


### Requests
* `POST /settings`

Request body:
```json
{
  "username": "admin",
  "chat": true
}
```

* `PUT /settings/:username`

Request body:
```json
{
  "chat": true
}
```

* `POST /users`

Request body:
```json
{
  "title": "email@example.com"
}
```

* `POST /messages`

Request body:
```json
{
  "user_id": "d01bc88b-15cb-4478-830f-edc44577d707", //uuid
  "admin_id": null,
  "text": "Lorem ipsum doolor sit amet"
}
```
