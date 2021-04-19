import Slider from '@material-ui/core/Slider'
import styled from 'styled-components'

const SelectHoursWrapper = styled.div`
    padding-bottom: 3%;
`

export default function SelectHours(props){

    const changeHandler = (event, data) => {
        props.hourSetter(data)
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