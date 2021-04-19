import Slider from '@material-ui/core/Slider';
import styled from 'styled-components'

const SelectMileRangeWrapper = styled.div`
    padding-bottom: 3%
`

export default function SelectMileRange(props){

    const marks = [
        {
            value: 5000,
            label: '5,000'
        },
        {
            value: 10000,
            label: '10,000'
        },
        {
            value: 15000,
            label: '15,000'
        },
        {
            value: 20000,
            label: '20,000'
        },
        {
            value: 25000,
            label: '25,000'
        },
        {
            value: 30000,
            label: '30,000'
        },
        {
            value: 35000,
            label: '35,000'
        },
        {
            value: 40000,
            label: '40,000'
        },
        {
            value: 45000,
            label: '45,000'
        },
        {
            value: 50000,
            label: '50,000'
        },
        {
            value: 55000,
            label: '55,000'
        },
        {
            value: 60000,
            label: '60,000'
        },
        {
            value: 65000,
            label: '65,000'
        },
        {
            value: 70000,
            label: '70,000'
        },
        {
            value: 75000,
            label: '75,000'
        },
        {
            value: 80000,
            label: '80,000'
        },
        {
            value: 85000,
            label: '85,000'
        },
        {
            value: 90000,
            label: '90,000'
        },
        {
            value: 95000,
            label: '95,000'
        },
        {
            value: 100000,
            label: '100,000'
        },
    ]

    const changeHandler = (event, data) => {
        props.mileSetter(data)
    }

    return (
        <SelectMileRangeWrapper>
            <Slider 
                // values={miles}
                valueLabelDisplay="auto"
                onChange={changeHandler}
                marks={marks}
                />
        </SelectMileRangeWrapper> 
    )
}