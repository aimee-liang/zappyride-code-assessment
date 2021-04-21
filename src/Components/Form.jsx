import {useState} from 'react'
import SelectRate from "./SelectRate"
import SelectMileRange from "./SelectMileRange"
import SelectHours from "./SelectHours"
import Button from '@material-ui/core/Button';
import styled from 'styled-components'

const FormWrapper = styled.div`
    padding-top: 3%;
    margin: auto;
    align-items: center;
    width: 38vw;
`

export default function Form(props){

    const [rate, setRate] = useState(null)
    const [rateInState, setRateInState] = useState(false) /* helper boolean - if rate is not in state or is null, display span */
    const [mileRange, setMileRange] = useState(null)
    const [mileRangeInState, setMileRangeInState] = useState(false)
    const [hours, setHourRange] = useState([])
    const [hoursInState, setHoursInState] = useState(false)

    const rateSetter = (data) => {
        setRate(data)
    }

    const updateRateInState = () => {
        setRateInState(true)
    }

    const mileSetter = (data) => {
        setMileRange(data)
    }

    const updateMileRangeInState = () => {
        setMileRangeInState(true)
    }

    const hourSetter = (data) => {
        setHourRange(data)
    }

    const updateHoursInState = () => {
        setHoursInState(true)
    }

/* this is a fn to grab the data from form and send back up to App */
    const dataToApp = () => {
        // props.dataSetter({rate, mileRange, ...hours})
        props.updateFormSubmittedInState()
        console.log("hi")
    }

    return (
        <>
        <FormWrapper>
            <form>
                <label>Please select your current rate:</label>
                    <br/>
                    <br/>
                    {rateInState ? null : <span style={{color: "red", fontSize: "12px"}}>Required input* </span>}
                    <br/>
                    <br/>
                    <SelectRate rateSetter={rateSetter} rateInState={updateRateInState} />
                <label>How many miles (per thousand) will you be driving per year?</label>
                    <br/>
                    <br/>
                    {mileRangeInState ? null : <span style={{color: "red", fontSize: "12px"}}>Required input* </span>}
                    <br/>
                    <br/>
                    <SelectMileRange mileSetter={mileSetter} updateMileRangeInState={updateMileRangeInState}/> 
                <label>What hours do you plan on charging your EV?</label>
                    <br/>
                    <br/>
                    {hoursInState? null : <span style={{color: "red", fontSize: "12px"}}>Required input* </span>}
                    <br/>
                    <br/>
                    <SelectHours hourSetter={hourSetter} updateHoursInState={updateHoursInState}/>
                    <br/>
                <Button variant="contained" color="primary" onSubmit={dataToApp}>Submit</Button>
            </form>
        </FormWrapper>
        </>
    )
}