Class 08: 
===


## Agenda

1. 


## Handling HTTP Errors

An HTTP response is still valid (not an error), even though
it has a status code that would be consider and error.

The information about the error _is_ the body of the message. (Review HTTP).

Which means for an error status code, we still need to read the body
via `response.json()`, *but then convert to error by throwing it!*