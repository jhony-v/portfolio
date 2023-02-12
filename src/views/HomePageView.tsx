import ActionableButton from '@/components/ActionableButton'
import LinkButton from '@/components/LinkButton'
import OutstandingWelcome from '@/components/OutstandingWelcome'
import ProfileGift from '@/components/ProfileGift'
import TechnologiesChain from '@/components/TechnologiesChain'
import { useRouter } from 'next/router'

const HomePageView = () => {
  const router = useRouter()
  return (
    <div>
      <section className="lg:flex gap-8">
        <div>
          <h1 className="text-white text-5xl md:text-6xl font-bold leading-relaxed">
            Hello everyone, I'm a Frontend Engineer enthusiast
          </h1>
          <p className="text-neutral my-12">
            I'm Jhony 💻, passionate about programming and web development. I
            enjoy creating projects magically interesting by focusing on
            architecture, code quality, and performance, also exploring new
            manners to do stuff 🚀
          </p>
          <div className="inline-flex items-center gap-7 flex-col sm:flex-row mb-14">
            <ActionableButton onClick={() => router.push('/projects')}>
              View projects
            </ActionableButton>
            <LinkButton
              href="https://github.com/jhony-v?tab=repositories"
              text="Explore open source code"
            />
          </div>
          <div className="flex items-center">
            <TechnologiesChain />
            <p className="text-neutral ml-2">+ Technologies...</p>
          </div>
        </div>
        <div>
          <ProfileGift />
        </div>
      </section>
      <OutstandingWelcome />
    </div>
  )
}

export default HomePageView
