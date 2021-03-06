import { Suspense } from 'react'
import { AppProvider } from './context/AppGlobalState'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Header from './pages/layout/Header'
import Footer from './pages/layout/Footer'
import routes from './routes'
import PageLoading from './compontent/PageLoading'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import './asset/common.scss'

export default function App() {
    const pages = routes.map((item, index) => {
      const {compontent:Page,...rest } = item
      return <Route {...rest} key={index} render={routerProps => <Page {...rest} {...routerProps} />} />
    })
  return (
    <Suspense fallback={<PageLoading />}>
      <ThemeProvider theme={ theme }>
        <AppProvider>
          <BrowserRouter>
            <Header />
            <Switch>
              <Suspense fallback={<PageLoading />}>
                {pages}
              </Suspense>
            </Switch>
            <Footer />
          </BrowserRouter>
        </AppProvider>
      </ThemeProvider>
    </Suspense>
  )
}
