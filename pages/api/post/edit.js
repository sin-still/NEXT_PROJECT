import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req,res){
   
   if(req.method == 'POST'){
      const client = await connectDB;
      const db = client.db('shop')
      const currentDate = new Date();
      /* const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, "0")}-${currentDate.getDate().toString().padStart(2, "0")}`; */
      const reBody = {
         title: req.body.title,
         content: req.body.content,
         createdAt:req.body.createdAt
      }
      let result = await db.collection('post').updateOne(
         { _id: new ObjectId(req.body._id) },
         { $set: reBody }

      )
      if (result.modifiedCount === 1) {
         console.log('문서가 성공적으로 업데이트되었습니다.');
      } else {
         console.log('문서를 업데이트하지 못했습니다.');
      }
   
      res.redirect(302, '/notice');
   }
}