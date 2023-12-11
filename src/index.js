import connectDB from "./db/index.js";
import { app } from "./app.js";
const port = 3003;
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`App is Running at: ${port}`);
    });
}).catch((error) => {
    console.log(`Error While Connecting to Server: ${error}`);
})