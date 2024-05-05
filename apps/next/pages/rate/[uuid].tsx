import { DetailsScreen } from 'app/features/coffee/detailsScreen'
import { RateScreen } from 'app/features/rate/rateScreen'

import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>Rate Coffee</title>
      </Head>
      <RateScreen />
    </>
  )
}
