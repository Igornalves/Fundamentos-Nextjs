export default async function ProductControler() {
  // Simula um atraso de 2 segundos usando uma Promessa (útil para testar carregamento)
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return (
    <div>
      <h1>Produtos de todos os tipos</h1>
    </div>
  )
}
