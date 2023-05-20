import mongoose from "mongoose";

export const conectDB = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
    dbName:"backendApi",
}).then(()=> {
    console.log('connected to MongoDB')

}).catch((error)=>{
    console.log(error)
});
};