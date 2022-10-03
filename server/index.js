import express from 'express';
import bodyParser from  'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

// app是一个web服务器
const app = express();

//app.use()注册全局中间件
app.use(cors());
app.use('/posts',postRoutes);
app.use(bodyParser.json({ limit: "30mb",extended:true}));
app.use(bodyParser.urlencoded({ limit: "30mb",extended:true}));



const CONNECTION_URL = 'mongodb+srv://zlyx:zlyx123@cluster0.mwpxezt.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{ useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=> app.listen(PORT,() => console.log(`Server running on port:${PORT}`)))
    .catch((error) => console.log(error.message));
   
 