'use client'

interface ProductProps {
  params: {
    data: string[]
  }
}

// Server Components => A GENTE NAO USA JAVASCRIPT NO LADO DO CLIENTE, resumindo, qualquer componente que nao possua qualquer interatividade com o usuario. Componentes Visuais

// Client Components => O JavaScript É ENVIADO AO NAVEGADOR (cliente), COMPONENTES DE INTERATIVIDADE COM O USUARIO

export default function Products({ params }: ProductProps) {
  const [productId, size, color] = params.data

  // criando um print no console para ver os paramentros e dados a serem enviado quando acessado a rota
  console.log('Params:', params)

  // metodo usando para adicionar no carrinho de supermecado
  function addCart() {
    console.log('Colocou no carrinho')
  }

  return (
    <div>
      {/* <h1>Ola Mundo !!!</h1> */}
      <p>Products: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      {/* butao de teste para ver se ta funcionando */}
      <button onClick={addCart}>Adcionar ao carrinho</button>
    </div>
  )
}
