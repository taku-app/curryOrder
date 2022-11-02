const MongoClient = require('mongodb').MongoClient;
// mongodb+srv://Takuya:<password>@assessment3.vndiqkx.mongodb.net/test

const DB_NAME = `test`;
const USER_NAME = `Takuya`;
const USER_PASSWD = `hogehoge`;
const HOST_NAME = `assessment3.vndiqkx.mongodb.net`; //クラスター名やホスティング先によって変わる

const uri = `mongodb+srv://${USER_NAME}:${USER_PASSWD}@${HOST_NAME}/${DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
client.connect(err => {
  // const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  const collection = client.db('mydata').collection('users');
  const documents = [
    { name: "taro" },
    { name: "jiro" },
    { name: "hanako" },
    { name: "motoko" }
  ];
//   collection.updateOne(
//     {name: 'taro'},
//     {$set: {name: '花子さん'} },
//     (err, result) => {
//       console.log("maybeSuccess");
//       console.log(result);
//       console.log(err);
//     }
// );
  collection.insertMany(documents, (err, result) => {
    console.log('Inserted 4 documents into the collection');
    console.log(result);
  if (err){console.log(err)};
  console.log("Connected successfully to server");
  client.close();
  })

});