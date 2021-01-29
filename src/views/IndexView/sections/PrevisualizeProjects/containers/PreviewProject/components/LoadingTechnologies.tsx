import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Loading = styled.div`
    width:150px;
    height:60px;
    ${tw`bg-gray-600 rounded-3xl ml-2 mr-2 mb-8`}
`
const Wrapper = styled.div`${tw`w-11/12 md:w-5/6 mx-auto mt-14 md:flex`}`


export default function LoadingTechnologies() {
    return (
        <Wrapper>
            {[...Array(10)].map((_,index) => (
                <Loading key={index} />
            ))}
        </Wrapper>
    )
}
