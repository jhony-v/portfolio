import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Loading = styled.div`
    ${tw`w-14 sm:w-32`}
    height:50px;
    border-radius:30px;
    margin:5px;
    display:inline-block;
    background-color:rgba(200,200,200,.2);
    animation:loading-project-technologies 1s infinite linear alternate;
    @keyframes loading-project-technologies {
        from {
            opacity:.5;
        }
    }

`
const Wrapper = styled.div`${tw`w-11/12 md:w-5/6 mx-auto mt-10 md:flex`}`


export default function LoadingTechnologies() {
    return (
        <Wrapper>
            {[...Array(10)].map((_,index) => (
                <Loading key={index} />
            ))}
        </Wrapper>
    )
}
