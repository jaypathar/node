// requiring module
const dbConnect = require("./mongodb_connection");

const deleteData = async () => {
  let data = await dbConnect();
  // deleteOne() and deleteMany() are query function in mongodb - take in condition as parameter.
  let result = await data.deleteOne({ name: "note-5" });
  // if you are trying to delete a record that does not exits it will return result.acknowledge:true and
  // result.deletedCount:0
  if (result.acknowledged) {
    console.log("Data Deleted...");
    // console.log(result.deletedCount) => 0
  }
};

// function call..
deleteData();
