const EC = require('elliptic').ec;
const SHA256 = require('crypto-js/sha256');

const ec = new EC('secp256k1');

// TODO: fill in your hex private key
const privateKey = "c0f97e7884a918040d6a8381fb37dbd88c7dc5fc439805d33912b2040687c764";

const key = ec.keyFromPrivate(privateKey);

// TODO: change this message to whatever you would like to sign
const message = "Cryptography will make your head spin";

const msgHash = SHA256(message);

const signature = key.sign(msgHash.toString());

console.log({
  message,
  signature: {
    r: signature.r.toString(16),
    s: signature.s.toString(16)
  }
});
