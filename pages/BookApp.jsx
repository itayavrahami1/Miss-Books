import { bookService } from '../services/book-service.js'
import { BookList } from '../cmps/book-app/BookList.jsx'
import { BookFilter } from '../cmps/book-app/BookFilter.jsx'
import eventBus from '../services/event-bus-service.js'

export class BookApp extends React.Component {
    state = {
        filterBy: { name: '', 'price-range': { min: 0, max: Infinity } },
        books: [],
    }
    componentDidMount() {
        this.loadBooks();
    }
    loadBooks() {
        bookService.query()
            .then(books => this.setState({ books }))
    }

    setFilter = (filterBy, filterByVal) => {
        let currFilter = filterBy;
        if (currFilter !== 'name') {
            currFilter = 'price-range';
            this.setState({ filterBy: { ...this.state.filterBy, 
                            [currFilter]: {...this.state.filterBy[currFilter], [filterBy]: filterByVal} }})
        } else {
            this.setState({ filterBy: { ...this.state.filterBy, [currFilter]: filterByVal } })
        }
    }

    getBooksForDisplay() {
        if (!this.state.filterBy.name && !this.state.filterBy['price-range']) return this.state.books;
        var books = [...this.state.books];

        if (this.state.filterBy.name) books = books.filter(book => book.title.includes(this.state.filterBy.name))
        if (this.state.filterBy['price-range']) {
            books = books.filter(book => {
                return (book.listPrice.amount > this.state.filterBy['price-range']['min'] &&
                    book.listPrice.amount < this.state.filterBy['price-range']['max'])
            })

        }
        return books;
    }
    render() {
        const booksToShow = this.getBooksForDisplay();
        if (!booksToShow) return <p>loading..</p>
        return (
            <section className="book-app">
                <h2>books</h2>
                <hr />
                {< BookFilter onFilter={this.setFilter} />}
                {<BookList books={booksToShow} listToRender="bookList"/>}
                <hr />
            </section>
        )
    }
}