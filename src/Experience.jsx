import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF } from '@react-three/drei'
import React, { useState, useEffect } from 'react';
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing'
export default function Experience() {
    const computer = useGLTF("https://xtrzhhqgwlrpeadwqpwp.supabase.co/storage/v1/object/public/models/cyberpunk_laptop_concept_design-transformed.glb?t=2023-07-24T04%3A40%3A08.134Z")
    function DoubleTap({ onDoubleTap, children }) {
        const [tap, setTap] = useState(false);
    
        useEffect(() => {
            let timeout;
            if (tap) {
                timeout = setTimeout(() => setTap(false), 300);
            }
            return () => clearTimeout(timeout);
        }, [tap]);
    
        return React.cloneElement(children, {
            onTouchStart: (e) => {
                if (!tap) {
                    setTap(true);
                } else {
                    onDoubleTap && onDoubleTap(e);
                    setTap(false);
                }
            }
        });
    }
    return <>

        <color args={['black']} />


        
        <PresentationControls
            global
            rotation={[0.13, 0.1, 0]}
            polar={[- 0.4, 0.2]}
            azimuth={[- 1, 0.75]}
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 400 }}
        >
            <Float rotationIntensity={0.4} >
                <rectAreaLight
                    width={2.5}
                    height={1.65}
                    intensity={65}
                    color={'offwhite'}
                    rotation={[- 0.1, Math.PI, 0]}
                    position={[0, 0.55, - 1.15]}
                />

<DoubleTap onDoubleTap={() => window.location.href = 'https://m2.poiesis.education'}>

                <primitive
                    object={computer.scene}
                    position-y={-0.2}
                    rotation-y={-0.7}
                    scale={0.01}
                   onDoubleClick={() => window.location.href = 'https://m2.poiesis.education'}
                >

                    <Html
                        transform
                        wrapperClass="htmlScreen"
                        distanceFactor={1.17}
                        position={[0, 50, - 7]}
                        rotation-x={- 0.356}
                        scale={80}
                       
                    >
                        <iframe src="https://m2.poiesis.education/" />
                    </Html>
                </primitive>
                </DoubleTap>


                <Text
                    font="./bangers-v20-latin-regular.woff"
                    fontSize={1}
                    position={[2, 0.75, 0.75]}
                    rotation-y={- 1.25}
                    maxWidth={2}
                >
                </Text>
            </Float>
        </PresentationControls>

        <ContactShadows
            position-y={- 1.4}
            opacity={0.4}
            scale={5}
            blur={2.4}
        />

    </>
}