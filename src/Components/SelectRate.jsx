import {useState} from 'react';
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

    const [selectedRate, setSelectedRate] = useState(null)

    const clickHandler = (e) => {
        setSelectedRate(e.value)
        sendRateToProps(e.value)
    }
    
    const sendRateToProps = (data) => {
        props.rateSetter(data)
    }

    return (
        <SelectRateWrapper>
            {selectedRate ? <Select options={options} onChange={clickHandler}/> : <span>Required field</span>}
        </SelectRateWrapper>
    )
}