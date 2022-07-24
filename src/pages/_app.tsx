import '../styles/globals.css'

import { ChakraProvider } from '@chakra-ui/react'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { api } from '@services/api'
import type { AppProps } from 'next/app'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <ApiProvider api={api}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApiProvider>
  )
}
