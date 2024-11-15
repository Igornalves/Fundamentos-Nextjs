import { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h2>Auth completo</h2>
      <div>{children}</div>
    </div>
  )
}
