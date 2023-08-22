// creating a middleware function - application middleware and exporting it.
module.exports = reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please provide age..");
  } else if (req.query.age <= 18) {
    // if age in url is below 18, not able to access site.
    res.send("You are not  eligible for this site..");
  } else {
    next();
  }
};
