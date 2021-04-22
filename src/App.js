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
    let startTime = parseInt((formData["hours"][0]).split(":")[0]) /* sets the user's start time as an integer */
    let endTime = parseInt((formData["hours"][1]).split(":")[0]) /* likewise but the end time */
    let hours = endTime - startTime /* difference between hours */
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
    // console.log(total)
    setTOURateForComparison(total)
    // return total
  }

/* calculate the rate using Rate A, and update state*/
  const userRateA = () => {
    let startTime = parseInt((formData["hours"][0]).split(":")[0])
    let endTime = parseInt((formData["hours"][1]).split(":")[0])
    let totalTime = (endTime - startTime) * rateA
    setRateAForComparison(totalTime)
  }

  const updateFormSubmittedInState = () => {
    setFormSubmitted(true)
    /* once form info has all been submitted and is true, invoke touRate() and userRateA()? */
    userRateA()
    touRate()
  }

  const updateFormData = (rate, mileRange, hours) => {
    setFormData({...formData, rate, mileRange, hours})
  }

  return (
    <>
    {console.log(touRate())}
    <AppWrapper>
      <MuiThemeProvider>
        <AppBar title="ZappyRide Code Assessment"/>
          {formSubmitted ? 
            <LoadPage rateAData={rateAForComparison} touRateData={touRateForComparison} /> 
            : 
            <Form updateFormSubmittedInState={updateFormSubmittedInState} updateFormData={updateFormData} 
          />}
        {/* <Form updateFormSubmittedInState={updateFormSubmittedInState} /> */}
        {/* <LoadPage /> */}
      </MuiThemeProvider>
    </AppWrapper>
    </>
  );
}
