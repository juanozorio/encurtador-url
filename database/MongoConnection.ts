import mongoose from 'mongoose';
export class MongoConnection {
    public async connect(): Promise<void> {
        try (
            await mongoose.connect(config.MONGO_CONNECTION, {userNewUrlParser: true, useUnifiedTopology: true})
            console.log('Database connect')    
        } catch(err.mensage)
            process.exit(1)
        )
    }

}