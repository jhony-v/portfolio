import styled from 'styled-components'

const Box = styled.div`
  width: 680px;
  height: 200px;
`

const Image = styled.img`
  transform: translateY(-40%);
`
const CircleBox = styled.div`
  width: 500px;
  height: 500px;
  z-index: -1;
  transform: translateY(-40%);
`

const ProfileGift = () => {
  return (
    <Box className=" flex items-stretch relative mt-32">
      <div className="bg-secondary w-full" />
      <div className="bg-tertiary w-full" />
      <CircleBox className="border-tertiary absolute top-0 mx-auto left-0 right-0 border-4 rounded-full" />
      <Image
        src="/profile.jpg"
        alt="Frontend Developer profile"
        className="rounded-full h-60 w-60 absolute mx-auto left-0 right-0 top-0 z-10"
      />
    </Box>
  )
}

export default ProfileGift
