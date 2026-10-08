
import { useState } from 'react'
import './App.css'

function App() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState('')

  const calculateBMI = () => {
    const heightInMeter = height / 100
    const result = weight / (heightInMeter*heightInMeter)
    setBmi(result)
  }
 
  return (
  <>
    <div className='container'>

      <h1 id='a'>Welcom to BMI Calculator</h1>

      <div className='content'>

        <div className='bmi'>
          <h1 id='b'>Calculate ur BMI</h1>

          <input
            type='number'
            placeholder='Enter Weight'
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <br />
          <br />

          <input
            type='number'
            placeholder='Enter Height'
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          <br />
          <br />

          <button onClick={calculateBMI}>Calculate BMI</button>

          <br />

          <input
            type='text'
            placeholder='BMI'
            value={bmi}
            readOnly
          />
        </div>

        <img
          src='https://www.mealpro.net/wp-content/uploads/2017/07/BMI-Chart-Obesety-Table.jpg'
          alt='BMI'
          className='bmimg'
        />

      </div>

    </div>
  </>
)
}

export default App
