/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/scene.gltf
Author: Shaurya_Jaiswal (https://sketchfab.com/jaiswalshaurya1310)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/air-pods-3d-model-6a4a4bda16714b299cda639edaedab8d
Title: Air Pods 3D Model
*/
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Scene = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('../models/scene.gltf');
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="iauArCIBpqmQwBK_0"
                position={[-1.451, 7.605, -0.171]}
                rotation={[0.873, 0, 0]}
              >
                <mesh
                  name="Object_4"
                  geometry={nodes.Object_4.geometry}
                  material={materials.CmGiKFayWYAPgnF}
                />
                <mesh
                  name="Object_5"
                  
                  geometry={nodes.Object_5.geometry}
                  material={materials.AWTzhuHRqcuHHac}
                />
                <mesh
                  name="Object_6"
                  geometry={nodes.Object_6.geometry}
                  material={materials.mhLOlkhyICoNjJz}
                />
                <mesh
                  name="Object_7"
                  geometry={nodes.Object_7.geometry}
                  material={materials.feFCeOVEGRNYmFP}
                />
                <mesh
                  name="Object_8"
                  geometry={nodes.Object_8.geometry}
                  material={materials.lQGMGvxQZTxRjEE}
                />
                <mesh
                  name="Object_9"
                  geometry={nodes.Object_9.geometry}
                  material={materials.XRQxhVGHKWInIiz}
                />
              </group>
              <group
                name="szusrxTxeDnOCPF_1"
                position={[1.444, 7.6, -0.17]}
                rotation={[0.873, 0, 0]}
              >
                <mesh
                  name="Object_11"
                  geometry={nodes.Object_11.geometry}
                  material={materials.CmGiKFayWYAPgnF}
                />
                <mesh
                  name="Object_12"
                  geometry={nodes.Object_12.geometry}
                  material={materials.AWTzhuHRqcuHHac}
                />
                <mesh
                  name="Object_13"
                  visible={false}
                  geometry={nodes.Object_13.geometry}
                  material={materials.mhLOlkhyICoNjJz}
                />
                <mesh
                  name="Object_14"
                  geometry={nodes.Object_14.geometry}
                  material={materials.lQGMGvxQZTxRjEE}
                />
                <mesh
                  name="Object_15"
                  visible={false}
                  geometry={nodes.Object_15.geometry}
                  material={materials.XRQxhVGHKWInIiz}
                />
                <mesh
                  name="Object_16"
                  visible={false}
                  geometry={nodes.Object_16.geometry}
                  material={materials.feFCeOVEGRNYmFP}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('../models/Scene.gltf');
export default Scene;
