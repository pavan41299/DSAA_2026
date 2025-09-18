import AboutTutorials from '@/components/Tutorials/AboutTutorials'
import DeadLines from '@/components/Tutorials/DeadLines'
import TutorialsBanner from '@/components/Tutorials/TutorialsBanner'

function page() {
  return (
    <>
      <TutorialsBanner />
      {/*  <DeadLines />     */}
      <AboutTutorials />
    </>
  )
}

export default page
