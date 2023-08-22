### Routing

Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

- The most commonly used HTTP request methods are GET, POST, PUT, PATCH, and DELETE.
  - GET : read/retrieve data from a web server.
  - POST : used to send data (file, form data, etc.) to the server.
  - PUT : used to modify the data on the server.
  - DELETE :  used to delete the data on the server. 

- less frequently used HTTP methods are
  - PATCH : used to modify part of the data on server.
  - HEAD: asks for a response identical to a GET request, but without the response body.
  - OPTIONS: describes the communication options for the target resource.
  - CONNECT: establishes a network connection to a web server.
  - TRACE: echoes back the received request so that a client can see what (if any) changes or additions have been made by intermediate servers.
  - LINK : links an existing object to the specified object. 
  - UNLINK : removes link (or other meta-) information from an object.
  - COPY: used to make a copy of a resource on the server.
  - LOCK: used to lock a resource on the server to prevent other users from modifying it.
  - UNLOCK: The UNLOCK method is used to unlock a resource on the server that has previously been locked.

Route take the following definition:

**app.METHOD(PATH, HANDLER)**

- app is an instance of express.
- METHOD is an HTTP request method, in lowercase.
- PATH is a path on the server.
- HANDLER is the function executed when the route is matched.

### Versioning

![Alt text](image.png)

- ^ : indicates that 4 is locked and any updates will be within 4.... (i.e. first digit is fixed.)
- 1st Part (4) : Major Release
- 2nd Part (18) : Latest (Recommended bug Fix)
- 3rd Part (2) : Minor Fixes
- if it is ~4.18.3 : then 4.18 is fixed and only last digit will change when updated.
