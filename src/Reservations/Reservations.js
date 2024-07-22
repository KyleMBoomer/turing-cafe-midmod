import './Reservations.css'
import Card from '../Card/Card'

function Reservations({reservations, deleteResy}) {
    const resyCards = reservations.map(resy => {
        console.log('resy', resy)
        return (
          <Card
          name={resy.name}
          date={resy.date}
          time={resy.time}
          guests={resy.guests}
          id={resy.id}
          key={resy.id}
          deleteResy={deleteResy}
          />
        )
    }) 
    return (
       <div className='resy-container'>{resyCards}</div>
    )
}

export default Reservations 