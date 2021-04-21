import styled from 'styled-components'

const LoadPageWrapper = styled.div`
    padding-top: 3%;
    margin: auto;
    align-items: center;
    width: 38vw;
    display: flex;
`

const RateWrapper = styled.div`
    border: solid 1px black
    border-radius; 25px;
`

export default function LoadPage(props){
    return (
        <LoadPageWrapper>
            <RateWrapper>
                <h4>Rate A:</h4>
                <h5>On Rate A, you're paying this much: </h5>
                <span>{props.rateAData}</span>
            </RateWrapper>

            <RateWrapper>
                <h4>TOU Rate:</h4>
            </RateWrapper>
        </LoadPageWrapper>
    )
};
