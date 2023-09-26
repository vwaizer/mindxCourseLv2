import React, { useState } from 'react'
import styled from 'styled-components';
const TableItem=styled.div`
    display:flex;
    flex-direction:column;
`;
const TableCreate = (props) => {
    const [showDetail,setShowDetail]=useState(false);
  return (
    <TableItem onMouseEnter={()=>setShowDetail(true)} onMouseLeave={()=>setShowDetail(false)}>
                    <div>IMG</div>
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