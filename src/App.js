
import './App.css';
import Content from './component/Content';
import {styled} from "styled-components";
import SlideBar from './component/SlideBar';
const FlexColum=styled.div`
    display:flex;
    flex-direction:row;
`;


function App() {
  return (
    <FlexColum>
      <SlideBar></SlideBar>
      <Content></Content>
    </FlexColum>
  );
}

export default App;
