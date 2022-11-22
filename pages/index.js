import Head from 'next/head'
import Image from 'next/image'
import {useRef} from "react"
import { Canvas, useFrame } from '@react-three/fiber'

import styles from '../styles/Home.module.css'
import MyRotatingBox from "../components/MyRotationBox";


export default function Home() {
  // const myMesh =  useRef()
  // useFrame((state, delta) => {
  //   const {rotation} = myMesh.current
  //     rotation.x += delta
  //     rotation.y += delta
  // })
  return (
    <div>
        <h1>home</h1>
        <Canvas>
            <MyRotatingBox />
            <ambientLight intensity={0.1} />
            <directionalLight />
        </Canvas>
    </div>
         //
         //
         // <mesh  ref={myMesh} rotation = {[1,1,1]}>
         //   <boxGeometry />
         //   <meshBasicMaterial color="royalblue" />
         // </mesh>
      )


}
