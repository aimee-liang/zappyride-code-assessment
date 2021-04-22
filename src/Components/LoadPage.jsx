import styled from 'styled-components'

const LoadPageWrapper = styled.div`
    padding-top: 3%;
    margin: auto;
    align-items: center;
    width: 38vw;
    display: row;
    padding-left: 3%;
`

const RateWrapper = styled.div`
    align-items: center;
    border: solid 1px gray;
    border-radius: 25px;
    text-align: center;
    height: 15vh;
    width: 25vw;
    margin-top: 3%;
    margin-bottom: 3%;
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
                <h2>Rate A</h2>
                <h3>Your bill comes out to: </h3>
                <h1>{props.rateAData}</h1>
            </RateWrapper>

            <RateWrapper>
                <h2>TOU Rate:</h2>
                <h3>On TOU Rate, your bill comes out to: </h3>
                <h1>{props.touRateData}</h1>
            </RateWrapper>

            <RateWrapper>
                <h2>Your optimal rate is: </h2>
                <h1>{showOptimalRate()}</h1>
            </RateWrapper>
        </LoadPageWrapper>
    )
};
