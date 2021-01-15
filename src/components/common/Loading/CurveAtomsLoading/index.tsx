import React from "react"
import * as S from "./index.style";

export default function CurveAtomsLoading({ text }: { text?: string }) {
  return (
    <S.LoaderWrapper>
      <S.Loader delay={0.1} bg="orange" />
      <S.Loader delay={0.3} bg="aqua" />
      <S.Loader delay={0.4} bg="#7440e2" />
      <S.Loader delay={0.6} bg="rgba(230,60,90)" />
      {text && <S.TextLoader>{text}</S.TextLoader>}
    </S.LoaderWrapper>
  )
}
