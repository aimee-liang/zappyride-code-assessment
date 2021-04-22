import styled from 'styled-components'

const LoadPageWrapper = styled.div`
    padding-top: 3%;
    margin: auto;
    align-items: center;
    width: 38vw;
`

const RateWrapper = styled.div`
    border: solid 1px black
    border-radius; 25px;
`

export default function LoadPage(props){

    const showOptimalRate = () => {
        let rateA = props.rateAData
        let rateB = props.touRateData
        if (rateA < rateB) return 'Rate A'
        if (rateA > rateB) return 'TOU Rate'
    }

    return (
        <LoadPageWrapper>
            <RateWrapper>
                <h4>Rate A:</h4>
                <h5>On Rate A, your bill comes out to: </h5>
                <h2>{props.rateAData}</h2>
            </RateWrapper>

            <RateWrapper>
                <h4>TOU Rate:</h4>
                <h5>On TOU Rate, your bill comes out to: </h5>
                <span>{props.touRateData}</span>
            </RateWrapper>

            <RateWrapper>
                <h5>Based on the information you've provided, {showOptimalRate} is the optimal rate.</h5>
            </RateWrapper>
        </LoadPageWrapper>
    )
};
