import AboutDoctoralTrack from '@/components/DoctoralTrack/AboutDoctoralTrack'
import DoctoralBanner from '@/components/DoctoralTrack/DoctoralBanner'
import AboutIndustryTrack from '@/components/IndustryTrack/AboutIndustryTrack'
import DeadLines from '@/components/IndustryTrack/DeadLines'
import IndustryBanner from '@/components/IndustryTrack/IndustryBanner'
function page() {
  return (
    <>
      <DoctoralBanner/>
      {/*  <DeadLines />     */}
      <AboutDoctoralTrack />
    </>
  )
}

export default page
