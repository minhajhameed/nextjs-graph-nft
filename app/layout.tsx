"use client"

import Header from "@/components/Header";
import "./globals.css";
import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "web3uikit"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import NetworkBanner from "@/components/NetworkBanner";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.NEXT_PUBLIC_SUBGRAPH_URL,
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <MoralisProvider initializeOnMount={false}>
          <ApolloProvider client={client}>
            <NotificationProvider>
            <NetworkBanner />
              <Header />
              {children}
            </NotificationProvider>
          </ApolloProvider>
        </MoralisProvider>
      </body>
    </html>
  );
}
