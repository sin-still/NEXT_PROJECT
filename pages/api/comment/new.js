import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res){
    if(req.method=='POST'){
        let session=await getServerSession(req, res, authOptions )
        
  
        req.body=JSON.parse(req.body)
        let dbs={
            content:req.body.comment,
            parent:new ObjectId(req.body._id),
            author: session.user.email
        }
        const client= await connectDB
        const db=client.db("shop")
        let result=await db.collection('comment').insertOne( dbs);
        console.log('new ObjectId(req.body._id)',new ObjectId(req.body._id))
       
        res.redirect(302, '/notice_detail/'+req.body._id)
    }
    
}