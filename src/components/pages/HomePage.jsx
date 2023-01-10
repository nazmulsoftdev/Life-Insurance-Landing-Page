import React from 'react'
import AgentSection from '../Agent'
import ContactSection from '../Contact'
import ContentSection from '../Content'
import CustomerSection from '../Customer'
import HeroSection from '../Hero'
import PolicieSection from '../Policies'

function HomePage() {
  return (
    <div>
        <HeroSection />
        <PolicieSection />
        <AgentSection />
        <ContentSection />
        <CustomerSection />
        <ContactSection />
    </div>
  )
}

export default HomePage