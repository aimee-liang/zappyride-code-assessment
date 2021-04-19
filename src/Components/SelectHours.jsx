import {useState} from 'react'
import Slider from '@material-ui/core/Slider'
import styled from 'styled-components'

const SelectHoursWrapper = styled.div`
    padding-bottom: 3%;
`

export default function SelectHours(props){

    const [value, setValue] = useState([])

    const changeHandler = (event, newValue) => {
        props.hourSetter(newValue)
    }

    return (
        <SelectHoursWrapper>
            <Slider 
            valueLabelDisplay="auto"
            onChange={changeHandler}
            marks={marks}
            />
        </SelectHoursWrapper>
    )
}