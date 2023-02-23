import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF } from '@react-three/drei'

export default function Experience()
{
    const computer = useGLTF('https://xtrzhhqgwlrpeadwqpwp.supabase.co/storage/v1/object/public/models/cyberpunk_laptop_concept_design-transformed.glb?t=2023-02-17T07%3A55%3A16.342Z')
    
    return <>

        <color args={ [ '#063970' ] } attach="background" />

        <Environment preset="city" />
        
        <PresentationControls
            global
            rotation={ [ 0.13, 0.1, 0 ] }
            polar={ [ - 0.4, 0.2 ] }
            azimuth={ [ - 1, 0.75 ] }
            config={ { mass: 2, tension: 400 } }   
            snap={ { mass: 4, tension: 400 } }
        >
            <Float rotationIntensity={ 0.4 } >  
                <rectAreaLight
                    width={ 2.5 }
                    height={ 1.65 }
                    intensity={ 65 }
                    color={ '#' }
                    rotation={ [ - 0.1, Math.PI, 0 ] }
                    position={ [ 0, 0.55, - 1.15 ] }
                />

                <primitive
                    object={ computer.scene }
                    position-y={ - 0.2 }
                    scale={ 0.01}
                    rotation-x={ 0.13 }
                    rotation-y={ -0.5 }
                >
                    <Html
                        transform
                        wrapperClass="htmlScreen"
                        distanceFactor={ 1.17 }
                        position={ [ 0, 52.76, - 7 ] }
                        rotation-x={ - 0.356 }
                        scale={ [80,80,1]}
                    >
                        <iframe   src="https://m2.poiesis.education/" onClick={() => window.location.href = 'https://m2.poiesis.education'}/>

                    </Html>
                </primitive>

                <Text
                    font="./bangers-v20-latin-regular.woff"
                    fontSize={ 1 }
                    position={ [ 2, 0.75, 0.75 ] }
                    rotation-y={ - 1.25 }
                    maxWidth={ 2 }
                >
                </Text>
            </Float>
        </PresentationControls>

        <ContactShadows
            position-y={ - 1.4 }
            opacity={ 0.4 }
            scale={ 5 }
            blur={ 2.4 }
        />

    </>
}