import AboutLLMTrack from '@/components/LLM/AboutLLMTrack'
import LLMBanner from '@/components/LLM/LLMBanner'
import DeadLines from '@/components/ApplicationsTrack/DeadLines'
import React from 'react'

function page() {
  return (
    <>
      <LLMBanner />
      {/*  <DeadLines />     */}
      <AboutLLMTrack />
    </>
  )
}

export default page
