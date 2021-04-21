import {useState} from "react"
import Form from "./Components/Form"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import LoadPage from "./Components/LoadPage"
import styled from 'styled-components'

const AppWrapper = styled.div`
  overflow-x: hidden;
`

export default function App() {
  const [formData, setFormData] = useState({})
  const [rateAForComparison, setRateAForComparison] = useState(null) /* this will set rate A in comparison so we can compare in Load Page vs. TOU */
  const [touRateForComparison, setTOURateForComparison] = useState(null) /* this will set the TOU rate from touRate() */
  const [formSubmitted, setFormSubmitted] = useState(false) 
    /* helper boolean passed as props. OnClick in Form,jsx will render true and if true will show 
      LoadPage component */

/* establish Rate A */
  const rateA = 0.15

/* establish TOU rate */
  const touRate = () => {
    /* if the hours are between noon - 6 pm, $0.2 kWh */
    
    /* anytime else, $0.08 kWh */
  }

/* calculate the bill B1 and the rate the user is currently on */
  const currentRate = () => {
    return 
  }

/* helper fn() to setState of formSubmitted */
  const updateFormSubmittedInState = () => {
    setFormSubmitted(true)
  }

/* updates Form Data */
  const updateFormData = () => {
    
  }


  return (
    <AppWrapper>
      <MuiThemeProvider>
        <AppBar title="ZappyRide Code Assessment"/>
        <Form updateFormSubmittedInState={updateFormSubmittedInState} />
  {/* loadpage should not render until form is complete */}
        <LoadPage />
      </MuiThemeProvider>
    </AppWrapper>
  );
}
