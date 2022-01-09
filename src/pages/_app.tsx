import 'nprogress/nprogress.css'
import '../../styles/globals.scss'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import NProgress from 'nprogress'
import { useEffect } from 'react'

NProgress.configure({
  showSpinner: false,
})

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => {
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])
  return <Component {...pageProps} />
}

export default MyApp
