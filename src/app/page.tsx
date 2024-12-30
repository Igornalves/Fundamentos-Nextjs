// Declaração da função assíncrona padrão que será exportada para a página Home
export default async function Home() {
  // Simula um atraso de 2 segundos usando uma Promessa (útil para testar carregamento)
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // Faz uma requisição para a API do GitHub para obter os dados de um usuário específico
  const response = await fetch('http://api.github.com/users/igornalves')
  // Converte a resposta da requisição para JSON para poder ser manipulada
  const user = await response.json()

  // Retorna um componente JSX que exibe os dados do usuário formatados em JSON
  return <pre>{JSON.stringify(user, null, 2)}</pre>
}
