import { connectDB } from "@/util/database";
import styles from './page.module.css'
import { ObjectId } from "mongodb";

export default async function Edit(props){
   const client = await connectDB;
   const db = client.db('shop')
   let result = await db.collection('post').findOne({_id: new ObjectId(props.params.id)});
   

   return(
      <div className={styles.writeWrap}>
         <h4>수정페이지</h4>
         <form action="/api/post/edit" method='POST'>
            <input type="hidden" name='_id' value={props.params.id} />
            <input type="hidden" name='createdAt' value={result.createdAt} />
            <input type="text" name='title' defaultValue={result.title}/>
            <textarea type="text" name='content' cols={30} rows={10} defaultValue={result.content}/>
            
            <button type='submit'>버튼</button>
         </form>
      </div>
   )
}