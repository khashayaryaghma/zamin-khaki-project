import Button from "./component/Button";
import Textfield from "./component/Textfield";


function App() {

    return (
        <>
            <Button
                variant="outlined"
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

            <Textfield />
        </>
    );
}

export default App;
