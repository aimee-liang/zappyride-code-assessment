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

    const [value, setValue] = useState([15, 25])

    const changeHandler = (event, newValue) => {
        setValue(newValue)
    }

    const sendHourValuesToProps = (data) => {
        props.hourSetter(data)
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