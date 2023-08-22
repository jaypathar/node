// requiring the exported function for connection.
const dbConnect = require("./mongodb_connection");

// there are two methods to handle promises - method 1
// dbConnect().then((data) => {
//   data
//     .find({ type: "tv" })
//     .toArray()
//     .then((data) => {
//       console.log(data);
//     });
// });

// method 2
const main = async () => {
  let data = await dbConnect();
  data = await data.find({}).toArray();
  console.log(data);
};

main();
