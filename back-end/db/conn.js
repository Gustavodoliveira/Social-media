import mongoose from 'mongoose';

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Social');
  console.log('Connect in mongoose');
}

main().catch((err) => console.log(err));

module.exports = mongoose;
