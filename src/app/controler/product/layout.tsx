import { ReactNode } from 'react'

export default function productLayout({ children }: { children: ReactNode }) {
  // console.log(children)

  return (
    <div>
      <h2>Painel de Produtos</h2>
      <div>{children}</div>
    </div>
  )
}
