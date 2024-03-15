import ListGroup from './components/ListGroup.tsx';

function App() {
    let items = ["Tokyo", "Kyoto", "Hokkaido", "Osaka", "Fukuoka"]
    // items = []

    return (
        <><ListGroup/>
            {/*{ items.length === 0 ? <p>No list found</p> : null }*/}
            {items.length === 0 && <p>No list found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className="list-group-item"
                        key={index}
                        onClick={() => console.log(item, index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App;