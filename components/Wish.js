'use client'
// Wish 컴포넌트에서
import React, { useState } from 'react';
import styles from '@/app/detail/[id]/page.module.css';
import { AiFillHeart } from "react-icons/ai"; 

// ...

const Wish = ({ result }) => {
   const [wish, setWish] = useState(false);

   const wishHandler = () => {
      if (!wish) {
         fetch("/api/post/updatewish", {
            method: "POST",
            body: JSON.stringify({ id: result._id, newWishCount: result.wish + 1 }), // JSON.stringify를 사용하여 객체를 문자열로 변환
            headers: {
               'Content-Type': 'application/json' // 헤더 추가
            }
         })
         .then(() => {
            setWish(!wish);
         })
      }

      // 주석 처리된 부분 주석 해제
      // if (!wish) {
      //    await updateWishCount(result._id, result.wish + 1);
      // }
   }

   return (
      <button className={`${styles.btnStyle2} ${styles.wishStyle}`} onClick={wishHandler}>
         <AiFillHeart className={wish ? styles.wish : null} />
         {result.wish}
      </button>
   );
};

// ...


export default Wish;
