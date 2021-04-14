import {useState} from 'react'
import Slider, {SliderTooltip} from 'rc-slider'
import 'rc-slider/assets/bootstrap.css'
import 'rc-slider/assets/index.css'

const {createSliderWithTooltip} = Slider.createSliderWithTooltip
const Range = createSliderWithTooltip(Slider.Range)
const { Handle } = Slider

const handle = (props) => {
    const {value, dragging, index, ...restProps} = props
    return (
        <SliderTooltip
            prefixCls="rc-slider-tooltip"
            overlay={`${value} %`}
            visible={dragging}
            placement="top"
            key={index}
        >
            <Handle value={value} {...restProps} />
        </SliderTooltip>
    )
}

export default function SelectMileRange(props){

    const [] = useState[]

    return (
        <>
            <Range />
        </>
    )
}