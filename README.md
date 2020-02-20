# auth_api
JWT Authentication API

This app is writen in Node.js\
- To execute the server, just run:\
```node index.js```

- With a post request to /api/login, you will get back a JSON WEB TOKEN(JWT)\
```curl -X POST http://localhost:5000/api/login```

*There is no database implementation and the payload is a mocked user.
