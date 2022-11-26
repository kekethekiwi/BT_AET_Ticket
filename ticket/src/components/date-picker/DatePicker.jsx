import React from 'react'
import DatePicker from "react-datepicker";
import { useState } from 'react'
import {
  Input,
  Label
} from 'reactstrap';
const Date_Picker = () => {
const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <Label for="exampleDate">Start Date</Label>
        <Input
          type="date"
          name="date"
          id="exampleDate"
          placeholder="date placeholder"
        />

      <Label for="exampleDate">End Date</Label>
        <Input
          type="date"
          name="date"
          id="exampleDate"
          placeholder="date placeholder"
        />
    </div>
    
    

  )
}

export default Date_Picker