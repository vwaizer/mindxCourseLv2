
import './App.css';
import {styled} from "styled-components";
import PlaceOfButton from './Component/PlaceOfButton';

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
    align-items:center;
   height:100%;
   width:80%;

`;
const App = () => {
    
   
    
    
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

export default App;
