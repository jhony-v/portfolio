import { FC, PropsWithChildren } from 'react'
import { NextSeo } from 'next-seo'

const Seo = {
  title: 'Jhony Vega - Frontend Developer',
  description:
    'Frontend developer with solid knowledge and experience creating scalable, maintainable frontend solutions focused on web performance and delivering better user experiences.',
}

const SEO: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <NextSeo
        title={Seo.title}
        description={Seo.description}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
          {
            rel: 'apple-touch-icon',
            href: '/favicon.ico',
          },
        ]}
        openGraph={{
          url: "'https://jhonyvega.com",
          images: [
            {
              url: '/code.png',
            },
          ],
          type: 'website',
          description: Seo.description,
          title: Seo.title,
        }}
      />
      {children}
    </>
  )
}

export default SEO
