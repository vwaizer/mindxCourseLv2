import React, { useState } from 'react'

import styled from 'styled-components';
import DataRender from './DataRender';
const SubContent=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`;
const FilterDisplay =(dataTest,data)=>{
    
    if(dataTest.length === 0){
        data.forEach(element => {
            element.filter=true;
        });
        
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
const FilterSelect = ({data,dataTest,func}) => {
   
    const options = [
        { value: '2023', text: '2023' },
        { value: '2022', text: '2022' },
        { value: '2021', text: '2021' },
        { value: '2020', text: '2020' },
        {value: '',text:'all'}
    ];
    const [selected, setSelected] = useState();
    // const handleChange = event => {

    //     dataTest=data.filter((value)=> {
    //         let filterDate =value.date;
    //         return filterDate.startsWith(event.target.value);
    //     })
    //     console.log(dataTest);
    //     FilterDisplay(dataTest,data);
    //     setSelected(event.target.value);
    // };
    return (
        <><SubContent>
           
            <div>
            <select value={selected} onChange={func}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.text}
                    </option>
                ))}

            </select>
            </div>
            
            </SubContent>
            
            
        


        </>
    )
}

export default FilterSelect