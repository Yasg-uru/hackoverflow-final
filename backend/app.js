import express from "express";
import cookieParser from "cookie-parser";
import legalRouter from "./router/legalrouter.js";
import userRouter from "./router/userRouter.js";
import lawyerRouter from "./router/lawyerrouter.js"
import cors from "cors"
const app=express();
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(cookieParser());

app.use("/api/legal",legalRouter);
app.use("/api/user",userRouter);
app.use("/api/lawyer",lawyerRouter)


export default app;
