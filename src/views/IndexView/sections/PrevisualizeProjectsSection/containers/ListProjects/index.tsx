import React from 'react'
import styled from 'styled-components'

const ProjectCard = () => {
    return(
        <div className="bg-white shadow-lg flex mb-5 p-5 cursor-pointer rounded-2xl">
            <img className="w-12 h-12 rounded-full" src="https://cdn.pixabay.com/photo/2020/12/09/21/36/charles-bridge-5818730__340.jpg" />
            <div className="block pl-4">
                <p className="font-bold text-sm select-none">Facebook clone - UI</p>
                <p className="text-sm text-gray-400 select-none">Web application of Facebook with diferent screens</p>
            </div>
        </div>
    )
}

const Wrapper = styled.div`
    width:400px;
    &::-webkit-scrollbar {
        width:7px;
    }
    &::-webkit-scrollbar-thumb {
        background-color:rgba(0,0,0,.2);
        border-radius:10px
    }
`

interface SmoothWrapperProps {
    position : "top" | "bottom"
}
const color = "var(--primary-color)";
const SmoothWrapper = styled.div<SmoothWrapperProps>`
    position:absolute;
    background:${props => props.position === "top" && `linear-gradient(180deg,${color},transparent);`};
    background:${props => props.position === "bottom" && `linear-gradient(0deg,${color},transparent);`};
    top:${props => props.position === "top" && 0};
    bottom:${props => props.position === "bottom" && 0};
    width:100%;
    height:50px;
`


const ListProjectsWrapper = styled.div`
    transform: perspective(20px)rotateY(1deg);
`

export default function ListProjects() {
    return (
        <ListProjectsWrapper className="relative flex mt-auto mb-auto h-4/5 pl-10">
            <Wrapper className="flex flex-col h-full overflow-y-auto pr-6">
                {Array(10).fill(0).map((e,i)=><ProjectCard key={i} />)}
            </Wrapper>
            <SmoothWrapper position="top" />
            <SmoothWrapper position="bottom" />
        </ListProjectsWrapper>
    )
}
