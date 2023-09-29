import React,{useState} from 'react'

import styled from 'styled-components';
import ButtonComponent from './ButtonComponent';
import DataRender from './DataRender';
import VerticalProcess from './VerticalProcess';

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
const InputContainer=styled.div`
    display:flex;
    flex-direction:row;
    margin:10px;
    gap:20px;
`;

const PlaceOfButton = (props) => {
    let filterData=[];
    let dataBase=props.data;
    const [NameValue,setNameValue]=useState({});
    const [AmountValue,setAmountValue]=useState({});
    const [DateValue,setDateValue]=useState({});
    const [display,setDisplay]=useState([props.data]);
    const options = [
        { value: '2023', text: '2023' },
        { value: '2022', text: '2022' },
        { value: '2021', text: '2021' },
        { value: '2020', text: '2020' },
        {value: '',text:'all'}
    ];
    const [selected, setSelected] = useState();
    const filterDisplay =(dataTest,data)=>{
    
        if(dataTest.length === 0){

            for(let m=0;m<dataBase.length;m++){
                dataBase[m].filter=true;
            }

            
        }
        else{
            for(let i=0;i<data.length;i++){
            
                for(let k=0;k<dataTest.length;k++){
                    if(data[i].date !== dataTest[k].date)
                      { data[i].filter=true;}
                    else{
                         data[i].filter=false;
                         break;
                    }
                }
               
            }
        }
      
    }
    const handleChange = (event) => {
        
        filterData=dataBase.filter((value)=> {
            let filterDate =value.date;
            return filterDate.startsWith(event.target.value);
        })
        console.log(filterData);
        setSelected(event.target.value);
        filterDisplay(filterData,dataBase);
        
    };
    const onClickFuncAdd=()=>{
        console.log("vao lick");
        dataBase.push({...NameValue,...AmountValue,...DateValue});
        setDisplay(
            
        )
    
    
    
    // document.getElementById("contextArea").innerHTML+=<DataRender name={nameOfProduce.value} amount={amountOfProduce.value} date={dateOfProduce.value}/>  ;
    // let tmp={...<DataRender name={nameOfProduce.value} amount={amountOfProduce.value} date={dateOfProduce.value}/>};
        
    }
    const cancelFunc=()=>{
        setNameValue("");
        setAmountValue("");
        setDateValue("");
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
           
           <InputContainer>
            <div style={{width:"100px",color:"white"}}>Name</div>

            <input type="text" style={{width:"330px"} }   placeholder="Name" onChange={(e)=>setNameValue({name: e.target.value})} ></input>
            
        </InputContainer>

            <InputContainer>
            <div style={{width:"100px",color:"white"}}>Amount</div>

            <input type="number" style={{width:"330px"} }   placeholder="Amount" onChange={(e)=>setAmountValue({amount:e.target.value})}></input>
            
        </InputContainer>
        <InputContainer>
            <div style={{width:"100px",color:"white"}}>Date</div>

            <input type="date" style={{width:"330px"} }   placeholder="Date" onChange={(e)=>setDateValue({date:e.target.value})} ></input>
            
        </InputContainer>
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

                <SubContent>
           
            <div>
            <select value={selected} onChange={(e)=>handleChange(e)}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.text}
                    </option>
                ))}

            </select>
            </div>
            
            </SubContent>
            
            </SubContent>

            <VerticalProcess data={filterData} ></VerticalProcess>

            <Block>
                <DataRender data={dataBase}/>
            </Block>
        </ContainerPart2>

        
        
        </Block>
      )
}

export default PlaceOfButton