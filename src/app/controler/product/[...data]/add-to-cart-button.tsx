'use client'
// ('use client') para garantir que o JavaScript seja enviado ao navegador. O objetivo é permitir interatividade com o usuário, como clicar no botão para adicionar ao carrinho.

import { useState } from 'react'

export function AddToCartButton() {
  const [count, setCount] = useState(0)

  // Função para simular a ação de adicionar um item ao carrinho
  function addCart() {
    console.log('Colocou no carrinho')
    setCount((state: number) => state + 1)
  }

  return <button onClick={addCart}>Adicionar ao carrinho ({count})</button>
}
// tentando fazer o maximo de abstracao de use client para o projeto
