import Head from 'next/head'
import Image from 'next/image'
import {useRef} from "react"
import SphereCustom from "../components/Sphere";
import { Canvas, useFrame } from '@react-three/fiber'

import styles from '../styles/Home.module.css'
import MyRotatingBox from "../components/MyRotationBox";

import TwoSquares from "../components/TwoSquares";

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
        <h1>second</h1>
        <TwoSquares />
        <h1>Third</h1>
        <SphereCustom />
    </div>

      )


}
