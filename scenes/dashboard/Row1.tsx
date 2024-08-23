import React from 'react'
import DashboardBox from '@/components/DashboardBox'

type Props = {}

const Row1 = (props: Props) => {
  return (
    <>
    <DashboardBox gridArea="a"></dashboardBox>
    <DashboardBox gridArea="b"></dashboardBox>
    <DashboardBox gridArea="c"></dashboardBox>
    </>
  )
}

export default Row1