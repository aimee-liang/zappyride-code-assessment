import Slider, {SliderTooltip} from 'rc-slider'
import 'rc-slider/assets/bootstrap.css'

const {createSliderWithTooltip} = Slider
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

    return (
        <>
            <Slider handle={handle}/>
        </>
    )
}