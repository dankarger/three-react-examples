import React from "react";
import { Canvas, useFrame } from '@react-three/fiber'


function MyRotatingBox() {
    const myMesh = React.useRef();
    // const myMesh =  useRef()
    useFrame((state, delta) => {
      const {rotation} = myMesh.current
        rotation.x += delta
        rotation.y += delta
    })

    return (
        <mesh ref={myMesh} rotation={[1,1,1]}>
            <boxBufferGeometry args={[2, 2, 2]}/>
            <meshPhongMaterial color="royalblue" />
        </mesh>
    );
}
export default MyRotatingBox