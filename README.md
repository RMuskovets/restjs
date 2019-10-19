# rapijs
This library is just a wrapper on Express. It helps you making REST APIs.  
## Okay, how do I use it?
Oh, that's pretty simple.
I'll include some code from `examples/01.js`.  
```js

const express = require('express');
const rapijs  = require('rapijs');
const app     = express();

let myResource = rapijs.Resource({
	read: { customUrlParams: [], cb: (req, res) => {
		res.send({
			greeting: "Hi!"
		});
	}},
	create: { customUrlParams: [], cb: () => {}}
	update: { customUrlParams: [], cb: () => {}}
	del   : { customUrlParams: [], cb: () => {}}
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', myResource);

app.listen(8080);

```
### What does this code do?
1. It loads the `express` and `rapijs` modules.
2. It creates an instance of Express app.
3. It creates a `rapijs` resource:
3.1. Read: no custom URL parameters, callback sends greeting.
3.2. Create: no custom URL parameters, callback does nothing.
3.3. Update: no custom URL parameters, callback does nothing.
3.4. Delete: no custom URL parameters, callback does nothing.
4. The app uses the JSON `middleware` provided by Express.
5. The app uses the URL encoding `middleware` too.
6. The app sets the resource to be on `/` path.
7. The app listens on `localhost:8080`.

## What is a Resource?
A resource is an object we're passing to Resource function to create a router.  
Basically, it has four methods (callbacks) to belong to CRUD:
+ Create
+ Read
+ Update
+ Delete

## How to collaborate?
Find me on [GitHub](https://github.com/RMuskovets/restjs)!  

