import React,{useState} from 'react'

import styled from 'styled-components';
import ButtonComponent from './ButtonComponent';
import DataRender from './DataRender';
import VerticalProcess from './VerticalProcess';
import FilterSelect from './FilterSelect';
import InputContent from './InputContent';

export const Flex = styled.div`
    display: flex;
    justify-content:end;
    width:90%;
    background-color:purple;
    gap:10px;
    border-radius:10px;
`;
export const Container=styled.div`
    
    display:flex;
   flex-direction:column;
    width:100%;
    height:100%;
    /* margin:10px; */
    background-color:paleturquoise;
    border-radius:10px;
    
    
`;
export const ContainerPart2=styled.div`
    
    display:flex;
   flex-direction:column;
    width:100%;
    height:100%;
    /* margin:10px; */
    background-color:black;
    padding:10px;
    border-radius:5px;    
    
`;
const Block=styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:100%;
    gap:30px;
    margin-top:15px;
`;
const SubContainer=styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center; 
  width:480px;
    height:130px; 
   
`;
const SubContent=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`;
const PlaceOfButton = (props) => {
    let dataBase=props.data;
    const [display,setDisplay]=useState([]);
    
    const onClickFuncAdd=()=>{
        console.log("vao lick");

        console.log(typeof dataBase);
        let nameOfProduce=document.getElementById("Name");
    console.log(nameOfProduce.value);
    let amountOfProduce=document.getElementById("Amount");
    console.log(amountOfProduce.value);
    let dateOfProduce=document.getElementById("Date");
    console.log(dateOfProduce.value);
    let store={name:nameOfProduce.value,amount:amountOfProduce.value,date:dateOfProduce.value};
    

        dataBase.push(store);
    
        setDisplay(
            <Block>
                <DataRender data={dataBase}/>
            </Block>
        )
    
    
    
    // document.getElementById("contextArea").innerHTML+=<DataRender name={nameOfProduce.value} amount={amountOfProduce.value} date={dateOfProduce.value}/>  ;
    // let tmp={...<DataRender name={nameOfProduce.value} amount={amountOfProduce.value} date={dateOfProduce.value}/>};
        
    }
    const cancelFunc=()=>{
        let nameOfProduce=document.getElementById("Name");
    nameOfProduce.value="";
    let amountOfProduce=document.getElementById("Amount");
    amountOfProduce.value="";
    let dateOfProduce=document.getElementById("Date");
    dateOfProduce.value="";
    }
    let [count, setCount] = useState(0);
    let count1=0;
    const onClickFunc=()=>{
        setCount(1);
    }

    if(count === 0){
        count1=<SubContainer><button onClick={onClickFunc} style={{width:"50%",backgroundColor:"purple",color:"white"}}>all list</button></SubContainer>;
    }
    else(
        count1=<>
        <Container style={{backgroundColor:"purple"}}>
           
           <InputContent title="Name" inputType="text"></InputContent>
            <InputContent title="Amount" inputType="number"></InputContent>
           <InputContent title="Date" inputType="date"></InputContent>
           <Flex>
               <ButtonComponent backgroundValue="red" textColor="white" buttonFunc={onClickFuncAdd}>Add </ButtonComponent>
               <ButtonComponent backgroundValue="gray" textColor="black" buttonFunc={cancelFunc}>Cancel</ButtonComponent>
           </Flex> 
  
            
        </Container>
        </> 
    )

    return (
         <Block>   
        <Container>
            
            {count1}
            
        </Container>
        <ContainerPart2>
            <SubContent>
                <div style={{color:'white'}}>Filter by year</div>

                <FilterSelect data={dataBase}/>
            </SubContent>

            <VerticalProcess percentage="0"></VerticalProcess>

            {display}
        </ContainerPart2>

        
        
        </Block>
      )
}

export default PlaceOfButton