// import { MongoClient } from 'mongodb';

export default async function getDb() {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client.db('owenwelsh');     
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
