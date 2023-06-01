import '@/styles/globals.css'
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <div className='text-blue-800' style={{
      backgroundImage: `url("https://wallpaper-house.com/data/out/10/wallpaper2you_373651.jpg")`,
      // backgroundImage: `url("https://res.cloudinary.com/dk8ign4oc/image/upload/v1685385128/bg_bjyvmr.jpg")`,
      // backgroundImage: `url("https://res.cloudinary.com/dk8ign4oc/image/upload/v1685460456/bg_logo_bi7ayu.png")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      backgroundAttachment: 'fixed'
    }}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
