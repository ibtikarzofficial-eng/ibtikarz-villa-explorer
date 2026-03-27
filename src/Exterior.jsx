import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

// 1. Accept the wallColor prop
export default function Exterior({ wallColor, ...props }) {
  const { nodes, materials } = useGLTF('/exterior.glb')

  // THE CHEAT CODE: This forces the material to update instantly when you click a UI button
  useEffect(() => {
    if (materials.Material_24 && wallColor) {
      materials.Material_24.color.set(wallColor)
    }
  }, [wallColor, materials])

  return (
    <group {...props} dispose={null}>
// ... rest of your code stays exactly the same
      <group scale={0.01}>
        <group position={[-250.991, 495.544, 208.334]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh castShadow receiveShadow geometry={nodes['Shape002_Material_#246_0'].geometry} material={materials.Material_246} position={[206.349, 436.167, -200.497]} />
        </group>
        <group position={[-378.722, 495.544, 208.988]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh castShadow receiveShadow geometry={nodes['Shape003_Material_#246_0'].geometry} material={materials.Material_246} position={[206.349, 436.167, -200.497]} />
        </group>
        <group position={[-433.276, 495.544, -24.573]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
          <mesh castShadow receiveShadow geometry={nodes['Shape004_Material_#246_0'].geometry} material={materials.Material_246} position={[206.349, 436.167, -200.497]} />
        </group>
        <group position={[-433.276, 155.467, 94.203]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
          <mesh castShadow receiveShadow geometry={nodes['Shape005_Material_#246_0'].geometry} material={materials.Material_246} position={[206.349, 436.167, -200.497]} />
        </group>
        <group position={[-433.276, 155.467, -148.405]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
          <mesh castShadow receiveShadow geometry={nodes['Shape006_Material_#246_0'].geometry} material={materials.Material_246} position={[206.349, 436.167, -200.497]} />
        </group>
        <group position={[-537.184, 155.467, -375.636]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
          <mesh castShadow receiveShadow geometry={nodes['Shape007_Material_#246_0'].geometry} material={materials.Material_246} position={[206.349, 436.167, -200.497]} />
        </group>
        <group position={[-490.875, 495.544, -564.144]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
          <mesh castShadow receiveShadow geometry={nodes['Shape008_Material_#246_0'].geometry} material={materials.Material_246} position={[206.349, 436.167, -200.497]} />
        </group>
        <group position={[-490.875, 495.544, -771.814]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
          <mesh castShadow receiveShadow geometry={nodes['Shape009_Material_#246_0'].geometry} material={materials.Material_246} position={[206.349, 436.167, -200.497]} />
        </group>
        <group position={[-431.614, 175.522, -758.454]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
          <mesh castShadow receiveShadow geometry={nodes['Shape010_Material_#246_0'].geometry} material={materials.Material_246} position={[206.349, 436.167, -200.497]} />
        </group>
        <group position={[-431.638, 175.407, -562.174]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
          <mesh castShadow receiveShadow geometry={nodes['Shape011_Material_#246_0'].geometry} material={materials.Material_246} position={[206.349, 436.167, -200.497]} />
        </group>
        <group position={[-250.991, 175.44, 208.988]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh castShadow receiveShadow geometry={nodes['Shape012_Material_#246_0'].geometry} material={materials.Material_246} position={[206.349, 436.167, -200.497]} />
        </group>
        <group position={[-6.553, 502.126, 322.224]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh castShadow receiveShadow geometry={nodes['Shape013_Material_#246_0'].geometry} material={materials.Material_246} position={[206.349, 436.167, -200.497]} />
        </group>
        <group position={[425.724, 502.126, 199.608]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
          <mesh castShadow receiveShadow geometry={nodes['Shape014_Material_#246_0'].geometry} material={materials.Material_246} position={[206.349, 436.167, -200.497]} />
        </group>
        <group position={[425.724, 181.461, 199.608]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
          <mesh castShadow receiveShadow geometry={nodes['Shape015_Material_#246_0'].geometry} material={materials.Material_246} position={[206.349, 436.167, -200.497]} />
        </group>
        <group position={[521.451, 502.126, -127.346]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
          <mesh castShadow receiveShadow geometry={nodes['Shape016_Material_#246_0'].geometry} material={materials.Material_246} position={[206.349, 436.167, -200.497]} />
        </group>
        <group position={[521.451, 182.15, -127.346]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
          <mesh castShadow receiveShadow geometry={nodes['Shape017_Material_#246_0'].geometry} material={materials.Material_246} position={[206.349, 436.167, -200.497]} />
        </group>
        <group position={[528.485, 182.15, -500.303]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
          <mesh castShadow receiveShadow geometry={nodes['Shape018_Material_#246_0'].geometry} material={materials.Material_246} position={[206.349, 436.167, -200.497]} />
        </group>
        <group position={[655.794, 502.126, -403.955]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
          <mesh castShadow receiveShadow geometry={nodes['Shape019_Material_#246_0'].geometry} material={materials.Material_246} position={[206.349, 436.167, -200.497]} />
        </group>
        <group position={[391.661, 502.126, -845.345]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
          <mesh castShadow receiveShadow geometry={nodes['Shape020_Material_#246_0'].geometry} material={materials.Material_246} position={[206.349, 436.167, -200.497]} />
        </group>
        <group position={[387.475, 181.522, -845.345]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
          <mesh castShadow receiveShadow geometry={nodes['Shape021_Material_#246_0'].geometry} material={materials.Material_246} position={[206.349, 436.167, -200.497]} />
        </group>
        <group position={[-56.435, 181.522, -956.398]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
          <mesh castShadow receiveShadow geometry={nodes['Shape022_Material_#246_0'].geometry} material={materials.Material_246} position={[206.349, 436.167, -200.497]} />
        </group>
        <group position={[-80.529, 499.267, -1012.903]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
          <mesh castShadow receiveShadow geometry={nodes['Shape023_Material_#246_0'].geometry} material={materials.Material_246} position={[206.349, 436.167, -200.497]} />
        </group>
        <group position={[-495.053, 494.967, -570.051]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh castShadow receiveShadow geometry={nodes['Box015_Material_#6_0'].geometry} material={materials.Material_6} position={[-64.379, -320.027, -0.472]} />
        </group>
        <group position={[-490.844, 494.967, -857.152]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh castShadow receiveShadow geometry={nodes['Box016_Material_#6_0'].geometry} material={materials.Material_6} position={[-64.379, -320.027, -0.472]} />
        </group>
        <group position={[-433.754, 175.187, -563.178]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh castShadow receiveShadow geometry={nodes['Box017_Material_#6_0'].geometry} material={materials.Material_6} position={[-64.379, -320.027, -0.472]} />
        </group>
        <group position={[-433.734, 174.711, -841.737]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh castShadow receiveShadow geometry={nodes['Box018_Material_#6_0'].geometry} material={materials.Material_6} position={[-64.379, -320.027, -0.472]} />
        </group>
        <group position={[-100.16, 174.711, -958.073]} rotation={[Math.PI, 0, -Math.PI]}>
          <mesh castShadow receiveShadow geometry={nodes['Box019_Material_#6_0'].geometry} material={materials.Material_6} position={[-64.379, -320.027, -0.472]} />
        </group>
        <group position={[-100.16, 494.629, -1011.864]} rotation={[Math.PI, 0, -Math.PI]}>
          <mesh castShadow receiveShadow geometry={nodes['Box020_Material_#6_0'].geometry} material={materials.Material_6} position={[-64.379, -320.027, -0.472]} />
        </group>
        <group position={[343.391, 494.629, -846.733]} rotation={[Math.PI, 0, -Math.PI]}>
          <mesh castShadow receiveShadow geometry={nodes['Box021_Material_#6_0'].geometry} material={materials.Material_6} position={[-64.379, -320.027, -0.472]} />
        </group>
        <group position={[343.391, 175.6, -846.916]} rotation={[Math.PI, 0, -Math.PI]}>
          <mesh castShadow receiveShadow geometry={nodes['Box022_Material_#6_0'].geometry} material={materials.Material_6} position={[-64.379, -320.027, -0.472]} />
        </group>

        {/* --- DYNAMIC WHITE WALLS START --- */}
        <mesh castShadow receiveShadow geometry={nodes['Line009_Material_#24_0'].geometry} position={[410.785, 318.678, 298.715]} rotation={[-Math.PI / 2, 0, 0]}>
          <meshStandardMaterial {...materials.Material_24} color={wallColor} />
        </mesh>

        <mesh castShadow receiveShadow geometry={nodes['Line013_Material_#24_0'].geometry} position={[-403.682, 318.678, -169.599]} rotation={[-Math.PI / 2, 0, 0]}>
          <meshStandardMaterial {...materials.Material_24} color={wallColor} />
        </mesh>

        <mesh castShadow receiveShadow geometry={nodes['Line011_Material_#24_0'].geometry} position={[367.276, 318.678, -722.697]} rotation={[-Math.PI / 2, 0, 0]}>
          <meshStandardMaterial {...materials.Material_24} color={wallColor} />
        </mesh>

        <mesh castShadow receiveShadow geometry={nodes['Line012_Material_#24_0'].geometry} position={[-194.327, 318.678, -662.297]} rotation={[-Math.PI / 2, 0, 0]}>
          <meshStandardMaterial {...materials.Material_24} color={wallColor} />
        </mesh>

        <mesh castShadow receiveShadow geometry={nodes['Box002_Material_#24_0'].geometry} position={[-138.993, 552.417, 306.818]}>
          <meshStandardMaterial {...materials.Material_24} color={wallColor} />
        </mesh>

        <mesh castShadow receiveShadow geometry={nodes['Line002_Material_#24_0'].geometry} position={[379.002, 0, -696.035]} rotation={[-Math.PI / 2, 0, 0]}>
          <meshStandardMaterial {...materials.Material_24} color={wallColor} />
        </mesh>

        <mesh castShadow receiveShadow geometry={nodes['Line003_Material_#24_0'].geometry} position={[461.139, 0, -107.629]} rotation={[-Math.PI / 2, 0, 0]}>
          <meshStandardMaterial {...materials.Material_24} color={wallColor} />
        </mesh>

        <mesh castShadow receiveShadow geometry={nodes['Line006_Material_#24_0'].geometry} position={[-18.236, 0, 214.676]} rotation={[-Math.PI / 2, 0, 0]}>
          <meshStandardMaterial {...materials.Material_24} color={wallColor} />
        </mesh>

        <mesh castShadow receiveShadow geometry={nodes['Line007_Material_#24_0'].geometry} position={[-400.781, 0, 160.51]} rotation={[-Math.PI / 2, 0, 0]}>
          <meshStandardMaterial {...materials.Material_24} color={wallColor} />
        </mesh>

        <mesh castShadow receiveShadow geometry={nodes['Line008_Material_#24_0'].geometry} position={[-287.629, 0, -186.698]} rotation={[-Math.PI / 2, 0, 0]}>
          <meshStandardMaterial {...materials.Material_24} color={wallColor} />
        </mesh>

        <mesh castShadow receiveShadow geometry={nodes['Line001_Material_#24_0'].geometry} position={[-146.531, 0, -627.816]} rotation={[-Math.PI / 2, 0, 0]}>
          <meshStandardMaterial {...materials.Material_24} color={wallColor} />
        </mesh>
        {/* --- DYNAMIC WHITE WALLS END --- */}


        {/* --- UNTOUCHED ACCENTS & DARK WALLS --- */}
        <mesh castShadow receiveShadow geometry={nodes['Line010_Material_#24_0'].geometry} material={materials.Material_24} position={[338.945, 318.678, -322.748]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Line014_Material_#248_0'].geometry} material={materials.Material_248} position={[-26.044, 320.008, -223.463]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Line015_Material_#250_0'].geometry} material={materials.Material_250} position={[-26.044, 640.405, -223.463]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes.Line016__0.geometry} material={materials.Line016__0} position={[-26.044, 0.127, -223.463]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Line017_Material_#253_0'].geometry} material={materials.Material_253} position={[-61.199, 513.345, -327.91]} />
        <mesh castShadow receiveShadow geometry={nodes['Box001_Material_#253_0'].geometry} material={materials.Material_253} position={[-241.193, 575.388, 201.374]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Line018_Material_#248_0'].geometry} material={materials.Material_248} position={[-26.044, 25.059, -223.463]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box003_Material_#12_0'].geometry} material={materials.Material_12} position={[58.699, 0, 393.953]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Line019_Material_#252_0'].geometry} material={materials.Material_252} position={[13.187, 55.151, 340.961]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Line020_Material_#252_0'].geometry} material={materials.Material_252} position={[13.187, 36.735, 380.361]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Line021_Material_#252_0'].geometry} material={materials.Material_252} position={[13.187, 20.721, 380.361]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Line022_Material_#252_0'].geometry} material={materials.Material_252} position={[13.187, 12.307, 380.361]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes.Rectangle001_wall_0.geometry} material={materials.wall} position={[135.531, 0, -291.139]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Line023_Material_#253_0'].geometry} material={materials.Material_253} position={[512.418, 425.231, -271.578]} rotation={[0, Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box004_Material_#244_0'].geometry} material={materials.Material_244} position={[414.064, 0, 346.58]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box005_Material_#244_0'].geometry} material={materials.Material_244} position={[394.336, 0, 346.58]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box006_Material_#244_0'].geometry} material={materials.Material_244} position={[374.608, 0, 346.58]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box007_Material_#12_0'].geometry} material={materials.Material_12} position={[-278.576, 668.66, -365.047]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Shape001_Material_#246_0'].geometry} material={materials.Material_246} position={[461.139, 0, -94.879]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box008_Material_#6_0'].geometry} material={materials.Material_6} position={[-251.014, 175.736, 208.569]} />
        <mesh castShadow receiveShadow geometry={nodes['Box009_Material_#6_0'].geometry} material={materials.Material_6} position={[-442.501, 490.915, 204.103]} />
        <mesh castShadow receiveShadow geometry={nodes['Box010_Material_#6_0'].geometry} material={materials.Material_6} position={[-306.966, 490.915, 204.103]} />
        <mesh castShadow receiveShadow geometry={nodes['Box011_Material_#6_0'].geometry} material={materials.Material_6} position={[-431.676, 496.184, -94.192]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box012_Material_#6_0'].geometry} material={materials.Material_6} position={[-430.158, 174.94, 22.619]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box013_Material_#6_0'].geometry} material={materials.Material_6} position={[-430.158, 174.94, -219.409]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box014_Material_#6_0'].geometry} material={materials.Material_6} position={[-533.939, 174.94, -434.654]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Line024_Material_#253_0'].geometry} material={materials.Material_253} position={[-414.509, 575.123, -972.994]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box023_Material_#242_0'].geometry} material={materials.Material_242} position={[-469.844, 0, 58.49]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box024_Material_#244_0'].geometry} material={materials.Material_244} position={[-69.7, 662.3, -229.197]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box025_Material_#244_0'].geometry} material={materials.Material_244} position={[-100.72, 662.3, -229.197]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box026_Material_#244_0'].geometry} material={materials.Material_244} position={[-131.739, 662.3, -229.197]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box027_Material_#244_0'].geometry} material={materials.Material_244} position={[-162.758, 662.3, -229.197]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box028_Material_#244_0'].geometry} material={materials.Material_244} position={[-193.778, 662.3, -229.197]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box029_Material_#244_0'].geometry} material={materials.Material_244} position={[-229.312, 662.3, -229.197]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box030_Material_#244_0'].geometry} material={materials.Material_244} position={[-264.846, 662.3, -229.197]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box031_Material_#244_0'].geometry} material={materials.Material_244} position={[-300.38, 662.3, -229.197]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box032_Material_#244_0'].geometry} material={materials.Material_244} position={[-335.915, 662.3, -229.197]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box033_Material_#244_0'].geometry} material={materials.Material_244} position={[-371.449, 662.3, -229.197]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box034_Material_#244_0'].geometry} material={materials.Material_244} position={[-406.983, 662.3, -229.197]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box035_Material_#244_0'].geometry} material={materials.Material_244} position={[-445.021, 662.3, -229.197]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box036_Material_#245_0'].geometry} material={materials.Material_245} position={[38.611, 171.584, 306.182]} />
        <mesh castShadow receiveShadow geometry={nodes['Box037_Material_#6_0'].geometry} material={materials.Material_6} position={[42.136, 200.724, 310.686]} />
        <mesh castShadow receiveShadow geometry={nodes['Sphere001_Material_#245_0'].geometry} material={materials.Material_245} position={[-20.199, 155.929, 319.506]} rotation={[-Math.PI / 2, 0, 0]} scale={0.321} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder001_Material_#243_0'].geometry} material={materials.Material_243} position={[-18.017, 155.929, 320.017]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={0.321} />
        <mesh castShadow receiveShadow geometry={nodes['Box038_Material_#6_0'].geometry} material={materials.Material_6} position={[507.275, 175.736, -405.901]} rotation={[0, Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box039_Material_#6_0'].geometry} material={materials.Material_6} position={[-354.785, 478.782, -117.613]} rotation={[0, Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Shape024_Material_#2_0'].geometry} material={materials.Material_2} position={[-483.057, 303.045, -407.747]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Line025_Material_#246_0'].geometry} material={materials.Material_246} position={[82.086, 716.245, -217.597]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box040_Material_#244_0'].geometry} material={materials.Material_244} position={[-485.472, 662.3, -229.197]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box041_Material_#244_0'].geometry} material={materials.Material_244} position={[-516.695, 662.3, -229.197]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Object001_Material_#24_0'].geometry} material={materials.Material_24} position={[338.945, 318.678, -322.748]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Object002_Material_#24_0'].geometry} material={materials.Material_24} position={[461.139, 0, -107.629]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder002_Material_#249_0'].geometry} material={materials.Material_249} position={[-91.967, 0, 339.436]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder011_Material_#249_0'].geometry} material={materials.Material_249} position={[-95.223, -23.462, 218.711]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder012_Material_#249_0'].geometry} material={materials.Material_249} position={[-95.223, -23.462, 282.867]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder013_Material_#249_0'].geometry} material={materials.Material_249} position={[-274.189, -23.462, 282.867]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder014_Material_#249_0'].geometry} material={materials.Material_249} position={[-434.083, -23.462, 282.867]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder015_Material_#249_0'].geometry} material={materials.Material_249} position={[-504.87, -23.462, 282.867]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder016_Material_#249_0'].geometry} material={materials.Material_249} position={[-504.87, -23.462, 219.551]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder017_Material_#249_0'].geometry} material={materials.Material_249} position={[-434.808, -23.462, 219.551]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder018_Material_#249_0'].geometry} material={materials.Material_249} position={[-276.509, -23.462, 219.551]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder019_Material_#249_0'].geometry} material={materials.Material_249} position={[-504.87, -23.462, -4.944]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder020_Material_#249_0'].geometry} material={materials.Material_249} position={[-434.808, -23.462, -4.944]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder021_Material_#249_0'].geometry} material={materials.Material_249} position={[-504.87, -23.462, -229.388]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder022_Material_#249_0'].geometry} material={materials.Material_249} position={[-434.808, -23.462, -229.388]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder023_Material_#249_0'].geometry} material={materials.Material_249} position={[-590.269, -23.462, -229.388]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder024_Material_#249_0'].geometry} material={materials.Material_249} position={[-590.269, -23.462, -159.161]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder025_Material_#249_0'].geometry} material={materials.Material_249} position={[-520.435, -23.462, -159.161]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder026_Material_#249_0'].geometry} material={materials.Material_249} position={[-590.269, -23.462, -502.208]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder027_Material_#249_0'].geometry} material={materials.Material_249} position={[-590.269, -23.462, -574.337]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder028_Material_#249_0'].geometry} material={materials.Material_249} position={[-520.704, -23.462, -574.337]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder029_Material_#249_0'].geometry} material={materials.Material_249} position={[-520.999, -23.462, -502.082]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder030_Material_#249_0'].geometry} material={materials.Material_249} position={[-434.65, -23.462, -510.186]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder031_Material_#249_0'].geometry} material={materials.Material_249} position={[-504.189, -23.462, -510.186]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder032_Material_#249_0'].geometry} material={materials.Material_249} position={[-434.65, -23.462, -718.734]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder033_Material_#249_0'].geometry} material={materials.Material_249} position={[-504.189, -23.462, -718.734]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder034_Material_#249_0'].geometry} material={materials.Material_249} position={[-434.65, -23.462, -940.052]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder035_Material_#249_0'].geometry} material={materials.Material_249} position={[-504.189, -23.462, -940.052]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Rectangle002_Material_#249_0'].geometry} material={materials.Material_249} position={[-469.447, 39.992, -724.974]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Rectangle003_Material_#249_0'].geometry} material={materials.Material_249} position={[-555.959, 39.992, -724.974]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Rectangle004_Material_#249_0'].geometry} material={materials.Material_249} position={[-555.498, 39.992, -652.135]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Rectangle005_Material_#249_0'].geometry} material={materials.Material_249} position={[-469.03, 39.992, -313.491]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Rectangle006_Material_#249_0'].geometry} material={materials.Material_249} position={[-690.918, 39.992, 253.728]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder036_Material_#249_0'].geometry} material={materials.Material_249} position={[-83.487, 345.654, 364.02]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder037_Material_#249_0'].geometry} material={materials.Material_249} position={[-83.487, 345.654, 344.817]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder038_Material_#249_0'].geometry} material={materials.Material_249} position={[-183.175, 345.654, 364.02]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder039_Material_#249_0'].geometry} material={materials.Material_249} position={[-282.862, 345.654, 364.02]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder040_Material_#249_0'].geometry} material={materials.Material_249} position={[-382.55, 345.654, 364.02]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder041_Material_#249_0'].geometry} material={materials.Material_249} position={[-481.48, 345.654, 364.02]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder042_Material_#249_0'].geometry} material={materials.Material_249} position={[-481.48, 345.654, 296.668]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder043_Material_#249_0'].geometry} material={materials.Material_249} position={[-492.731, 345.654, 21.968]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder044_Material_#249_0'].geometry} material={materials.Material_249} position={[-561.495, 345.654, 21.968]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder045_Material_#249_0'].geometry} material={materials.Material_249} position={[-561.495, 345.654, -109.877]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder046_Material_#249_0'].geometry} material={materials.Material_249} position={[-561.495, 345.654, -245.804]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder047_Material_#249_0'].geometry} material={materials.Material_249} position={[-536.193, 345.654, -245.804]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Line030_Material_#249_0'].geometry} material={materials.Material_249} position={[-282.23, 411.236, 340.079]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder048_Material_#249_0'].geometry} material={materials.Material_249} position={[-481.48, 345.654, 227.755]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Line031_Material_#249_0'].geometry} material={materials.Material_249} position={[-535.4, 410.77, -111.871]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder049_Material_#249_0'].geometry} material={materials.Material_249} position={[537.606, 363.164, -61.775]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder050_Material_#249_0'].geometry} material={materials.Material_249} position={[620.616, 363.164, -61.775]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder051_Material_#249_0'].geometry} material={materials.Material_249} position={[708.542, 363.164, -61.775]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder052_Material_#249_0'].geometry} material={materials.Material_249} position={[708.542, 363.164, -235.096]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder053_Material_#249_0'].geometry} material={materials.Material_249} position={[708.542, 363.164, -401.557]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder054_Material_#249_0'].geometry} material={materials.Material_249} position={[662.581, 363.164, -401.557]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Line032_Material_#249_0'].geometry} material={materials.Material_249} position={[649.649, 428.253, -231.493]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder055_Material_#249_0'].geometry} material={materials.Material_249} position={[-91.967, 0, 436.249]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder056_Material_#249_0'].geometry} material={materials.Material_249} position={[-91.967, -17.093, 515.975]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder057_Material_#249_0'].geometry} material={materials.Material_249} position={[-91.967, -35.006, 590.997]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder058_Material_#249_0'].geometry} material={materials.Material_249} position={[-91.967, -49.04, 650.523]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Line033_Material_#249_0'].geometry} material={materials.Material_249} position={[-92.163, 117.992, 474.869]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Line034_Material_#249_0'].geometry} material={materials.Material_249} position={[-92.163, 106.131, 474.869]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Line035_Material_#249_0'].geometry} material={materials.Material_249} position={[-92.163, 94.269, 474.869]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Line036_Material_#249_0'].geometry} material={materials.Material_249} position={[-92.163, 82.407, 474.869]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box042_Material_#24_0'].geometry} material={materials.Material_24} position={[127.349, 651.935, -366.632]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder059_Material_#249_0'].geometry} material={materials.Material_249} position={[131.788, 618.693, 343.903]} rotation={[-Math.PI / 2, 0, 0]} scale={1.855} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder060_Material_#249_0'].geometry} material={materials.Material_249} position={[131.788, 618.693, 301.179]} rotation={[-Math.PI / 2, 0, 0]} scale={1.855} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder061_Material_#249_0'].geometry} material={materials.Material_249} position={[-183.131, 618.693, 301.179]} rotation={[-Math.PI / 2, 0, 0]} scale={1.855} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder062_Material_#249_0'].geometry} material={materials.Material_249} position={[-183.131, 618.693, 199.01]} rotation={[-Math.PI / 2, 0, 0]} scale={1.855} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder063_Material_#249_0'].geometry} material={materials.Material_249} position={[-472.93, 618.693, 199.01]} rotation={[-Math.PI / 2, 0, 0]} scale={1.855} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder064_Material_#249_0'].geometry} material={materials.Material_249} position={[-472.93, 618.693, -14.299]} rotation={[-Math.PI / 2, 0, 0]} scale={1.855} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder065_Material_#249_0'].geometry} material={materials.Material_249} position={[-472.93, 618.693, -227.607]} rotation={[-Math.PI / 2, 0, 0]} scale={1.855} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder066_Material_#249_0'].geometry} material={materials.Material_249} position={[-482.591, 618.693, -502.696]} rotation={[-Math.PI / 2, 0, 0]} scale={1.855} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder067_Material_#249_0'].geometry} material={materials.Material_249} position={[-482.591, 618.693, -735.446]} rotation={[-Math.PI / 2, 0, 0]} scale={1.855} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder068_Material_#249_0'].geometry} material={materials.Material_249} position={[-482.591, 618.693, -1004.284]} rotation={[-Math.PI / 2, 0, 0]} scale={1.855} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder069_Material_#249_0'].geometry} material={materials.Material_249} position={[-177.925, 618.693, -1004.284]} rotation={[-Math.PI / 2, 0, 0]} scale={1.855} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder070_Material_#249_0'].geometry} material={materials.Material_249} position={[116.456, 618.693, -1004.284]} rotation={[-Math.PI / 2, 0, 0]} scale={1.855} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder071_Material_#249_0'].geometry} material={materials.Material_249} position={[116.456, 618.693, -842.351]} rotation={[-Math.PI / 2, 0, 0]} scale={1.855} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder072_Material_#249_0'].geometry} material={materials.Material_249} position={[647.63, 618.693, -842.351]} rotation={[-Math.PI / 2, 0, 0]} scale={1.855} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder073_Material_#249_0'].geometry} material={materials.Material_249} position={[647.63, 618.693, -558.498]} rotation={[-Math.PI / 2, 0, 0]} scale={1.855} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder074_Material_#249_0'].geometry} material={materials.Material_249} position={[647.63, 618.693, -309.708]} rotation={[-Math.PI / 2, 0, 0]} scale={1.855} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder075_Material_#249_0'].geometry} material={materials.Material_249} position={[513.251, 618.693, -307.423]} rotation={[-Math.PI / 2, 0, 0]} scale={1.855} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder076_Material_#249_0'].geometry} material={materials.Material_249} position={[513.251, 618.693, -51.063]} rotation={[-Math.PI / 2, 0, 0]} scale={1.855} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder077_Material_#249_0'].geometry} material={materials.Material_249} position={[416.014, 618.693, -51.063]} rotation={[-Math.PI / 2, 0, 0]} scale={1.855} />
        <mesh castShadow receiveShadow geometry={nodes['Line037_Material_#249_0'].geometry} material={materials.Material_249} position={[123.518, 730.968, -197.3]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Line038_Material_#249_0'].geometry} material={materials.Material_249} position={[-481.687, 730.968, -742.266]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Line039_Material_#249_0'].geometry} material={materials.Material_249} position={[123.518, 737.293, -197.3]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Line040_Material_#249_0'].geometry} material={materials.Material_249} position={[-481.687, 737.293, -742.266]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Line041_Material_#249_0'].geometry} material={materials.Material_249} position={[-282.23, 406.379, 340.079]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Line042_Material_#249_0'].geometry} material={materials.Material_249} position={[-535.4, 406.303, -111.871]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Line043_Material_#249_0'].geometry} material={materials.Material_249} position={[649.649, 423.818, -231.493]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder078_Material_#249_0'].geometry} material={materials.Material_249} position={[539.467, 32.454, -341.467]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder079_Material_#249_0'].geometry} material={materials.Material_249} position={[617.622, 32.454, -341.467]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder080_Material_#249_0'].geometry} material={materials.Material_249} position={[706.714, 32.454, -341.467]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder081_Material_#249_0'].geometry} material={materials.Material_249} position={[706.714, 32.454, -496.343]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder082_Material_#249_0'].geometry} material={materials.Material_249} position={[706.714, 32.454, -645.527]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Line044_Material_#249_0'].geometry} material={materials.Material_249} position={[646.078, 92.98, -447.969]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Line045_Material_#249_0'].geometry} material={materials.Material_249} position={[646.078, 96.991, -447.969]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Line047_Material_#249_0'].geometry} material={materials.Material_249} position={[52.109, 118.742, 311.13]} />
        <mesh castShadow receiveShadow geometry={nodes['Line048_Material_#249_0'].geometry} material={materials.Material_249} position={[52.109, 150.255, 311.13]} />
        <mesh castShadow receiveShadow geometry={nodes['Line050_Material_#249_0'].geometry} material={materials.Material_249} position={[52.109, 222.468, 311.13]} />
        <mesh castShadow receiveShadow geometry={nodes['Line051_Material_#249_0'].geometry} material={materials.Material_249} position={[52.109, 263.169, 311.13]} />
        <mesh castShadow receiveShadow geometry={nodes['Object003_Material_#15_0'].geometry} material={materials.Material_15} position={[-138.993, 552.417, 306.818]} />
        <mesh castShadow receiveShadow geometry={nodes['Box043_Material_#251_0'].geometry} material={materials.Material_251} position={[-305.458, 348.668, 282.27]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box044_Material_#251_0'].geometry} material={materials.Material_251} position={[-738.21, 348.668, -47.479]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box045_Material_#251_0'].geometry} material={materials.Material_251} position={[679.906, 348.668, -339.689]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box046_Material_#251_0'].geometry} material={materials.Material_251} position={[691.688, 52.37, -540.522]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box047_Material_#24_0'].geometry} material={materials.Material_24} position={[-524.649, 285.776, -361.472]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
        <mesh castShadow receiveShadow geometry={nodes['Line052_Material_#246_0'].geometry} material={materials.Material_246} position={[-282.23, 402.808, 340.079]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Line053_Material_#246_0'].geometry} material={materials.Material_246} position={[-527.903, 402.878, -116.96]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder083_Material_#247_0'].geometry} material={materials.Material_247} position={[83.023, 285.352, 350.379]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder084_Material_#247_0'].geometry} material={materials.Material_247} position={[-6.76, 285.352, 350.379]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder085_Material_#247_0'].geometry} material={materials.Material_247} position={[-108.965, 285.352, 350.379]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder086_Material_#247_0'].geometry} material={materials.Material_247} position={[83.023, 618.509, 376.049]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder087_Material_#247_0'].geometry} material={materials.Material_247} position={[-6.76, 615.732, 376.049]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder088_Material_#247_0'].geometry} material={materials.Material_247} position={[-108.965, 618.509, 376.049]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder089_Material_#247_0'].geometry} material={materials.Material_247} position={[-256.571, 571.28, 237.684]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder090_Material_#247_0'].geometry} material={materials.Material_247} position={[-381.466, 571.28, 237.684]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder091_Material_#247_0'].geometry} material={materials.Material_247} position={[-526.862, 571.28, 237.684]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder092_Material_#247_0'].geometry} material={materials.Material_247} position={[-526.862, 571.28, 123.561]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder093_Material_#247_0'].geometry} material={materials.Material_247} position={[-526.862, 571.28, 9.438]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder094_Material_#247_0'].geometry} material={materials.Material_247} position={[-487.292, 636.313, -41.708]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder095_Material_#247_0'].geometry} material={materials.Material_247} position={[-487.292, 636.313, -186.747]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder096_Material_#247_0'].geometry} material={materials.Material_247} position={[-526.59, 571.077, -569.997]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder097_Material_#247_0'].geometry} material={materials.Material_247} position={[-526.59, 571.077, -827.173]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder098_Material_#247_0'].geometry} material={materials.Material_247} position={[-469.531, 313.803, -814.341]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder099_Material_#247_0'].geometry} material={materials.Material_247} position={[-469.531, 313.803, -560.752]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder100_Material_#247_0'].geometry} material={materials.Material_247} position={[-141.819, 315.71, -977.834]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder101_Material_#247_0'].geometry} material={materials.Material_247} position={[60.988, 570.81, -1042.742]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder102_Material_#247_0'].geometry} material={materials.Material_247} position={[-97.651, 570.81, -1042.742]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder103_Material_#247_0'].geometry} material={materials.Material_247} position={[-224.333, 570.81, -1042.742]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder104_Material_#247_0'].geometry} material={materials.Material_247} position={[-361.217, 570.81, -1042.742]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder105_Material_#247_0'].geometry} material={materials.Material_247} position={[-526.191, 570.81, -1042.742]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder106_Material_#247_0'].geometry} material={materials.Material_247} position={[-454.485, 315.71, -977.834]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder107_Material_#247_0'].geometry} material={materials.Material_247} position={[686.248, 578.803, -615.077]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder108_Material_#247_0'].geometry} material={materials.Material_247} position={[686.248, 578.803, -530.394]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder109_Material_#247_0'].geometry} material={materials.Material_247} position={[686.248, 578.803, -423.577]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder110_Material_#247_0'].geometry} material={materials.Material_247} position={[686.248, 578.803, -290.377]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder111_Material_#247_0'].geometry} material={materials.Material_247} position={[550.694, 578.803, -255.59]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder112_Material_#247_0'].geometry} material={materials.Material_247} position={[550.694, 578.803, -133.901]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder113_Material_#247_0'].geometry} material={materials.Material_247} position={[550.694, 578.803, -35.004]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder114_Material_#247_0'].geometry} material={materials.Material_247} position={[686.906, 578.803, -255.59]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder115_Material_#247_0'].geometry} material={materials.Material_247} position={[686.906, 578.803, -133.901]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder116_Material_#247_0'].geometry} material={materials.Material_247} position={[686.906, 578.803, -35.004]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder117_Material_#247_0'].geometry} material={materials.Material_247} position={[550.694, 315.633, -255.59]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder118_Material_#247_0'].geometry} material={materials.Material_247} position={[550.694, 315.633, -133.901]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder120_Material_#247_0'].geometry} material={materials.Material_247} position={[686.906, 315.633, -255.59]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder121_Material_#247_0'].geometry} material={materials.Material_247} position={[686.906, 315.633, -133.901]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder122_Material_#247_0'].geometry} material={materials.Material_247} position={[83.023, 285.352, 416.894]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder123_Material_#247_0'].geometry} material={materials.Material_247} position={[-6.76, 285.352, 416.894]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder124_Material_#247_0'].geometry} material={materials.Material_247} position={[-108.965, 285.352, 416.894]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder125_Material_#247_0'].geometry} material={materials.Material_247} position={[-214.832, 618.509, 376.049]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder126_Material_#247_0'].geometry} material={materials.Material_247} position={[-214.832, 618.509, 272.486]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder127_Material_#247_0'].geometry} material={materials.Material_247} position={[-222.66, 315.191, 337.69]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder128_Material_#247_0'].geometry} material={materials.Material_247} position={[-367.129, 315.191, 337.69]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder129_Material_#247_0'].geometry} material={materials.Material_247} position={[-222.66, 315.191, 257.153]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder130_Material_#247_0'].geometry} material={materials.Material_247} position={[-367.129, 315.191, 257.153]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder131_Material_#247_0'].geometry} material={materials.Material_247} position={[-486.184, 315.191, -36.646]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder132_Material_#247_0'].geometry} material={materials.Material_247} position={[-486.184, 315.191, -154.441]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder133_Material_#247_0'].geometry} material={materials.Material_247} position={[-404.976, 636.313, -186.747]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Line054_Material_#24_0'].geometry} material={materials.Material_24} position={[-414.509, 789.637, -719.257]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder134_Material_#247_0'].geometry} material={materials.Material_247} position={[-557.367, 785.66, -371.841]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder135_Material_#247_0'].geometry} material={materials.Material_247} position={[-557.367, 785.66, -279.003]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder136_Material_#247_0'].geometry} material={materials.Material_247} position={[-557.367, 785.66, -460.001]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Line055_Material_#4_0'].geometry} material={materials.Material_4} position={[72.688, 42.496, 615.168]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder157_Material_#249_0'].geometry} material={materials.Material_249} position={[-335.65, 147.638, 1374.425]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder158_Material_#249_0'].geometry} material={materials.Material_249} position={[-425.08, 147.638, 1374.425]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder159_Material_#249_0'].geometry} material={materials.Material_249} position={[-514.51, 147.638, 1374.425]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder160_Material_#249_0'].geometry} material={materials.Material_249} position={[-603.939, 147.638, 1374.425]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder161_Material_#249_0'].geometry} material={materials.Material_249} position={[-693.369, 147.638, 1374.425]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder162_Material_#249_0'].geometry} material={materials.Material_249} position={[-860.627, 147.638, 1374.425]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder163_Material_#249_0'].geometry} material={materials.Material_249} position={[-955.662, 147.638, 1374.425]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder164_Material_#249_0'].geometry} material={materials.Material_249} position={[-1050.697, 147.638, 1374.425]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder165_Material_#249_0'].geometry} material={materials.Material_249} position={[-1145.733, 147.638, 1374.425]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder166_Material_#249_0'].geometry} material={materials.Material_249} position={[-1255.637, 147.638, 1279.206]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder167_Material_#249_0'].geometry} material={materials.Material_249} position={[-1255.637, 147.638, 1166.932]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder168_Material_#249_0'].geometry} material={materials.Material_249} position={[-1255.637, 147.638, 1054.658]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder169_Material_#249_0'].geometry} material={materials.Material_249} position={[-1255.637, 147.638, 942.384]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder170_Material_#249_0'].geometry} material={materials.Material_249} position={[-1255.637, 147.638, 821.799]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder171_Material_#249_0'].geometry} material={materials.Material_249} position={[-1255.637, 147.638, 696.923]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder172_Material_#249_0'].geometry} material={materials.Material_249} position={[-1255.637, 147.638, 572.047]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder173_Material_#249_0'].geometry} material={materials.Material_249} position={[-1255.637, 147.638, 367.971]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder174_Material_#249_0'].geometry} material={materials.Material_249} position={[-1255.637, 147.638, 277.155]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder175_Material_#249_0'].geometry} material={materials.Material_249} position={[-1255.637, 147.638, 186.34]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder176_Material_#249_0'].geometry} material={materials.Material_249} position={[-1255.637, 147.638, 95.524]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder177_Material_#249_0'].geometry} material={materials.Material_249} position={[-1255.637, 147.638, -137.078]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder178_Material_#249_0'].geometry} material={materials.Material_249} position={[-1255.637, 147.638, -258.632]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder179_Material_#249_0'].geometry} material={materials.Material_249} position={[-1255.637, 147.638, -380.187]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder180_Material_#249_0'].geometry} material={materials.Material_249} position={[-1255.637, 147.638, -601.481]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder181_Material_#249_0'].geometry} material={materials.Material_249} position={[-1255.637, 147.638, -721.798]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder182_Material_#249_0'].geometry} material={materials.Material_249} position={[-1255.637, 147.638, -842.116]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder183_Material_#249_0'].geometry} material={materials.Material_249} position={[-1255.637, 147.638, -1071.334]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder184_Material_#249_0'].geometry} material={materials.Material_249} position={[-1255.637, 147.638, -1183.326]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder185_Material_#249_0'].geometry} material={materials.Material_249} position={[-1255.637, 147.638, -1295.318]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder186_Material_#249_0'].geometry} material={materials.Material_249} position={[-1255.637, 147.638, -1407.309]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder187_Material_#249_0'].geometry} material={materials.Material_249} position={[-1255.637, 147.638, -1548.04]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder188_Material_#249_0'].geometry} material={materials.Material_249} position={[-1111.433, 147.638, -1652.996]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder189_Material_#249_0'].geometry} material={materials.Material_249} position={[-955.53, 147.638, -1652.996]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder190_Material_#249_0'].geometry} material={materials.Material_249} position={[-799.628, 147.638, -1652.996]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder191_Material_#249_0'].geometry} material={materials.Material_249} position={[-643.726, 147.638, -1652.996]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder192_Material_#249_0'].geometry} material={materials.Material_249} position={[-487.823, 147.638, -1652.996]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder193_Material_#249_0'].geometry} material={materials.Material_249} position={[-331.921, 147.638, -1652.996]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder194_Material_#249_0'].geometry} material={materials.Material_249} position={[-176.019, 147.638, -1652.996]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder195_Material_#249_0'].geometry} material={materials.Material_249} position={[-20.116, 147.638, -1652.996]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder196_Material_#249_0'].geometry} material={materials.Material_249} position={[135.786, 147.638, -1652.996]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder197_Material_#249_0'].geometry} material={materials.Material_249} position={[291.688, 147.638, -1652.996]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder198_Material_#249_0'].geometry} material={materials.Material_249} position={[416.742, 147.638, -1652.996]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder199_Material_#249_0'].geometry} material={materials.Material_249} position={[541.795, 147.638, -1652.996]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder200_Material_#249_0'].geometry} material={materials.Material_249} position={[666.848, 147.638, -1652.996]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder201_Material_#249_0'].geometry} material={materials.Material_249} position={[791.902, 147.638, -1652.996]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder202_Material_#249_0'].geometry} material={materials.Material_249} position={[916.955, 147.638, -1652.996]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder203_Material_#249_0'].geometry} material={materials.Material_249} position={[1042.008, 147.638, -1652.996]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder204_Material_#249_0'].geometry} material={materials.Material_249} position={[1182.915, 147.638, -1652.996]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder205_Material_#249_0'].geometry} material={materials.Material_249} position={[1323.822, 147.638, -1652.996]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder206_Material_#249_0'].geometry} material={materials.Material_249} position={[1401.456, 147.638, -1562.105]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder207_Material_#249_0'].geometry} material={materials.Material_249} position={[1401.456, 147.638, -1411.435]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder208_Material_#249_0'].geometry} material={materials.Material_249} position={[1401.456, 147.638, -1260.764]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder209_Material_#249_0'].geometry} material={materials.Material_249} position={[1401.456, 147.638, -1110.094]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder210_Material_#249_0'].geometry} material={materials.Material_249} position={[1401.456, 147.638, -959.423]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder211_Material_#249_0'].geometry} material={materials.Material_249} position={[1401.456, 147.638, -808.753]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder212_Material_#249_0'].geometry} material={materials.Material_249} position={[1401.456, 147.638, -658.082]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder213_Material_#249_0'].geometry} material={materials.Material_249} position={[1401.456, 147.638, -560.635]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder214_Material_#249_0'].geometry} material={materials.Material_249} position={[1401.456, 147.638, -356.741]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder215_Material_#249_0'].geometry} material={materials.Material_249} position={[1401.456, 147.638, -206.071]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder216_Material_#249_0'].geometry} material={materials.Material_249} position={[1401.456, 147.638, -55.4]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder217_Material_#249_0'].geometry} material={materials.Material_249} position={[1401.456, 147.638, 95.27]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder218_Material_#249_0'].geometry} material={materials.Material_249} position={[1401.456, 147.638, 245.94]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder219_Material_#249_0'].geometry} material={materials.Material_249} position={[1401.456, 147.638, 396.611]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder220_Material_#249_0'].geometry} material={materials.Material_249} position={[1401.456, 147.638, 547.281]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder221_Material_#249_0'].geometry} material={materials.Material_249} position={[1401.456, 147.638, 697.952]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder222_Material_#249_0'].geometry} material={materials.Material_249} position={[1401.456, 147.638, 848.622]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder223_Material_#249_0'].geometry} material={materials.Material_249} position={[1401.456, 147.638, 999.293]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder224_Material_#249_0'].geometry} material={materials.Material_249} position={[1401.456, 147.638, 1149.963]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder225_Material_#249_0'].geometry} material={materials.Material_249} position={[1401.456, 147.638, 1300.634]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder226_Material_#249_0'].geometry} material={materials.Material_249} position={[1329.184, 147.638, 1374.152]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder227_Material_#249_0'].geometry} material={materials.Material_249} position={[1401.456, 147.638, -463.269]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder228_Material_#249_0'].geometry} material={materials.Material_249} position={[1201.246, 147.638, 1374.152]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder229_Material_#249_0'].geometry} material={materials.Material_249} position={[1073.308, 147.638, 1374.152]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder230_Material_#249_0'].geometry} material={materials.Material_249} position={[945.37, 147.638, 1374.152]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder231_Material_#249_0'].geometry} material={materials.Material_249} position={[817.431, 147.638, 1374.152]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder232_Material_#249_0'].geometry} material={materials.Material_249} position={[699.968, 147.638, 1374.152]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder233_Material_#249_0'].geometry} material={materials.Material_249} position={[582.505, 147.638, 1374.152]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Cylinder234_Material_#249_0'].geometry} material={materials.Material_249} position={[503.161, 147.638, 1374.152]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Line057_Material_#249_0'].geometry} material={materials.Material_249} position={[76.774, 138.561, 364.825]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Line058_Material_#249_0'].geometry} material={materials.Material_249} position={[76.774, 158.854, 364.825]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Line059_Material_#249_0'].geometry} material={materials.Material_249} position={[76.774, 179.148, 364.825]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Line060_Material_#249_0'].geometry} material={materials.Material_249} position={[76.774, 198.95, 364.825]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Line061_Material_#13_0'].geometry} material={materials.Material_13} position={[-78.927, 2.007, -106.426]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Rectangle007_Material_#11_0'].geometry} material={materials.Material_11} position={[73.131, 0, -139.813]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box048_Material_#24_0'].geometry} material={materials.Material_24} position={[483.472, 0, 1194.659]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box049_Material_#24_0'].geometry} material={materials.Material_24} position={[483.472, 0, 862.565]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box050_Material_#24_0'].geometry} material={materials.Material_24} position={[483.472, 0, 530.167]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box051_Material_#24_0'].geometry} material={materials.Material_24} position={[589.031, 0, 526.374]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box052_Material_#24_0'].geometry} material={materials.Material_24} position={[589.031, 0, 156.371]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box053_Material_#24_0'].geometry} material={materials.Material_24} position={[856.223, 0, 156.371]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box054_Material_#24_0'].geometry} material={materials.Material_24} position={[856.223, 0, -483.155]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box055_Material_#24_0'].geometry} material={materials.Material_24} position={[856.223, 0, -1028.383]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box056_Material_#24_0'].geometry} material={materials.Material_24} position={[341.788, 0, -1046.483]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box057_Material_#24_0'].geometry} material={materials.Material_24} position={[-261.569, 0, -1291.16]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box058_Material_#24_0'].geometry} material={materials.Material_24} position={[-863.597, 0, -1291.295]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box059_Material_#24_0'].geometry} material={materials.Material_24} position={[-923.136, 0, -654.779]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box060_Material_#24_0'].geometry} material={materials.Material_24} position={[-863.319, 0, -654.779]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box061_Material_#24_0'].geometry} material={materials.Material_24} position={[-923.682, 0, -235.998]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box062_Material_#24_0'].geometry} material={materials.Material_24} position={[-923.682, 0, 110.548]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box063_Material_#24_0'].geometry} material={materials.Material_24} position={[-760.359, 0, 285.178]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box064_Material_#24_0'].geometry} material={materials.Material_24} position={[-760.359, 0, 499.44]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box065_Material_#24_0'].geometry} material={materials.Material_24} position={[-532.605, 0, 536.469]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box066_Material_#24_0'].geometry} material={materials.Material_24} position={[-338.485, 0, 536.407]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box067_Material_#24_0'].geometry} material={materials.Material_24} position={[-338.203, 0, 847.212]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box068_Material_#24_0'].geometry} material={materials.Material_24} position={[-338.534, 0, 1192.899]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box069_Material_#6_0'].geometry} material={materials.Material_6} position={[-4.796, 496.235, 326.972]} />
        <mesh castShadow receiveShadow geometry={nodes['Box070_Material_#6_0'].geometry} material={materials.Material_6} position={[208.445, 496.235, 342.558]} />
        <mesh castShadow receiveShadow geometry={nodes['Box071_Material_#6_0'].geometry} material={materials.Material_6} position={[425.962, 493.574, 226.322]} rotation={[0, Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box072_Material_#6_0'].geometry} material={materials.Material_6} position={[425.962, 172.127, 220.541]} rotation={[0, Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box073_Material_#6_0'].geometry} material={materials.Material_6} position={[525.688, 172.127, -113.245]} rotation={[0, Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box074_Material_#6_0'].geometry} material={materials.Material_6} position={[525.688, 172.127, -503.162]} rotation={[0, Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box075_Material_#6_0'].geometry} material={materials.Material_6} position={[651.826, 438.744, -390.532]} rotation={[0, Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Box076_Material_#6_0'].geometry} material={materials.Material_6} position={[524.649, 438.744, -112.225]} rotation={[0, Math.PI / 2, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/exterior.glb')