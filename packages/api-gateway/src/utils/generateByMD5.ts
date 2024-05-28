const crypto = require('crypto');

// Generate a random string
const randomStringOne = crypto.randomBytes(16).toString('hex');
const randomStringTwo = crypto.randomBytes(16).toString('hex');

// Create MD5 hashes
const secretKeyOne = crypto.createHash('md5').update(randomStringOne).digest('hex');
const secretKeyTwo = crypto.createHash('md5').update(randomStringTwo).digest('hex');

console.log(`COOKIE_SECRET_KEY_ONE=${secretKeyOne}`);
console.log(`COOKIE_SECRET_KEY_TWO=${secretKeyTwo}`);
