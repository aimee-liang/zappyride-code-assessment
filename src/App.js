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
  const [formData, setFormData] = useState({
    rate: null,
    mileRange: null,
    hours: []
  })
  const [rateAForComparison, setRateAForComparison] = useState(null) /* this will set rate A in comparison so we can compare in Load Page vs. TOU */
  const [touRateForComparison, setTOURateForComparison] = useState(null) /* this will set the TOU rate from touRate() */
  const [formSubmitted, setFormSubmitted] = useState(false) 
  const rateA = 0.15

/* establish TOU rate */
  const touRate = () => {
    let total
    /* if the hours are between noon - 6 pm, $0.2 kWh */
    if (12 <= formData["hours"][0] <= 18) {
      total += (formData["hours"][0] * 0.2)
    } else {
      /* anytime else, $0.08 kWh */
      total += (formData["hours"][0] * 0.08)
    }
    return total
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
  const updateFormData = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }


  return (
    <AppWrapper>
      <MuiThemeProvider>
        <AppBar title="ZappyRide Code Assessment"/>
{formSubmitted ? <LoadPage/> : <Form updateFormSubmittedInState={updateFormSubmittedInState} />}
        {/* <Form updateFormSubmittedInState={updateFormSubmittedInState} /> */}
        {/* <LoadPage /> */}
      </MuiThemeProvider>
    </AppWrapper>
  );
}
