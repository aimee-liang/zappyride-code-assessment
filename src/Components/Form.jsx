import {useState} from 'react'
import SelectRate from "./SelectRate"
import SelectMileRange from "./SelectMileRange"

export default function Form(props){

    const [rate, setRate] = useState(null)
    const [mileRange, setMileRange] = useState(null)
    const [hours, setHourRange] = useState(null)

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
        props.dataSetter({rate, mileRange, hours})
    }

    return (
        <>
            <form>
                <label>Please select your current rate:</label>
                    <SelectRate rateSetter={rateSetter} />
                <label>How many miles will you be driving per year?</label>
                    <SelectMileRange />
                    {/* <input type="text" value={data.miles} onChange={establishData} />  */}
                <label>What hours do you plan to charge?</label>
                    {/* <input type="text" value={data.hoursOfTheDay} onChange={establishData}/> */}
            </form>
        </>
    )
}