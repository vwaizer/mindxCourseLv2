import React, { useState } from 'react'
import styled from 'styled-components';
const TableItem=styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:300px;
    align-items:center;
    justify-content:center;
    cursor: pointer;
`;
const ImgItem=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`;
const TableCreate = (props) => {
    const [showDetail,setShowDetail]=useState(false);
  return (
    <TableItem onMouseEnter={()=>setShowDetail(true)} onMouseLeave={()=>setShowDetail(false)}>
                    <ImgItem > <img src={props.img} style={{width:"40%"}} alt=""></img>
                         </ImgItem>
                    <div>
                        <h3>
                            {props.title}
                        </h3>

                    </div>
                    <div>
                        {props.content}
                    </div>
                    {showDetail && (<div style={{textDecoration:"underline"}}>Xem thêm</div>) }
                
    </TableItem>
  )
}

export default TableCreate