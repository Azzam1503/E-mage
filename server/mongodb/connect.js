import mongoose from 'mongoose';

const connectDb = (url) =>{
    mongoose.set('strictQuery', true);
    
    mongoose.connect(url)
    .then(()=> console.log("MongoDB connected"))
    .catch((err)=> console.log(err))
    
}

export default connectDb;