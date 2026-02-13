import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Backnumber } from './pages/Backnumber'
import { Books } from './pages/Books'
import { Company } from './pages/Company'
import { Videos } from './pages/Videos'
import { NotFound } from './pages/_404'
import './style.css'

export function App() {
  return (
    <LocationProvider>
      <Header />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/backnumber/:period?" component={Backnumber} />
        <Route path="/books" component={Books} />
        <Route path="/company" component={Company} />
        <Route path="/videos" component={Videos} />
        <Route default component={NotFound} />
      </Router>
      <Footer />
    </LocationProvider>
  )
}

if (typeof window !== 'undefined') {
  hydrate(<App />, document.getElementById('app')!)
}

export async function prerender(data: Record<string, unknown>) {
  return await ssr(<App {...data} />)
}
