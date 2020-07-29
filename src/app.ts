import * as express from "express";
import { UserController } from "./controllers/userController";
import * as mongoose from "mongoose";

const host = "mongo";

class App {

    public app: express.Application;
    public userRoute: UserController = new UserController();
    public mongoUrl: string = `mongodb://${host}:27017/user`;
    
    constructor() {
        this.app = express();
        this.config();        
        this.userRoute.routes(this.app);
        this.mongoSetup();   
    }

    private config(): void{
        this.app.use(express.json());
    }

    private mongoSetup(): void{
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
        mongoose.connection.once('open', () => {
            console.info('Connected to Mongo via Mongoose');
        });
        mongoose.connection.on('error', (err) => {
            console.error('Unable to connect to Mongo via Mongoose', err);
        });    
    }
}

export default new App().app;