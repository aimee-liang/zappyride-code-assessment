import {useState} from 'react'
import styled from 'styled-components'

const SelectHoursWrapper = styled.div`
    padding-bottom: 3%;
`

export default function SelectHours(props){

    const [minChargingTime, setMinChargingTime] = useState(null)
    // const [maxChargingTime, setMaxChargingTime] = useState(null)

    const updateMinChargingTime = (e) => {
        setMinChargingTime(e.target.value)
    }

    const updateMaxChargingTime = (e) => {
        sendHourValuesToProps([minChargingTime, e.target.value])
    }

    const sendHourValuesToProps = (data) => {
        props.hourSetter(data)
        props.updateHoursInState()
    }

    return (
        <SelectHoursWrapper>
            <input type="time" name="hours" min="0:00" max="23:00" onChange={updateMinChargingTime}></input> to <input type="time" name="hours" min="1:00" max="24:00" onChange={updateMaxChargingTime}></input>
        </SelectHoursWrapper>
    )
}