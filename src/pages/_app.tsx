// import App from 'next/app'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import { AnimatePresence } from 'framer-motion'
import * as Sentry from '@sentry/node'
import theme from '../theme'
import Head from 'next/head'
import Header from '@components/Header'

Sentry.init({
  dsn: process.env.SENTRY_DSN,
})

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app'
import 'firebase/auth'

Sentry.init({
  dsn: process.env.SENTRY_DSN,
})

// const firebaseApp = firebase.initializeApp(firebaseConfig) need to get config from env

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta
          name="theme-color"
          key="theme-color"
          content={theme.colors.base[0]}
        />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </ThemeProvider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
