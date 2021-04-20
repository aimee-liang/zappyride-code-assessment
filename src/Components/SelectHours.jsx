import {useState} from 'react'
import Slider from '@material-ui/core/Slider'
import styled from 'styled-components'

const SelectHoursWrapper = styled.div`
    padding-bottom: 3%;
`
const valueText = (value) => {
    return `${value}`
}

export default function SelectHours(props){

    const [value, setValue] = useState([15, 25]) /* need to update these values */

    const changeHandler = (event, newValue) => {
        sendHourValuesToProps(newValue) /* invoking this helper fn() to instantly set in state and also send this to props */
    }

    const sendHourValuesToProps = (data) => {
        setValue(data)
        props.hourSetter(data)
        props.updateHoursInState()
    }

    return (
        <SelectHoursWrapper>
            <Slider 
            value={value}
            getAriaValueText={valueText}
            valueLabelDisplay="auto"
            onChange={changeHandler}
            aria-labelledby="range-slider"
            />
        </SelectHoursWrapper>
    )
}