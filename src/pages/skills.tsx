import Navigator from '@/layouts/Navigator'
import SkillsView from '@/views/SkillsView'
import type { NextPage } from 'next'

type SkillsProps = {
  stack: Array<{ name: string; image: string }>
}

const Skills: NextPage<SkillsProps> = ({ stack }) => {
  return (
    <Navigator>
      <SkillsView stack={stack} />
    </Navigator>
  )
}

export async function getServerSideProps() {
  const stack = await require('@/assets/stack.json')
  return {
    props: {
      stack,
    },
  }
}

export default Skills
