import {useState} from 'react'
import SelectRate from "./SelectRate"
import SelectMileRange from "./SelectMileRange"

export default function Form(){

    const [rate, setRate] = useState(null)
    const [mileRange, setMileRange] = useState()

    const rateSetter = (data) => {
        setRate(data)
    }

    // const establishData = (e) => {
    //     setData({...data, [e.target.name]: e.target.value})
    // }

    return (
        <form>
            <label>Please select your current rate:</label>
                <SelectRate rateSetter={rateSetter} />
            <label>How many miles will you be driving per year?</label>
                <SelectMileRange />
                {/* <input type="text" value={data.miles} onChange={establishData} />  */}
            <label>What hours do you plan to charge?</label>
                {/* <input type="text" value={data.hoursOfTheDay} onChange={establishData}/> */}
        </form>
    )
}