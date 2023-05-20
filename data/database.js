import mongoose from "mongoose";

export const conectDB = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
    dbName:"backendApi",
}).then((c)=> {
    console.log(`connected to MongoDB with ${c.connection.host}`)

}).catch((error)=>{
    console.log(error)
});
};