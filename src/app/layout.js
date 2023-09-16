

 import "../style/index.scss";
 


export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <head>
        <meta name="description" content="Tecz - Technology & IT Solutions React Next js Template for various types of Sass Products, Software, Startups, App showcases,s and related products/services" />
        <link rel="icon" href="favicon.ico" sizes="any" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
