import React from 'react'
import styled, { keyframes } from 'styled-components'


const keyframesLoading = keyframes`
    from {
        transform: rotate(360deg);
    }
`

const Loading = styled.div`
    width:30px;
    height:30px;
    border:2px solid rgba(0,0,0,.1);
    border-left-color:var(--color-primary);
    border-radius:100%;
    display:inline-block;
    animation:${keyframesLoading} .4s infinite linear;
`

const CircleLoading = ({className}:{className?:string}) => {
    return (
        <Loading className={className} />
    )
}

export default CircleLoading
