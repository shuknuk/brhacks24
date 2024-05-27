import '../styles/globals.css' // keeps tailwindcss styling for all pages
import '../styles/AboutFAQ.css';
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
