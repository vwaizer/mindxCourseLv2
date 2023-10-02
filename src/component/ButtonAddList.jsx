import React from 'react';
import styled from 'styled-components';
import PlaceOfButton from './PlaceOfButton';

export const ButtonArea = styled.div`
    
    
    height:100%;
    width:400px;
   background-color:red;
    text-align:center;
    border-radius:10px;

`;
export const Flex = styled.div`
    display: flex;
    justify-content:end;
    
    gap:10px;
    
`;
export const Container = styled.div`
    
    display:flex;
    flex-direction:row; 
    justify-content:center;
    align-items:center;
    height:150px;
    width:500px;
    margin:15px;
    background-color:blue;
    
`;
export const Block=styled.div`
    border: 0;
    border-radius:20px;
    
        /* height:150px;
        width:500px; */
    background-color:white;  
    margin:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
   height:100%;

`;
const AddListButton = (props) => {
    
   
    
    
    return (
        <Block>
               
              
              <PlaceOfButton  />
                   
              
        </Block>
    )
    // let [count, setCount] = useState(10)

    // const onIncrease = () => {
    //     count = count + 1
    // }

    // return (
    //     <div>
    //         <button onClick={onIncrease}>Increase</button>
    //     </div>
    // )
}



export default AddListButton