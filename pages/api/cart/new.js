import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res){
    if(req.method=='POST'){
        let session=await getServerSession(req, res, authOptions )
        req.body=JSON.parse(req.body)
        let dbs={
            description: req.body.description,
            image: req.body.image,
            price: req.body.price,
            count:  req.body.count,
            author: session.user.email
        }
        const client= await connectDB
        const db=client.db("shop")
        let result=await db.collection('cart').insertOne( dbs);
        //console.log(result)
       
        res.redirect(302, '/cart')
    }
    
}