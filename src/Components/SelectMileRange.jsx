import Slider, {Range} from 'rc-slider'

const options = [
    {value: 'Rate A', label: 'Rate A ($0.15/kWh'},
    {value: 'Rate B', label: 'Rate B (TOU Rate)'}
]

export default function SelectMileRange(props){


    return (
        <Select options={options} onChange={clickHandler} />
    )
}