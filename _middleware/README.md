### Middleware

Middleware functions are functions that have access to the **request** object(req), the **response** object(res) and the **next** middleware function in the applications request-response cycle.

Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.

If the current middleware function does not end the request-response cycle, it must call **next()** to pass control to the next middleware function. Otherwise, the request will be left hanging.

An Express application can use the following types of middleware:

- Application-level middleware : middleware is applied on application level.
- Router-level middleware : middleware is applied to a single route, group of route or all routes.
- Error-handling middleware : middleware is applied to handle errors.
- Built-in middleware : middleware that are already available. (i.e. express.json)
- Third-party middleware : i.e. cookie-parser

### Headers

HTTP Headers are an important part of the API request and response as they represent the metadata associated with the API request-response.

Headers carry information for request and response body.
