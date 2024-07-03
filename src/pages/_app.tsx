import "@/styles/globals.css";
import "@/styles/framework7-bundle.css";
import type { AppProps } from "next/app";

import React from 'react';
import Framework7 from 'framework7/lite'
import Framework7React, { App, View, Page, Navbar } from 'framework7-react'

Framework7.use(Framework7React)

export default function APP({ Component, pageProps }: AppProps) {
  return (
    <App>
      <View main>
        <Page>
        <Component {...pageProps} />
        </Page>
      </View>
    </App>
  )
}
