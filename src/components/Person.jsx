import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useGLTF, useAnimations } from '@react-three/drei';

// Componente que carrega um modelo 3D de um personagem e anima quando necessário
const Person = ({ startAnimation, ...props }) => {
  const group = useRef(); // Cria uma referência para o modelo 3D
  const { scene, animations } = useGLTF('/models/person.gltf'); // Importa o modelo 3D e suas animações
  const { actions, mixer } = useAnimations(animations, group); // Obtém as animações do modelo

  useEffect(() => {
    if (!actions || Object.keys(actions).length === 0) return; // Se não houver animações, não faz nada

    const animationName = Object.keys(actions)[0]; // Pega o nome da primeira animação disponível
    const action = actions[animationName];

    // Define o modelo para a pose inicial da animação
    action.reset(); // Reseta a animação
    action.time = 0; // Define o tempo para o início
    action.play(); // Reproduz a animação
    action.paused = true; // Mantém pausado na pose inicial
    mixer.update(0); // Atualiza o modelo imediatamente

    // Se a animação for ativada, inicia a animação
    if (startAnimation) {
      action.paused = false; // Despausa a animação
      action.setLoop(THREE.LoopOnce, 1); // Define a animação para rodar uma vez
      action.clampWhenFinished = true; // Mantém o modelo na última pose da animação
      action.play(); // Inicia a animação

      // Quando a animação termina, garante que ela pare no último quadro
      const onFinished = () => {
        action.time = action.getClip().duration; // Define o tempo para o final da animação
        mixer.removeEventListener('finished', onFinished); // Remove o evento após a finalização
      };
      mixer.addEventListener('finished', onFinished);
    }

    // Limpa a animação quando o componente for desmontado
    return () => {
      if (mixer) {
        mixer.stopAllAction(); // Para todas as animações
      }
    };
  }, [startAnimation]); // Executa esse efeito apenas quando `startAnimation` mudar

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} /> {/* Renderiza o modelo 3D na cena */}
    </group>
  );
};

export default Person;

// Pré-carrega o modelo para melhorar o carregamento
useGLTF.preload('/models/person.gltf');