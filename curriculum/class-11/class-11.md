Class 11: Add, update, delete from List
===

## Agenda

* Warmup
* `pg` Client module
* RESTful HTTP
* Modifying same page data

## Consolidate `pg` client

Single module for managing `postgres` connection
 
## RESTful HTTP

Routes:

1. Nouns, **no actions or verbs**
1. Use plural: `/api/students`
1. Refine the resource as parts are added: 
    * `/api/students/23`
    * `/api/students/23/classes`

### HTTP Request

1. Url
1. Method
1. Headers 
    1. (Content-Type if JSON!)
1. (Request Body if POST, PUT)

### HTTP Response

1. Headers 
    1. Status Code
    1. Content-Type for JSON!
1. Response Body

## Modifying Same Page Data

1. Call service method
1. _When complete_, modify associated array
1. Update component with list to re-render

action | result
---|---
Add | `push` into array
Update | `findIndex` and `splice` into array
Remove | `findIndex` and `splice` out of array