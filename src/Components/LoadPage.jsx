import styled from 'styled-components'

const LoadPageWrapper = styled.div`
    padding-top: 3%;
    margin: auto;
    width: 35vw;
    display: row;
    padding-right: 3%;
`

const RateWrapper = styled.div`
    border: solid 1px gray;
    border-radius: 25px;
    text-align: center;
    min-height: 22vh;
    min-width: 40vw;
    margin-top: 2%;
    margin-bottom: 2%;
    overflow-wrap: break-word;
`

export default function LoadPage(props){

    let rateA = props.userRateA().toFixed(2) 
    let annualRateA = rateA * 365
    let rateB = props.touRate().toFixed(2)
    let annualRateB = rateB * 365

    const showOptimalRate = () => {
        if (rateA < rateB) return 'Rate A'
        if (rateA > rateB) return 'Rate B'
    }

    const calcOptimalRate = () => {
        if (rateA < rateB) return rateB - rateA
        if (rateA > rateB) return rateA - rateB
    }

    return (
        <>
        <LoadPageWrapper>
            <RateWrapper>
                <h2>Rate A</h2>
                <h3>Your bill comes out to: <b style={{color: "green"}}>${rateA}</b> kWh</h3>
                <h3>Your annual bill comes out to: <b style={{color: "green"}}>${annualRateA.toFixed(2)}</b></h3>
            </RateWrapper>

            <RateWrapper>
                <h2>Rate B:</h2>
                <h3>Your bill comes out to: <b style={{color: "green"}}>${rateB}</b> kWh</h3>
                <h3>Your annual bill comes out to: <b style={{color: "green"}}> ${annualRateB.toFixed(2)}</b></h3>
            </RateWrapper>

            <RateWrapper>
                <h2>Your optimal rate is: </h2>
                <h3 style={{color: "red"}}>{showOptimalRate()}</h3>
                <h3>You will save <b style={{color: "green"}}>${calcOptimalRate().toFixed(2)}</b> kWh</h3>
                <h3>You will save <b style={{color: "green"}}>${(calcOptimalRate() * 365).toFixed(2)}</b> annually</h3>
            </RateWrapper>
        </LoadPageWrapper>
        </>
    )
};
