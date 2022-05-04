import React from 'react'
import dayjs from 'dayjs'

import useWeddingDate from '../utils/use-wedding-date'

const IntroTiles = () => {

  const { old, current, format } = useWeddingDate()

  return (
    <>
      <h1 className="cc-text-header-30 cc-layout--title">
          Michele &amp; Josh
      </h1>

      <p className="cc-text-body-20">We're getting married!</p>

      <p className="cc-text-body-20">It's finally here, we can't wait to see you!!</p>

      <p className="cc-text-body-10">
        <strong>When:</strong>&nbsp;
        <span className="cc-text-strike cc-text-no_wrap cc-util-margin-right-1">{dayjs(old, format).format('MMMM D, YYYY')}</span>
        <wbr />
        <span className="cc-text-no_wrap">{dayjs(current, format).format('MMMM D, YYYY')}</span>
      </p>

      <p className="cc-text-body-10">
        <strong>Where:</strong>&nbsp;
        <span>The Box House Hotel</span>
      </p>
    </>
  )
}

export default IntroTiles
