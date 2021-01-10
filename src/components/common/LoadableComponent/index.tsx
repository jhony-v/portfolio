import React, { Suspense, lazy } from "react"

type LoadableComponentProps = {
    module : () =>Promise<{ default: React.ComponentType<any>; }>,
    fallback : React.ReactNode,
    [key:string] : any,
}
export default function LoadableComponent({ module, fallback, ...restProps } : LoadableComponentProps) {
  const ClientComponent = lazy(module);
  const isSSR = typeof window === "undefined"
  return (
    <>
      {!isSSR && (
        <Suspense fallback={fallback}>
          <ClientComponent {...restProps} />
        </Suspense>
      )}
    </>
  )
}
