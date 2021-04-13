import {useState} from 'react'
import SelectDropdown from "./SelectDropdown"


export default function Form(){

    const [data, setData] = useState({
        miles: 0,
        hoursOfTheDay: []
    })

    const [rate, setRate] = useState(null)

    const rateSetter = (data) => {
        setRate(data)
    }

    const establishData = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    return (
        <form>
            <label>Please select your current rate:</label>
                <SelectDropdown rateSetter={rateSetter} />
            <label>How many miles will you be driving per year?</label>
                <input type="text" value={data.miles} onChange={establishData} /> 
        </form>
    )
}