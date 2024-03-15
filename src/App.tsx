import ListGroup from './components/ListGroup.tsx';

function App() {
    let items = ["Tokyo", "Kyoto", "Hokkaido", "Osaka", "Fukuoka"]
    const handleSelectItem = (item: string) => {
        console.log(item)
    }
    return <div><ListGroup items={items} heading="Cities" onSelected={handleSelectItem}/></div>;
}

export default App;