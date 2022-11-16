import React from 'react'
import {FormPage, Homepage, LocationPage} from './screens'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
        <div class = "container-fluid">
            <div class = "row">
              <Routes>
                <Route path="/">
                  <Route index element= {<Homepage/>}></Route>
                  <Route path= "formpage" element= {<FormPage/>}></Route>
                  <Route path= "location" element= {<LocationPage/>}></Route>
                </Route>
              </Routes>
            </div> 

        </div>
  
      
  )
}

export default App