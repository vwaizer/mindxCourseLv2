import React, { useState } from 'react'
import styled from 'styled-components';
import TableCreate from './TableCreate';
import HeaderItemCreate from './HeaderItemCreate';
const Block=styled.div`
    width:100%;
    height:100%;
    padding-bottom:100px;

`;
const HeaderContainer=styled.div`
    width:100%;
    height:100px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;

`;
const HeaderItemContainer=styled.div`
    display:flex;
    flex-direction:row;
    
`;

const BannerContainer=styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;


`;
const TableContainer=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    width:80%;

`;

const FlexCenter=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:25px;

    
`;
const FlexEnd=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:25px;
    position:absolute;
    bottom:-5px;
    
`;
const FooterContainer=styled.div`
    display: flex;
    flex-direction:row;
    justify-content:space-evenly;
    width:80%;
`;
const FooterItem=styled.div`
    display:flex;
    flex-direction:column;
    width:80%;

`;
const Content = () => {
    
    
    const enterChangeButtonColor=(e)=>{
        e.target.style.backgroundColor="skyblue";
        e.target.style.color="red";
    }
    const leaveChangeButtonColor=(e)=>{
        e.target.style.backgroundColor="red";
        e.target.style.color="white";
    }
  return (
    <Block>
        <HeaderContainer>
            <div>Logo</div>
            <HeaderItemContainer>
                <HeaderItemCreate title="Trang chủ"></HeaderItemCreate>
                <HeaderItemCreate title="Thông tin"></HeaderItemCreate>
                <HeaderItemCreate title="Hỏi đáp"></HeaderItemCreate>
                <HeaderItemCreate title="Liên hệ"></HeaderItemCreate>
                <HeaderItemCreate title="Thành viên"></HeaderItemCreate>
            </HeaderItemContainer>
        </HeaderContainer>

        <BannerContainer>
            <h1>Thanh toán không thể dễ dàng hơn</h1>
            <div>Hệ thống ngân hàng internet hiện đại được tạo ra dành cho bạn</div>
            <div><button style={{backgroundColor:"red"}} onMouseEnter={enterChangeButtonColor} onMouseLeave={leaveChangeButtonColor}>Bắt đầu </button></div>
        </BannerContainer>

        <FlexCenter>
            <TableContainer>
                <TableCreate title="Tiết Kiệm" content="Chuyển tiền trong và ngoài ngân hàng một cách dễ dàng và nhanh chóng với chi phí phù hợp"></TableCreate>
                <TableCreate title="Chất Lượng" content="Các dịch vụ của WhiteFoo Bank sẽ mang đến cho bạn những gì tốt nhất hiện có, và nhiều ưu đãi."></TableCreate>
                <TableCreate title="Nhanh Chóng" content="Giao dịch diễn ra chưa đến 5 giây kể từ lúc xác nhận thanh toán, chuyển trực tiếp đến người nhận."></TableCreate>
                <TableCreate title="Bảo Mật" content="Thông tin giao dịch luôn được mã hóa để giúp dữ liệu của bạn luôn được an toàn, không bị đánh cắp."></TableCreate>
            </TableContainer>
        </FlexCenter>

        <FlexEnd>
        <FooterContainer>
            <FooterItem>
                <div>Logo</div>
                <div>
                Hệ thống ngân hàng xuyên quốc gia đáng tin cậy. Dẫn đầu trong danh sách các ngân hàng được người dùng bình chọn và được tin dùng bởi hàng triệu người dùng ở hầu hết các quốc gia trên thế giới.
                </div>

            </FooterItem>
            <FooterItem>
                <h2>Giới Thiệu</h2>
                <div>Về Chúng tôi</div>
                <div>TÍnh năng</div>
                <div>Bảng giá</div>
            </FooterItem>
        </FooterContainer>
        </FlexEnd>
    </Block>
  )
}

export default Content