import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ScheduleContent from "../components/schedule-content"

const Schedule = () => {

  return (
    <>
      <SEO
        title={`Josh & Michele's wedding schedule!`}
        description={`Your one stop shop for where the party's happening!`}
      />

      <Layout contentPage>
        <ScheduleContent />
      </Layout>
    </>
  )
}

export default Schedule
