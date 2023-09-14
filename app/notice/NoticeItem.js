'use client'
import Link from 'next/link';
import React from 'react';


const NoticeItem = ({result}) => {
    return (
        <tbody>
            {
                result.map((item, i) => {
                    return(
                        <tr className="notice-item" key={i}>
                            <td>{i+1}</td>
                            <td><Link href={'/notice_detail/'+result[i]._id.toString()}>{result[i].title}</Link></td>
                            <td>{result[i].createdAt}</td>
                            <td><Link href={'/edit/'+result[i]._id.toString()}><button>수정</button></Link></td>
                            <td><span onClick={(e) =>{
                                fetch('/api/post/delete',{method:'DELETE', body: result[i]._id}).then((r)=>{
                                    if(r.status ==200){
                                        return r.json()
                                    }
                                }).then((result)=>{
                                   const rowElement=e.target.closest("tr");
                                   rowElement.style.opacity=0;
                                   setTimeout(()=>{
                                    const rowElement=e.target.closest("tr");
                                    rowElement.style.display='none';
                                   },1000)
                                })
                            }}><button>삭제</button></span></td>
                        </tr>
                    )
                })
            }
        </tbody>
    );
};

export default NoticeItem;