/**
 * Write a Node.js program that encrypts a string using the AES-256-CBC encryption algorithm and then
 * decrypts it back to its original form.
 */

// importing the 'crypto' module.
const crypto = require("crypto");

// defining the random encryption key.
const ENCRYPTION_KEY = "bf3c199c2470cb477d907b1e0917c17b";
// defining random initialization vector.
const vector = "5183666c72eec9e4";

// encrypts a value using the AES-256-CBC algorithm.
const encrypt = (data) => {
  // create a cipher object using the specified algorithm, encryption key, and initialization vector
  const cipher = crypto.createCipheriv("aes-256-cbc", ENCRYPTION_KEY, vector);

  // update the cipher with the input value in UTF-8 encoding and return the encrypted data in base64 format.
  let encrypted = cipher.update(data, "utf8", "base64");

  // terminate encryption process and return the remaining encrypted data in base64 format.
  encrypted += cipher.final("base64");

  // return the encrypted data.
  return encrypted;
};

// decrypts encrypted value using the AES-256-CBC algorithm.
const decrypt = (encrypted) => {
  // create a decipher object using the specified algorithm, encryption key, and initialization vector.
  const decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    ENCRYPTION_KEY,
    vector
  );

  // update the decipher with the encrypted data in base64 format and return the decrypted value in UTF-8 encoding.
  let decrypted = decipher.update(encrypted, "base64", "utf8");

  // terminate decryption process and return the remaining decrypted value in UTF-8 encoding.
  decrypted += decipher.final("utf8");

  // return the decrypted value.
  return decrypted;
};

/// defining data to be encrypted, calling functions  to encrypt and decrypt data.
const data = "This is a text to be encrypted!!";
const Encrypted_Data = encrypt(data);
const Original_Data = decrypt(Encrypted_Data);

console.log("Original Phrase:", data);
console.log("Encrypted Key:", Encrypted_Data);
console.log("Original Phrase:", Original_Data);
