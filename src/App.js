
import './App.css';
import Content from './component/Content';
import {styled} from "styled-components";

const FlexColum=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
`;

const Container=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;
function App() {
  return (
    <Container>
      <FlexColum>
    
        <Content></Content>
    </FlexColum>
    </Container>
  );
}

export default App;
