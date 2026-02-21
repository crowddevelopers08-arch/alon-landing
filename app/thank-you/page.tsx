import Navbar from '@/component/navbar'
import ThankYouPage from '@/component/thankpage'
import React, { useEffect } from 'react'
import Script from 'next/script'

const Page = () => {
  return (
    <div>
      <Script id="google-conversion" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-17927701020/spW_CLb-wPwbEJyEzORC',
            'value': 1.0,
            'currency': 'INR'
          });
        `}
      </Script>
      <Navbar />
      <ThankYouPage />
    </div>
  )
}

export default Page