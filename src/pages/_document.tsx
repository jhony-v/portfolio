import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class DocumentApp extends Document {
  render() {
    return (
      <Html className="bg-dark-100">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
