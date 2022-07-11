import Button from "./component/Button";
import Textfield from "./component/Textfield";


function App() {

    return (
        <>
        <Textfield/>

        <Button variant={1} color="secondary" size="medium" component="a" disabled>click</Button>
        </>
    );
}

export default App;
