const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
import { BookApp } from './pages/BookApp.jsx'
import { BookAdd } from './pages/BookAdd.jsx'
import { BookDetails } from './pages/BookDetails.jsx'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { NavBar } from './cmps/book-app/NavBar.jsx'
export class App extends React.Component {

    render() {

        return (
            <Router>
                <div>
                    <header>
                        <h1>Lets Book</h1>
                        <NavBar />
                    </header>
                    <main>
                        <Switch>
                            <Route component={BookDetails} path="/book/:bookId" />
                            <Route component={BookAdd} path="/bookAdd" />
                            <Route component={BookApp} path="/book" />
                            <Route component={About} path="/about" />
                            <Route component={Home} path="/" />
                        </Switch>
                    </main>

                </div>

            </Router>)
    }
}

