import Select from 'react-select'

const options = [
    {value: 'Rate A', label: 'Noon to 6PM'},
    {value: 'Rate B', label: 'Rate B (TOU Rate)'}
]

export default function SelectRate(props){

    const clickHandler = (e) => {
        props.rateSetter(e.value)
    }

    return (
        <Select options={options} onChange={clickHandler} />
    )
}