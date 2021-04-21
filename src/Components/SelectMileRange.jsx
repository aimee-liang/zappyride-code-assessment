import Slider from '@material-ui/core/Slider';
import styled from 'styled-components'
import {useState} from 'react'

const SelectMileRangeWrapper = styled.div`
    padding-bottom: 3%
`

export default function SelectMileRange(props){

    const changeHandler = (e, data) => {
        props.mileSetter(data)
        setLocalMileRange(data)
        props.updateMileRangeInState()
    }

    const [localMileRange, setLocalMileRange] = useState(0)

    return (
        <SelectMileRangeWrapper>
            <Slider 
                valueLabelDisplay="auto"
                onChange={changeHandler}
                name="mileRange"
                value={localMileRange}
                />
        </SelectMileRangeWrapper> 
    )
}