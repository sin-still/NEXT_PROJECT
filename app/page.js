import { connectDB } from '@/util/database'
import Image from 'next/image'
import styles from './page.module.css'
import MoviesSwiper from '@/components/MoviesSwiper'
import MoviesSwiper1 from '@/components/MoviesSwiper1'
import Link from 'next/link';



export default async function Home() {
  const client = await connectDB;
  const db = client.db('shop')
  let result = await db.collection('new').find().toArray();
  
  return (
    <div>
      <div className={styles.banner}>
        <MoviesSwiper />
      </div>
      <div className={styles.banner1}>
        <MoviesSwiper1 />
      </div>
      <div className="new-arrival">
        <h2>NEW ARRIVAL</h2>
        <p>월, 수, 금 오후 1시 신상 업데이트</p>
        <div className="new-wrap">
          {
            result.map((item, i)=>{
              return(
                <div className='new-card' key={item._id}>
                    <Link href={`/detail/${item._id}`} scroll={true}>
                    <img src= {item.image} alt="" />
                    <div className='card-box'>
                      <h3 className='title'>{item.title}</h3>
                      <h3 className='price'>{item.price}원</h3>
                      <h3 className='description'>{item.description}</h3>
                    </div>
                  </Link>
                  </div>

              )
            })
          }
        </div>
      </div>
    </div>
  )
}
