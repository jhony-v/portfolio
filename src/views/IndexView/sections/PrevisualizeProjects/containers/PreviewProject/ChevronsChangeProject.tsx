import React, { useEffect } from "react"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import startInClient from "utils/startInClient"
import useNavigateBetweenProjects from "../../hooks/useNavigateBetweenProjects"
import ChevronMove from "./components/ChevronMove"

export default function ChevronsChangeProject() {
  const { onNext, onPrevious } = useNavigateBetweenProjects()

  useEffect(() => {
    startInClient(() => {
      const handler = (event: KeyboardEvent) => {
        switch (event.key) {
          case "ArrowLeft":
            onPrevious();
            break
          case "ArrowRight":
            onNext();
            break
        }
      }
      window.addEventListener("keyup", handler)
      return () => {
        window.removeEventListener("keyup", handler)
      }
    })
  }, [])

  return (
    <div className="flex justify-between mt-5 md:mt-0">
      <ChevronMove onClick={onPrevious} position="left">
        <BsChevronLeft />
      </ChevronMove>
      <ChevronMove onClick={onNext} position="right">
        <BsChevronRight />
      </ChevronMove>
    </div>
  )
}
