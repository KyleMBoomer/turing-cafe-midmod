import './Card.css'

function Card({name, date, time, guests, id, deleteResy}) {
    return (
        <div className='card'>
            <h3>{name}</h3>
            <p>{date}</p>
            <p>{time}</p>
            <p>{guests}</p>
            <button onClick={() => deleteResy(id)}>Cancel</button>
        </div>
    )
}

export default Card