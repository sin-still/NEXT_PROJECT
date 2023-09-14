import React from 'react';
import styles from './page.module.css'

const Write = () => {
   return (
      <div className={styles.writeWrap}>
         <h4>글작성</h4>
         <form action="api/post/new" method='POST'>
            <input type="text" name='title' placeholder='글제목'/>
            <textarea type="text" name='content' cols={30} rows={10} placeholder='글내용'/>
            
            <button type='submit'>버튼</button>
         </form>
      </div>
   );
};

export default Write;