export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body>
        <h3>Cabecalho</h3>
        {children}
      </body>
    </html>
  )
}
