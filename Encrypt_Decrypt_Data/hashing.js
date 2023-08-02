/**
 * Hashing is the technique to convert text(i.e. password) into non readable format.This transformation
 * is done using a hash function and generated value is called hash value.
 *
 * Encryption vs Hashing.
 * Encryption also refers to formatting the text to cipher text.However, a encrypted text may be converted
 * to plain text while that is not the case with hashing.
 *
 * bcrypt : It is important to salt and hash users’ passwords before storing them for data safety intents.
 * Bcrypt turns a simple password into fixed-length characters called a hash. Before hashing a password,
 * bcrypt applies a salt — a unique random string that makes the hash unpredictable.
 *
 * every time we give the same text, it will generate different hash for the same text.
 */

const bcrypt = require("bcrypt");

const password = "Password1";

// defining a asynchronous function that will generate and print the hash value.
const encrypt = async (password) => {
  // .hash() takes in parameter '10' that signifies the number of rounds (i.e. 2^10) to perform hashing.
  const hash = await bcrypt.hash(password, 10);
  console.log({ password, hash });

  // compare() is used to compare the text and hash value generated.
  const isMatch = await bcrypt.compare("password1", hash);
  if (isMatch) {
    console.log("You can login...");
  } else {
    console.log("Please  check you password...");
  }
};

encrypt(password);
