

import mongoose from "mongoose";


export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://imranansari87959698:2eMPTCiMTBFWE5VI@cluster0.nstztch.mongodb.net/foodStore').then(() => console.log("DB Connected")).catch((e) =>{
        console.log('Something went wrong DB not Connected')
});
}