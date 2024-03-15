import mongoose from "mongoose";
const connectdatabase=async function (){
    try {
        const reponse=mongoose.connect(`mongodb://127.0.0.1:27017/hackoverflow2`);
        console.log(`database is connected with :${(await reponse).connection.host}`)
    } catch (error) {
        console.log(`error is occured in connection :${error}`)
    }
}
export default connectdatabase;