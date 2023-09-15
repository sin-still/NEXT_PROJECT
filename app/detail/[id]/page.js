
import { ObjectId } from 'mongodb';
import styles from './page.module.css'
import { connectDB } from '@/util/database'
import Wish from "@/components/Wish";
import Cart from '@/components/Cart';





export default async function Detail(props){
   const client = await connectDB;
   const db = client.db('shop')
   let result = await db.collection('new').findOne({_id: new ObjectId(props.params.id)});
   const colors = Array.isArray(result.color) ? result.color : [result.color];

  
/*    console.log(result) */
console.log(result.color)
   return (
      <div className={styles.detail}>
         {/* <h3 className={styles.h3}>상세페이지</h3> */}
         <div className={styles.detailWrap}>
            <div className={styles.imgWrap}>
               <img className={styles.img} src={result.image} alt="상품이미지" />
            </div>
            <div className={styles.text}>
               <div className={styles.productInfo1}>
                  <h4 className={styles.h4}>{result.title}</h4>
                  <p className={styles.description}>{result.description}</p>
                  <p className={styles.price}>{result.price}원</p>
                  <p className={styles.dilivery}><span>배송비</span> 1만원이상 무료배송(사이즈교환1회무료)</p>
                  <p className={styles.card}><span className={styles.span}>카드혜택</span>{result.card}</p>
               </div>
               <div className={styles.productInfo2}>
                  <div className={styles.color}>
                     <span className={styles.span}>색상</span>
                     <div className={styles.colorList}>
                        {
                           colors.map((item, i)=>{
                              const inlineStyle = {
                                 background: item,
                               };
                               
                              return(
                                 <div className={`${styles.colorBox}`} style={inlineStyle}></div>
                              )
                           })
                        }

                     </div>
                     {/* <input type="text" /></p> */}
                  </div>
                  <div className={styles.size}><span className={styles.span}>사이즈</span>
                  <div className={`${styles.sizeBox} ${styles.sizeBox1}`}>free</div>
                  {/* <input type="text" /> */}
                  </div>

               </div>
               <div className={styles.productInfo3}>
               <Wish result={result}/>
                  {/* <button className={`${styles.btnStyle} ${styles.cart}`}>장바구니</button>
                  <button className={`${styles.btnStyle} ${styles.buy}`}>결제하기</button> */}
                  <Cart result = { result }></Cart>
               </div>
            </div>
         </div>
         <div className={styles.detailWrapY}>
            <img src={result.subImg} alt="" />
         </div>

      </div>
   )
}