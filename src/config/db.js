import mongoose from "mongoose";
import { env } from "./environment.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(env.DATABASE_URI)
        console.log('Kết nối CSDL thành công')
    } catch (error) {
        console.error('Kết nối CSDL thất bại')
        process.exit(1)
    }
}
