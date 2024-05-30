// _app.js

import '../styles/globals.css' // keeps tailwindcss styling for all pages
import '../styles/faq.css' // styling for the faq page
import NavBar from '../components/NavBar';

function MyApp({ Component, pageProps }) {
  return (
    <>
    {/* <NavBar />   */}
    <Component {...pageProps} />
    </>

  )
}

export default MyApp
