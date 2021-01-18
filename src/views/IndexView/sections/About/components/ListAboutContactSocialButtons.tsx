import React, { Fragment } from "react"
import { FaLinkedinIn, FaTwitter, FaDev, FaGithub } from "react-icons/fa"
import ExternalLinkSocialButton from "common/Buttons/ExternalLinkSocialButton"
import { config, useTrail } from "react-spring"
import useVisibility from "hooks/useVisibility"

const linksAboutContact = [
  {
    href: "https://www.linkedin.com/in/jhony-vega/",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://github.com/jhony-24",
    icon: <FaGithub />,
  },
  {
    href: "https://dev.to/jhony24",
    icon: <FaDev />,
  },
  {
    href: "https://twitter.com/JhonyV01",
    icon: <FaTwitter />,
  },
]

const ListAboutContactSocialButtons = () => {
  const { ref, visible } = useVisibility();  
  const transitions = useTrail(linksAboutContact.length, {
    left: visible ? "0px" : "60px",
    opacity : Number(visible),
    config : config.wobbly
  })
  return (
    <div ref={ref} className="about__contact flex justify-between md-100:justify-self-auto items-center relative sm:flex-col flex-row mt-10 mb-8 md:mb-0 md:mt-0">
      {transitions.map((styleProps, index) => {
        let item = linksAboutContact[index];
        return(
          <ExternalLinkSocialButton key={index} style={styleProps} href={item.href} title={item.href}>
            {item.icon}
          </ExternalLinkSocialButton>
        )
      })}
    </div>
  )
}

export default ListAboutContactSocialButtons
