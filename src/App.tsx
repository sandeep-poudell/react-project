import ListGroup from './components/ListGroup.tsx';

function App() {
    let items = ["Tokyo", "Kyoto", "Hokkaido", "Osaka", "Fukuoka"]
    return <div><ListGroup items={items} heading="Cities"/></div>;
}

export default App;