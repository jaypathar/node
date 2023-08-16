// requiring function from module.
const dbConnect = require("./mongodb_connection");

const update = async () => {
  let data = await dbConnect();
  // updateOne() and updateMay() are query function in mongodb.
  // update function takes in to object - 1st - condition(i.e. where), 2nd - the property to update.
  let result = await data.updateOne(
    { brand: "oneplus" },
    { $set: { price: 650 } }
  );
  // the result will have attributes like acknowledged and insertID.
  if (result.acknowledged) {
    console.log("Data updated successfully...");
  }
};

// function call..
update();
