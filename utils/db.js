import { MongoClient } from 'mongodb';

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || 'files_manager';
    const URI = `mongodb://${host}:${port}/${database}`;

    this.client = new MongoClient(URI, { useUnifiedTopology: true });
    this.client.connect();
    this.db = this.client.db(database);
  }

  isAlive() {
    return this.client.isConnected();
  }

  async nbUsers() {
    return this.db.collection('users').countDocuments();
  }

  async nbFiles() {
    return this.db.collection('files').countDocuments();
  }

  async usersCollection() {
    return this.client.db().collection('users');
  }
}

const dbClient = new DBClient();
export default dbClient;
