import Select from 'react-select'
import styled from 'styled-components'

const options = [
    {value: '$0.15', label: 'Rate A ($0.15/kWh'},
    {value: 'TOU', label: 'Rate B (TOU Rate)'}
]

const SelectRateWrapper = styled.div`
    padding-bottom: 5%
`

export default function SelectRate(props){

    const clickHandler = (e) => {
        props.rateSetter(e.value)
    }

    return (
        <SelectRateWrapper>
            <Select options={options} onChange={clickHandler} />
        </SelectRateWrapper>
    )
}