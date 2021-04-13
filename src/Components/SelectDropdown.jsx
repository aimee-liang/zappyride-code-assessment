import Select from 'react-select'

const options = [
    {value: 'Rate A', label: 'Rate A ($0.15/kWh'},
    {value: 'Rate B', label: 'Rate B (TOU Rate)'}
]

export default function SelectDropdown(props){

    const clickHandler = (e) => {
        props.rateSetter(e.value)
    }

    return (
        <Select options={options} onChange={clickHandler} />
    )
}