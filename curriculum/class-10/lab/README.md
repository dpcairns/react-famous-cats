Lab 10: Detail View and UX Loading Feedback
===

## Lab

1. Loading state
1. Detail view page
1. STRETCH: Delete button on detail

## Project

Continue with same team and project as labs 08 and 09

## Requirements

## App

1. Manage loading state by adding a loading component that can be conditionally shown
1. New detail html page and JavaScript files for single resource
1. New get function in service API that takes the id to get
1. Link to detail page from list page with id in query (not in hash!) and redirect from add (form) page
1. STRETCH: Add a delete button to detail view
    - Use `confirm` to check the user should really wants to detail
    - Add new service api call for delete
    - Navigate back to list view after delete complete


## Server

1. Create new `GET /resource/:id` route for single resource detail
    - JOIN for lookup value, but include foreign key
    - Return 404 if resource not found in database
1. STRETCH: Create new `DELETE /resource/:id` route with SQL that removes from the database

## Deploy

Keep Heroku up-to-date

## Points Break Down

Looking For | Points (10)
:--|--:
Manage loading state | 2
Detail View Design HTML and CSS | 2
Detail GET Server Route and SQL | 2
Search Param to Specify id and Link from List Page | 2
Detail Service API Call | 2
Delete resource | +5
