import {useState} from "react";

// use props to pass data to components
interface ListGroupProps {
    items: string[]
    heading: string
}

function ListGroup({items, heading}: ListGroupProps) {
    const [selectedIndex, setSelectedIndex] = useState(-1)

    return (
        <>
            <h1>{heading}</h1>
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