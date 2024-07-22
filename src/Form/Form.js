import { useState } from 'react'
import './Form.css'

function Form({addResy}) {
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [guests, setGuests] = useState("")

    const makeReservation = (event) => {
        event.preventDefault()
        const newResy = {
            id: Date.now(), name, date, time, guests
        }
        addResy(newResy)
        clearInput()
    }

    const clearInput = () => {
        setName("")
        setDate("")
        setTime("")
        setGuests("")
    }

    return (
        <form>
            <input
                type='text'
                placeholder='Name'
                name='name'
                value={name}
                onChange={event => setName(event.target.value)}
            />
            <input
                type='date'
                placeholder='Date'
                name='date'
                value={date}
                onChange={event => setDate(event.target.value)}
            />
            <input
                type='time'
                placeholder='Time'
                name='time'
                value={time}
                onChange={event => setTime(event.target.value)}
            />
            <input
                type='text'
                placeholder='Guests'
                name='guests'
                value={guests}
                onChange={event => setGuests(event.target.value)}
            />
            <button onClick={event =>
                makeReservation(event)
            }>Make Reservation</button>
        </form>

    )
}

export default Form