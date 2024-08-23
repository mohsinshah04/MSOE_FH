import './Cars.css'
import data from './cars.json'

const Cars = () => {

  return (
    <div>
        {
            data.map( car => {
                return (
                    <div key={car.id} className="car-card">
                        <img src={car.image} alt={`${car.name}`}/>
                        <h2>{car.name}</h2>
                        <p>Engine: {car.engine}</p>
                        <p>Electric Motor: {car.electric}</p>
                        <p>Total Horsepower: {car.horsepower}</p>
                        <p>Gross Weight:  {car.weight}</p>
                        <p>0-60: {car.sixty}</p>
                        <p>Top Speed: {car.speed}</p>
                        <p>Drivetrain: {car.drivetrain}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Cars