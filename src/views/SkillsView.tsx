import Detail from '@/components/Detail'
import TechnologyCard from '@/components/TechnologyCard'
import React from 'react'

type SkillsViewProps = {
  stack: Array<{ name: string; image: string }>
}

const SkillsView = ({ stack }: SkillsViewProps) => {
  return (
    <Detail title="Skills" subtitle="Some of my tech skills">
      <div className="grid gap-1 grid-cols-2 md:grid-cols-5">
        {stack.map((stackItem, index) => (
          <TechnologyCard
            key={index}
            text={stackItem.name}
            image={stackItem.image}
          />
        ))}
      </div>
    </Detail>
  )
}

export default SkillsView
