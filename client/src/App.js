import Button from "./component/Button";
import Textfield from "./component/Textfield";


function App() {

    return (
        <>
            <Textfield />

            <Button
                variant={1}
                color="secondary"
                size="medium"
                component="a"
                disabled
            >
                click
            </Button>
            
            <Button
                variant="contained"
                color="primary"
                size="large"
                component="p"
            >
                click
            </Button>
        </>
    );
}

export default App;
