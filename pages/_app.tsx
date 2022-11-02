// import '../styles/globals.css'
// import type { AppProps } from 'next/app'
// import { AuthProvider } from '../hooks/useAuth'
// import {RecoilRoot} from 'recoil'

/*import '../styles/globals.css'
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";
import ProtectedRoute from "../components/ProtectedRoute";
import { AuthContextProvider } from "../context/AuthContext";

const noAuthRequired = ['/', '/login', '/signup']

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <RecoilRoot>
      <AuthContextProvider>
      <Navbar/>
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
    </RecoilRoot>
  )
}

export default MyApp*/


import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../hooks/useAuth'
import {RecoilRoot} from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      {/* <AuthProvider> */}
        <Component {...pageProps} />
      {/* </AuthProvider> */}
    </RecoilRoot>
  )
}
export default MyApp