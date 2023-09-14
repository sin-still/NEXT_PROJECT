import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import styles from "./notice_detail.module.css"
import Comment from "./Comment"


export default async function Detail(props){
    try {
        const client = await connectDB;
        const db = client.db("shop");

        // 여기에 디버깅 코드를 추가합니다.
        try {
            const objectId = new ObjectId(props.params.id);
            console.log('asd: ',objectId);
        } catch (error) {
            console.error("ObjectId 생성 중 오류 발생:", error);
        }

        let result = await db.collection('post').findOne({_id: new ObjectId(props.params.id)});
        console.log("props.params.id:", props.params.id);
        const id = "6502792babef39a3926c2170";
if (/^[0-9a-fA-F]{24}$/.test(id)) {
  console.log("올바른 ObjectId 형식입니다.");
  // 다음 단계로 진행
} else {
  console.error("올바르지 않은 ObjectId 형식입니다.");
  // 처리할 방법을 결정하세요.
}
console.log("result:", result);
        return(
            <div className={styles.detail}>
                <h3>NOTICEPage</h3>
                <div className={styles.detailWrap}>
                    <div className={styles.text}>
                        <h4  className={styles.title}>제목 : {result.title} </h4>
                        <p className={styles.content}>{result.content}</p>
                    </div>
                </div>
                <Comment _id={result._id.toString()}/>
            </div>
        );
    } catch (error) {
        console.error("오류 발생:", error);
        return <div>오류가 발생했습니다.</div>;
    }
}