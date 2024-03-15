import {useState} from "react";

function ListGroup() {
    let items = ["Tokyo", "Kyoto", "Hokkaido", "Osaka", "Fukuoka"]
    // Managing State using useState Hook
    const [selectedIndex, setSelectedIndex] = useState(-1)

    return (
        <>
            <h1>List of cities</h1>
            {/*{ items.length === 0 ? <p>No list found</p> : null }*/}
            {items.length === 0 && <p>No list found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                        key={index}
                        onClick={() => {setSelectedIndex(index)}}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;