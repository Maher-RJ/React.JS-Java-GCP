# Introduction
This document outlines the software solution provided for the following problem statement:

The goal is to retrieve data from Google Cloud Storage (GCS) and display it in a table. The table should have the following columns: id, name, status, description, delta, and createdOn. It should also have the following features: free text search by name, filtering by status value, pagination with 20 entries per page, and the ability to sort rows by id, name, and createdOn.

To achieve this, the backend system will make API calls to GCS and handle any necessary data manipulation. The frontend will then make REST API calls to the backend to retrieve the transformed data, which will be displayed in the table. Caching the data in the backend is not a requirement.

Overall, this software solution aims to provide an easy-to-use interface for accessing and interacting with data stored in GCS.

# Solution
This software solution was designed to retrieve JSON data from Google Cloud Storage (GCS) and apply searching and pagination in order to display it in the frontend application. In order to simplify and optimize the process, the GCS location was treated as an HTTP location and the data was read over HTTPS.

Several technologies were utilized in the development of this solution, including Java and Spring Boot for the web server, Spring Data Commons for pagination, Google Guava, Jackson Databind, and React with Redux and Axios for the frontend.

Overall, this solution aims to provide a efficient and effective means of accessing and interacting with data stored in GCS, while leveraging a range of modern technologies to facilitate the process.

# Solution Architecture
This software solution was developed with the following design principles in mind, which aim to improve code quality and handle design complexity effectively:

Single Responsibility Principle (SRP) </br>
Open/Closed Principle (OCP)</br>
Liskov Substitution Principle (LSP)</br>
Interface Segregation Principle (ISP)</br>
Dependency Inversion Principle (DIP)</br>
</br>
The application contains a GET endpoint that is capable of returning data from Google Cloud Storage (GCS). This endpoint accepts three different request parameters to manipulate the data: name, status, and page. Users can perform free text searches by entity name and filter results by status. The endpoint also provides pagination capabilities to allow for effective data display on the frontend.

The solution was designed as follows:
![Picture11](https://user-images.githubusercontent.com/57875037/139597452-b07b7327-9857-4182-81a1-8eaa7d89946f.png)

## Data Controller
Data controller is responsible for exposing API to the user. There is a single API as of now which will accept name as key parameter to free text search, status as filtering parameter and page as pagination parameter. if user does not pass the searching parameter or filtering parameter and its values, API will be returning entire dataset with 20 elements per page.

http://localhost:8080/data/search?name=a
http://localhost:8080/data/search?name=a&status=COMPLETED
http://localhost:8080/data/search?name=a&status=COMPLETED&page=1

## Data Service
Data Service is responsible for retrieving data from google cloud storage and perform the searching and filtering operations. Data service is being used pure http connections in order to read the file from GCS bucket which will avoid the complex implementations.

## Pagination Service
Java does not accept JSON files as a data source, which means that Java Persistence API (JPA) cannot be used for pagination. As a result, a native pagination algorithm was implemented using the pageable component provided by Java. This algorithm splits the JSON list into multiple pages and returns the specified page.

The pagination parameters, such as the number of elements per page, can be customized. The Util class includes a page size parameter that allows developers to change the page size as needed. This implementation is similar to how pagination is implemented in JPA and other pagination methods. Overall, the pagination service aims to provide an efficient means of navigating large datasets stored in GCS.

# Operations

Get Data Search by Name (free text search)
![Picture12](https://user-images.githubusercontent.com/57875037/139597496-8013d7fa-1cb6-457f-8847-3a5ad94edd0f.png)

Get Data Filter By Status
![Picture13](https://user-images.githubusercontent.com/57875037/139597514-09aa18e1-d60f-44d3-b584-5a94bac1654e.png)

Get Data Switch Page
![Picture14](https://user-images.githubusercontent.com/57875037/139597581-67a70630-b874-43f5-b1ab-2a472851197e.png)

Get Data by Name, Status and Page
![Picture15](https://user-images.githubusercontent.com/57875037/139597628-f72b93c3-9dfd-4201-8c2e-321e97ed37c7.png)

Get All Data
![Picture16](https://user-images.githubusercontent.com/57875037/139597684-846b2d5a-f240-4a7b-824d-04b017575fda.png)

As above screenshots depict, even though parameters are not passing to the API, it will be returning all the dataset in several pages.

All the possible exceptions were handled with try catch statements which will help to keep the application up and running all the time even though exception occurred. It increases the stability and availability of the system. 


# Flow Diagram
Application flow as below,
![Picture17](https://user-images.githubusercontent.com/57875037/139597702-4cd3b4ee-9766-4c24-9ccf-a99ad28849a4.png)
