const EC = require('elliptic').ec;
const SHA256 = require('crypto-js/sha256');

const ec = new EC('secp256k1');

// TODO: fill in the public key points
const publicKey = {
  x: "c83207b7a7a6a1ada3476de3d7b7b4dcdb41a23e38343a812e0ff4028224ad2c",
  y: "324ff8f2b763dffacecbbb8cc31b2318c244069bd5fa21fa8d20849fccc2bc76"
}

const key = ec.keyFromPublic(publicKey, 'hex');

// TODO: change this message to whatever was signed
const msg = "I'm still shocked Team B won lol";
const msgHash = SHA256(msg).toString();

// TODO: fill in the signature components
const signature = {
  r: "ddf83e23ffc4a8a54d18306773dbd8e2fbd9a18fcd2dcf90f04f1e5f5991b824",
  s: "5a6f88a4d93ac9fd0ccc9dc8987daf6de2b042f2cd972cf4688d331c2a6aa206"
};

console.log(key.verify(msgHash, signature));
