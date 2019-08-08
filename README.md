# Gateways REST API

General description
---
This project use clean arquitecture and apply 
some patterns such as:
- Repository
- Dependency Injection

Project Structure
---
- Components
	-  Express handlers (Factories, Middlewares and routes)
- Controllers
	- Converts the request data into a model and passes it to the use case.
- Models
	- Domain model objects such as Entities
- Remote_models
	- Mongodb related models and schemas
- Repositories
	- Data access objects interfaces (It would be better using Typescript)
- Repositories_interfaces
	- Repository implementations in this case using Mongodb as external data provider (No interface pattern in JS)
- Routes
	- All routes are imported here.
- use_cases
	- Application business rules 		

Prerequisites
---
- Node.js
- npm
- MongoDB installed locally or through a cloud service like MongoDb Atlas

Instructions
---
1. Clone project: 
	git clone https://github.com/denmasoft/hapi_rest_api.git
2. cd hapi_rest_api
3. npm install
4. Specify your mongodb connection string in config.js file.
5. npm start 
6. Install and open Postman, import json file "Gateway Api.postman_collection.json" which is in the root directory of the project

Automated Build
---
Deploy to heroku from github.