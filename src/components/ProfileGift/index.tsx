import styled from 'styled-components'
import GradientBox from '../GradientBox'

const Box = styled(GradientBox)`
  width: 680px;
  height: 200px;
  @media screen and (max-width: 768px) {
    width: auto;
  }
`

const Image = styled.img`
  transform: translateY(-40%);
`
const CircleBox = styled.div`
  width: 500px;
  height: 500px;
  transform: translateY(-40%);
`

const ProfileGift = () => {
  return (
    <Box className=" flex items-stretch mt-32 mx-auto">
      <CircleBox className="border-tertiary hidden md:block absolute top-0 mx-auto left-0 right-0 border-4 rounded-full" />
      <Image
        src="/profile.jpg"
        alt="Frontend Developer profile"
        className="rounded-full h-60 w-60 absolute mx-auto left-0 right-0 top-0"
      />
    </Box>
  )
}

export default ProfileGift
