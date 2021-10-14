# awsReportTest
API that allows to store data from JSON and download those data as reports.

Requirements
python (Python 3.6 up to 3.9 supported)
pip (Python package manager)
Docker

Setup
-npm install
-npm install -g serverless


Deploy
-docker-compose up
-serverless deploy --stage local

serverless deploy
functions:
  create:
    handler: handler.handler
    events:
    - http:
        path: add
        method: post
        cors: true

  list:
    handler: handler.handler
    events:
    - http:
        path: list
        method: get
        cors: true

  downloadsxls:
    handler: handler.handler
    events:
    - http:
        path: downloadsxls
        method: get
        cors: true

    downloadspdf:
    handler: handler.handler
    events:
    - http:
        path: downloadspdf
        method: get
        cors: true      
  get:
    handler: handler.handler
    events:
    - http:
        path: read/{id}
        method: get
        cors: true

  update:
    handler: handler.handler
    events:
    - http:
        path: update/{id}
        method: put
        cors: true       

  delete:
    handler: handler.handler
    events:
    - http:
        path: delete/{id}
        method: delete
        cors: true         

servicios de localstack puertos
{
    "CloudFormation": "http://localhost:4566",
    "CloudWatch":"http://localhost:4566",
    "Lambda": "http://localhost:4566",
    "S3": "http://localhost:4566",
    "APIGateway": "http://localhost:4566",
    "Route53": "http://localhost:4566",
    "dynamodb": "http://localhost:4566"
}

Service Information por dockert-compose.yml
service: serverless-rest-api-with-dynamodb
stage: dev
region: us-east-1
endpoints:
  POST - https://http://localhost:4566/restapis/2jd0s7kjjz/local/_user_request_/add
  GET - https://http://localhost:4566/restapis/2jd0s7kjjz/local/_user_request_/list
  GET - https://http://localhost:4566/restapis/2jd0s7kjjz/local/_user_request_/downloadsxls
  GET - https://http://localhost:4566/restapis/2jd0s7kjjz/local/_user_request_/downloadspdf
  GET - https://http://localhost:4566/restapis/2jd0s7kjjz/local/_user_request_/read/{id}
  PUT - https://http://localhost:4566/restapis/2jd0s7kjjz/local/_user_request_/update/{id}
  DELETE - https://http://localhost:4566/restapis/2jd0s7kjjz/local/_user_request_/delete/{id}

![imagen](https://user-images.githubusercontent.com/41463256/137261611-eefd729b-67f1-4d15-a9dd-79b8a40d181e.png)

exel
![imagen](https://user-images.githubusercontent.com/41463256/137262041-cf44aef9-fcfb-422d-9190-42c8cdd3d71d.png)

