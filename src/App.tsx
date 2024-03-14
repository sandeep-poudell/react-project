import ListGroup from './components/ListGroup.tsx';

function App() {
    let items = ["Tokyo", "Kyoto", "Hokkaido", "Osaka", "Fukuoka"]
    // items = []

    return (
        <><ListGroup/>
            {/*{ items.length === 0 ? <p>No list found</p> : null }*/}
            { items.length === 0 && <p>No list found</p> }
            <ul className="list-group">
                {items.map((item) => (
                    <li key={items.indexOf(item)}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default App;