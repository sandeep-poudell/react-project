import Alert from "./components/Alert.tsx";
import Button from "./components/Button.tsx";
import {useState} from "react";

function App() {
    const [alertShow, setAlertShow] = useState(false)

    return <div>
        {alertShow && <Alert onClose={() => setAlertShow(false)}><h5>Happy Programming!</h5></Alert>}
        <Button onClick={() => {
            setAlertShow(true)
        }} color="success">
            Click me
        </Button>
    </div>;
}

export default App;