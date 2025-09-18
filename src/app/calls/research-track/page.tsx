import AboutResearchTrack from '@/components/ResearchTrack/AboutResearchTrack'
import DeadLines from '@/components/ResearchTrack/DeadLines'
import ResearchBanner from '@/components/ResearchTrack/ResearchBanner'
import React from 'react'

function page() {
  return (
    <>
      <ResearchBanner />
    {/*  <DeadLines />     */}
      <AboutResearchTrack />
    </>
  )
}

export default page
