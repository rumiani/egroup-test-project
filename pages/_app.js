import 'tailwindcss/tailwind.css'
import { DataContextProvider } from '../dataContext/dataContext'

function MyApp({ Component, pageProps }) {
  return <DataContextProvider>
          <Component {...pageProps} />
        </DataContextProvider>
}

export default MyApp 
