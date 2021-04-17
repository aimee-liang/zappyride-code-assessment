import {useState} from 'react'
import {useForm} from 'react-hook-form'
import SelectRate from "./SelectRate"
import SelectMileRange from "./SelectMileRange"
import SelectHours from "./SelectHours"
import Button from '@material-ui/core/Button';

export default function Form(props){

    const [rate, setRate] = useState(null)
    const [mileRange, setMileRange] = useState(null)
    const [hours, setHourRange] = useState(null)
    const {register, handleSubmit, watch, errors} = useForm()

    const rateSetter = (data) => {
        setRate(data)
    }

    const mileSetter = (data) => {
        setMileRange(data)
    }

    const hourSetter = (data) => {
        setHourRange(data)
    }

/* this is to grab the data from form and send back up to App */
    const dataToApp = () => {
        // props.dataSetter({rate, mileRange, hours})
        console.log("hello")
    }

    return (
        <>
            <form onSubmit={handleSubmit(dataToApp)}>
                <label>Please select your current rate:</label>
                    <SelectRate rateSetter={rateSetter} />
                    <br/>
                <label>How many miles will you be driving per year?</label>
                    <SelectMileRange mileSetter={mileSetter} />
                    <br/>
                <label>What hours do you plan to charge?</label>
                    <SelectHours hourSetter={hourSetter}/>
                    <br />
                <Button variant="contained" color="primary" onSubmit={dataToApp}>Submit</Button>
            </form>
        </>
    )
}