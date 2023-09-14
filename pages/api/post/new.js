import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
   let sesstion = await getServerSession(req, res, authOptions);
   if(sesstion){
      console.log(sesstion.user.name)

   }
  

   const currentDate = new Date();
   const formattedDate = `${currentDate.getFullYear()}-${(
      currentDate.getMonth() + 1
   )
      .toString()
      .padStart(2, "0")}-${currentDate.getDate().toString().padStart(2, "0")}`;

   const body = req.body;
   if (req.method == "POST") {
      const client = await connectDB
      const db = client.db("shop")
      let result = await db.collection("post").insertOne({
         title: body.title,
         content: body.content,
         createdAt: formattedDate,
      });
      return res.redirect(302, "/notice")
   }
}
