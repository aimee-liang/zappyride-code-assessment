import {useState} from 'react'
import SelectDropdown from "./Components/SelectDropdown"


export default function Form(){

    const [data, setData] = useState({
        miles: 0,
        hoursOfTheDay: []
    })

    const [rate, setRate] = useState(null)

    /* helper fn() to set rate in state and pass as props */
    const rateSetter = (data) => {
        setRate(data)
    }

    return (
        <form>
            <SelectDropdown rateSetter={rateSetter} />
        </form>
    )
}