import React, { memo } from "react"
import { FaGithub } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"

const ExternalLinks = () => {
  return (
    <div className="left-7 fixed bottom-5 text-label md:block hidden">
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jhonyvegacuya24@gmail.com"
        target="_blank"
        className="mb-3 inline-block"
        title="email"
      >
        <AiOutlineMail size={20} />
      </a>
      <a href="https://github.com/jhony-24" target="_blank" title="github">
        <FaGithub size={20} />
      </a>
    </div>
  )
}

export default memo(ExternalLinks)
