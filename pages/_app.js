import { Canvas, useFrame } from '@react-three/fiber'
import '../styles/globals.css'
import MyRotatingBox from "../components/MyRotationBox";

function MyApp({ Component, pageProps }) {
  return(
   <>
       <Component {...pageProps} />

   </>
  )
}

export default MyApp
