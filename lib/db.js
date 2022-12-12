import { MongoClient } from 'mongodb';


async function connectToDatabase() {
   const client = await MongoClient.connect('mongodb+srv://taehyeon123:wUaROfBb9GrnJ4ZZ@cluster0.5db4q.mongodb.net/auth-demo?retryWrites=true&w=majority');

   return client;
}



