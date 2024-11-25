interface ProductProps {
  params: {
    data: string[]
  }
}

// Server Components => A GENTE NAO USA JAVASCRIPT NO LADO DO CLIENTE

export default function Products({ params }: ProductProps) {
  const [productId, size, color] = params.data

  console.log('Params:', params)

  return (
    <div>
      {/* <h1>Ola Mundo !!!</h1> */}
      <p>Products: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>
    </div>
  )
}
