import ListGroup from './components/ListGroup.tsx';
import { MouseEvent } from 'react'

function App() {
    let items = ["Tokyo", "Kyoto", "Hokkaido", "Osaka", "Fukuoka"]
    // items = []

    const handleClick = (event: MouseEvent) => console.log(event)

    return (
        <><ListGroup/>
            {/*{ items.length === 0 ? <p>No list found</p> : null }*/}
            {items.length === 0 && <p>No list found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className="list-group-item"
                        key={index}
                        onClick={handleClick}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App;