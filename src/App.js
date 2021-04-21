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
    hours: ["0:00", "0:00"]
  })
  const [rateAForComparison, setRateAForComparison] = useState(null) /* this will set rate A in comparison so we can compare in Load Page vs. TOU */
  const [touRateForComparison, setTOURateForComparison] = useState(null) /* this will set the TOU rate from touRate() */
  const [formSubmitted, setFormSubmitted] = useState(false) 
  const rateA = 0.15

/* establish TOU rate */
  const touRate = () => {
    let startTime = parseInt((formData["hours"][0]).split(":")[0]) /* hour value */
    let endTime = parseInt((formData["hours"][1]).split(":")[0]) /* hour value */
    let hours = endTime - startTime
    let total

    let surgeStart = 12
    let surgeEnd = 18

    /* WITHIN SURGE
    hours within the window - startTime >= surgeStart && < surgeEnd
    endTime > surgeEnd? if true, subtract startTime - surgeEnd == hours within
    if endTime < surgeEnd, subtract endTime - startTime 
    surgeHours - nonSurgeHours
    */
    if (startTime >= surgeStart && startTime < surgeEnd){
      let nonSurgeTotal = 0
      if (endTime > surgeEnd){
        let greaterThanHours = endTime - surgeEnd 
        nonSurgeTotal += greaterThanHours * 0.08
      }
      let surgeHours = endTime - startTime
      let surgeTotal = surgeHours * 0.2
      total = nonSurgeTotal + surgeTotal
      return total
    }
    total = hours * 0.08
    console.log(total)
    return total

    // if (start <= formData["hours"][0] <= end) {
      // total += (formData["hours"][0] * 0.2)
    // } else {
    //   /* anytime else, $0.08 kWh */
    //   total += (formData["hours"][0] * 0.08)
    // }
    // return total
  }

// touRate()

/* calculate the bill B1 and the rate the user is currently on */
  const currentRate = () => {
    return 
  }

  const updateFormSubmittedInState = () => {
    setFormSubmitted(true)
  }

  const updateFormData = (rate, mileRange, hours) => {
    setFormData({...formData, rate, mileRange, hours})
  }


  return (
    <>
    {console.log(touRate())}
    {console.log(formData)}
    <AppWrapper>
      <MuiThemeProvider>
        <AppBar title="ZappyRide Code Assessment"/>
{formSubmitted ? <LoadPage/> : <Form updateFormSubmittedInState={updateFormSubmittedInState} updateFormData={updateFormData} />}
        {/* <Form updateFormSubmittedInState={updateFormSubmittedInState} /> */}
        {/* <LoadPage /> */}
      </MuiThemeProvider>
    </AppWrapper>
    </>
  );
}
