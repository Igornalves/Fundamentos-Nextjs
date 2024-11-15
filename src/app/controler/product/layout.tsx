import { ReactNode } from 'react'

export default function productLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>{children}</div>
      <p>Painel de Produtos</p>
    </div>
  )
}
