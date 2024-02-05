import News from "./1news";


import React, { useState } from 'react';
import { Form } from 'react-bootstrap';


function Address() {




  const currentYear = new Date().getFullYear();
  const startYear = 1880;
  const endYear = 2023;

  const years = [];
  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }

  const [selectedYear, setSelectedYear] = useState(currentYear);

  const handleChange = (e) => {
    setSelectedYear(parseInt(e.target.value, 10));
  };



    // const provinces = ['Sindh', 'Punjab', 'Baluchistan', 'KPK', 'Other'];
    // const cities = {
    //     Sindh: ['Karachi', 'Hyderabad', 'Jamshoro'],
    //     Punjab: ['Lahore', 'Multan', 'Bhawalpur'],
    //     Baluchistan: ['Hub', 'Gawadar', 'Queetta'],
    //     KPK: ['Peshawar', 'Abotabad', 'Sawat'],
    //     Other: ['Gilgit', 'Baltistan', 'Kashmir', 'Islamabad'],
    // };
  
    // // State to store selected values
    // const [selectedState, setSelectedState] = useState('');
    // const [selectedCity, setSelectedCity] = useState('');
  
    // // Event handler for state selection
    // const handleStateChange = (e) => {
    //   const stateValue = e.target.value;
    //   setSelectedState(stateValue);
    //   // Reset selected city when state changes
    //   setSelectedCity('');
    // };
  
    // // Event handler for city selection
    // const handleCityChange = (e) => {
    //   const cityValue = e.target.value;
    //   setSelectedCity(cityValue);
    // };



return ( <>
    <Form>
      <Form.Group controlId="yearSelector">
        <Form.Label>Select a Year:</Form.Label>
        <Form.Control as="select" value={selectedYear} onChange={handleChange}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </Form>


{/* <div> */}
      {/* <label htmlFor="stateDropdown">Select a Province:</label>
      <select id="stateDropdown" onChange={handleStateChange} value={selectedState}>
        <option value="">Select a state</option>
        {provinces.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>

      {selectedState && (
        <div>
          <label htmlFor="cityDropdown">Select a City:</label>
          <select id="cityDropdown" onChange={handleCityChange} value={selectedCity}>
            <option value="">Select a city</option>
            {cities[selectedState].map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      )}
    </div> */}




        </> );
}

export default Address;