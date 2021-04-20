import {useState} from 'react'
// import {useForm} from 'react-hook-form'
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
    const [mileRange, setMileRange] = useState(null)
    const [hours, setHourRange] = useState([])
    // const {register, handleSubmit, watch, errors} = useForm()

    const rateSetter = (data) => {
        setRate(data)
    }

    const mileSetter = (data) => {
        setMileRange(data)
    }

    const hourSetter = (data) => {
        setHourRange(data)
    }

/* this is a fn to grab the data from form and send back up to App */
    const dataToApp = () => {
        /* if there is a section missing, need to throw an error */
        // if (rate || mileRange === null) console.log("Required Field")
        // if (hours.length === 0 || !hours.length) console.log ("Required field")
        // props.dataSetter({rate, mileRange, ...hours})
        console.log("hi")
    }

    return (
        <FormWrapper>
            <form>
                <label>Please select your current rate:</label>
                    <br/>
                    <br/>
                    {rate === null ? <span style={{color: "red"}}>Required input</span> : <SelectRate rateSetter={rateSetter}/> }
                    <br />
                <label>How many miles (per thousand) will you be driving per year?</label>
                    <br/>
                    <br/>
                    {mileRange === null ? <span style={{color: "red"}}>Required input </span> : <SelectMileRange mileSetter={mileSetter}/> }
                <label>What hours do you plan on charging your EV?</label>
                    <br/>
                    <br/>
                    <SelectHours hourSetter={hourSetter}/>
                    <br/>
                <Button variant="contained" color="primary" onSubmit={dataToApp}>Submit</Button>
            </form>
        </FormWrapper>
    )
}