import React from 'react'
import AgentSection from '../Agent'
import ContactSection from '../Contact'
import CustomerSection from '../Customer'
import PolicieSection from '../Policies'

function ServicePage() {
  return (
    <div>
        <PolicieSection />
        <AgentSection />
        <CustomerSection />
        <ContactSection />
    </div>
  )
}

export default ServicePage