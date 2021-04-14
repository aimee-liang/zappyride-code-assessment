import Select from 'react-select'

const options = [
    {value: '$0.15', label: 'Rate A ($0.15/kWh'},
    {value: 'TOU', label: 'Rate B (TOU Rate)'}
]

export default function SelectRate(props){

    const clickHandler = (e) => {
        props.rateSetter(e.value)
    }

    return (
        <Select options={options} onChange={clickHandler} />
    )
}