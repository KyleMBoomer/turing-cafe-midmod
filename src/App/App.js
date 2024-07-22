import './App.css';
import React from 'react';
import {useState, useEffect} from 'react'

import Reservations from '../Reservations/Reservations';
import Form from '../Form/Form'


function App() {
  const [reservations, setReservations] = useState([])
  const [error, setError] = useState(null)

const addResy = (newResy) => {
  setReservations([...reservations, newResy])
}

const deleteResy = (id) =>  {
const filteredResys = reservations.filter(resy => resy.id !== id)
setReservations(filteredResys)
}
  useEffect(() => {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(res => {
        if (!res.ok) {
            throw new Error('Could not get your data.')
        }
        return res.json()
    })
    .then(data => {
        setReservations(data)
    })
    .catch(error => {
        console.log( error.message)
        throw error
    })
  }, [])
  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <Form addResy={addResy}/>
      </div>
      <div className='resy-container'>
        <Reservations reservations={reservations} deleteResy={deleteResy}/>
      </div>
    </div>
  );
}

export default App; 