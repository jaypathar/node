# Passport

Passport's sole purpose is to authenticate requests, which it does through an
extensible set of plugins known as **_strategies_**. Passport does not mount
routes or assume any particular database schema, which maximizes flexibility and
allows application-level decisions to be made by the developer. The API is
simple: you provide Passport a request to authenticate, and Passport provides
hooks for controlling what occurs when authentication succeeds or fails.

#### Strategies

Passport uses the concept of strategies to authenticate requests. Strategies
can range from verifying username and password credentials, delegated
authentication using **OAuth** (for example, via **Facebook**
or **Twitter**), or federated authentication using **OpenID**.

Before authenticating requests, the strategy (or strategies) used by an application must be configured.

```javascript
// local strategy configuration.
passport.use(
  // this async function will fetch the username and password on click of 'submit'.
  new LocalStrategy(async (username, password, done) => {
    console.log(username, password);
    try {
      // connect to the database.
      const db = await connectToDatabase();
      // find the user with the given username.
      const user = await db.collection("users").findOne({ name: username });

      if (!user) {
        // if the user is not found, return an error message.
        return done(null, false, { message: "User not found" });
      }

      if (user.password !== password) {
        // if the password is incorrect, return an error message.
        return done(null, false, { message: "Incorrect password" });
      }
      // if the user is found and the password is correct, return the user object.
      return done(null, user);
    } catch (error) {
      // return an error message if any.
      return done(error);
    }
  })
);
```

#### Authenticate Requests

Passport provides an `authenticate()` function, which is used as route
middleware to authenticate requests.

```javascript
// modified login route to use passport.authenticate.
app.post(
  "/login",
  // authenticate the user's login credentials using the local strategy.
  passport.authenticate("local", { failureRedirect: "/", session: false }),
  (req, res) => {
    // authentication successful, render home page.
    res.render("home");
  }
);
```
