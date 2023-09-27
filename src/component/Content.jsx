import React, { useState } from 'react'
import styled from 'styled-components';
import TableCreate from './TableCreate';
import HeaderItemCreate from './HeaderItemCreate';
const Block=styled.div`
    width:100%;
    height:100%;
    


`;
const HeaderContainer=styled.div`
    width:100%;
    height:150px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    

`;
const HeaderItemContainer=styled.div`
    display:flex;
    flex-direction:row;
    gap:10px;
`;

const BannerContainer=styled.div`
    width:100%;
    height:250px;
    display:flex;
    flex-direction:column;
    background-color:red;


`;
const BannerItem=styled.div`
    width:35%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`;
const TableContainer=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:100%;
    height:100%;
    gap:5px;
    margin-top:20px;
    border-radius:10px;
    border:2px solid black;

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
    
    position:relative;
    bottom:-100px;
    background-color:black;
    
`;
const FooterContainer=styled.div`
    display: flex;
    flex-direction:row;
    width:80%;
    justify-content:space-between;
    background-color:black;
    color:white;
    align-self:center;  
`;
const FooterItem=styled.div`
    display:flex;
    flex-direction:column;
    width:25%;

`;
const BodyItem=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:80%;
`;
const BodyContainer=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
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
        

       <BodyContainer>
       <BodyItem>
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
            <BannerItem>
            <h1>Thanh toán không thể dễ dàng hơn</h1>
            <div>Hệ thống ngân hàng internet hiện đại được tạo ra dành cho bạn</div>
            <div><button style={{backgroundColor:"red",width:"40%",height:"50px"}} onMouseEnter={enterChangeButtonColor} onMouseLeave={leaveChangeButtonColor}>Bắt đầu </button></div>
            </BannerItem>
        </BannerContainer>

        <FlexCenter>
            <TableContainer>
                <TableCreate title="Tiết Kiệm" content="Chuyển tiền trong và ngoài ngân hàng một cách dễ dàng và nhanh chóng với chi phí phù hợp"></TableCreate>
                <hr></hr>
                <TableCreate title="Chất Lượng" content="Các dịch vụ của WhiteFoo Bank sẽ mang đến cho bạn những gì tốt nhất hiện có, và nhiều ưu đãi."></TableCreate>
                <hr></hr>
                <TableCreate title="Nhanh Chóng" content="Giao dịch diễn ra chưa đến 5 giây kể từ lúc xác nhận thanh toán, chuyển trực tiếp đến người nhận."></TableCreate>
                <hr></hr>
                <TableCreate title="Bảo Mật" content="Thông tin giao dịch luôn được mã hóa để giúp dữ liệu của bạn luôn được an toàn, không bị đánh cắp."></TableCreate>
            </TableContainer>
        </FlexCenter>
        </BodyItem>
       </BodyContainer>



        <FlexEnd>
        <FooterContainer>
            <FooterItem >
                <div>Logo</div>
                <div>
                Hệ thống ngân hàng xuyên quốc gia đáng tin cậy. Dẫn đầu trong danh sách các ngân hàng được người dùng bình chọn và được tin dùng bởi hàng triệu người dùng ở hầu hết các quốc gia trên thế giới.
                </div>

            </FooterItem>
            <FooterItem>
                <h2>Giới Thiệu</h2>
                <div>Về Chúng tôi</div>
                <div>Dịch vụ</div>
                <div>Tính năng</div>
                <div>Bảng giá</div>
            </FooterItem>
            <FooterItem>
                <h2>Hỗ Trợ </h2>
                <div>Câu hỏi thường gặp</div>
                <div>Chính sách bảo mật</div>
                <div>Điều khoản sử dụng</div>
                <div>Liên hệ</div>
            </FooterItem>
            <FooterItem style={{width:"15%"}}>
                <h2>Liên hệ</h2>
                <div>Địa chỉ:227 Đường Nguyễn Văn Cừ, Phường 4, Quận 5, Hồ Chí Minh</div>
                <div>Email:admin@whitefoo.com</div>
                <div>Phone:(+84) 1234567890</div>
            </FooterItem>
            
        </FooterContainer>
        <hr style={{width:"100%"}}/>
        <FlexCenter style={{color:"white"}}>2020 WhiteFoo Corporation - Copyright lololol</FlexCenter>
        </FlexEnd>
    </Block>
  )
}

export default Content