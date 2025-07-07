const {MongoClient}=require('mongodb');

const URI="";

const client=new MongoClient(URL);

const dbName="NamasteNode";

async function main(){
    await client.connect();
    console.log("Connected to db");
    const db=client.db();
    const collection=db.collection('users');

    return 'done';
}

main()
 .then(console.log)
 .catch(console.log)
 .finally(()=> client.close());