import React from 'react'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import useNavigateBetweenProjects from '../../hooks/useNavigateBetweenProjects';
import ChevronMove from './components/ChevronMove';

export default function ChevronsChangeProject() {
    const { onNext, onPrevious } = useNavigateBetweenProjects();
    return(
      <div className="flex justify-between mt-5 md:mt-0">
        <ChevronMove onClick={onPrevious}  position="left"><BsChevronLeft/></ChevronMove>
        <ChevronMove onClick={onNext} position="right"><BsChevronRight/></ChevronMove>
      </div>
    )
}
