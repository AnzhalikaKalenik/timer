import Timer from './components/Timer';
import styled from 'styled-components';

const SApp = styled.div`
    width: 400px;
    height: 300px;
    border: 1px solid grey;
    border-radius: 10px;
    background: #f4a460;
    padding: 20px;
    box-sizing: border-box;
`;

function App() {
    return (
        <SApp>
            <Timer />
        </SApp>
    );
}

export default App;
