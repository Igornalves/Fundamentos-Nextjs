// Importação do hook 'use' do React, usado para lidar com promessas assíncronas
import { use } from 'react'
import { AddToCartButton } from './add-to-cart-button'

// Interface ProductProps define que 'params' é uma Promise que resolve para um objeto com 'data' do tipo string[]
interface ProductProps {
  params: Promise<{
    data: string[] // Define que 'data' será um array de strings
  }>
}

// Comentários explicativos:
// Server Components => São componentes que não possuem interatividade com o usuário. São usados para renderização inicial no servidor e geram HTML estático.
// Client Components => São componentes que envolvem interatividade com o usuário. O JavaScript é enviado ao navegador (cliente) para gerar comportamentos dinâmicos.

// Streaming SSR => Ler/Escrever dados de forma parcial + Server-side Rendering

// Renderizar um componente do lado do servidor de forma PARCIAL

export default function Products({ params }: ProductProps) {
  // Simula um atraso de 2 segundos usando uma Promessa (útil para testar carregamento)
  // await new Promise((resolve) => setTimeout(resolve, 2000))

  // A função 'use' resolve a Promise 'params' e extrai o valor de 'data'.
  const { data } = use(params)

  // Desestruturação do array 'data' para acessar os valores individuais (productId, size, color)
  const [productId, size, color] = data

  // Imprime os parâmetros 'params' no console para depuração
  console.log('Params:', params)

  // Retorna o JSX com as informações do produto e um botão para adicionar ao carrinho
  return (
    <div>
      {/* Exibe as informações do produto */}
      <p>Products: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      {/* Botão para simular adicionar o produto ao carrinho */}
      <AddToCartButton />
    </div>
  )
}
