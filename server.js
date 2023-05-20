import { app } from "./app.js";
import { conectDB } from "./data/database.js";

conectDB();

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port:${process.env.PORT} in ${process.env.NODE_ENV} mode !`);
});