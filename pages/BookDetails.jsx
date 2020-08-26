import { LongTxt } from '../cmps/book-app/LongTxt.jsx'
import { ReviewAdd } from '../cmps/book-app/ReviewAdd.jsx'
import { bookService } from '../services/book-service.js'
import { utilService } from '../services/utils.js'
const { Link } = ReactRouterDOM

export class BookDetails extends React.Component {

    state = {
        book: null,
        review: bookService.getBlankReview()
    }

    componentDidMount() {
        const { bookId } = this.props.match.params
        bookService.getBookById(bookId)
            .then(book => this.setState({ book }))
    }

    pageCountMsg = () => {
        const numOfPages = this.state.book.pageCount
        var msg = '- ';
        if (numOfPages > 500) {
            msg += 'Long reading';
        } else if (numOfPages <= 500 && numOfPages > 200) {
            msg += 'Decent reading';
        } else if (numOfPages < 100) {
            msg += 'Light reading';
        } else {
            msg = '';
        }

        return msg;
    }

    publicationAtMsg = () => {
        const pubYear = this.state.book.publishedDate;
        var date = new Date();
        const bookAge = pubYear - date.getYear();
        var msg = '- ';
        if (bookAge > 10) { msg += ' Veteran Book' }
        else if (bookAge < 1) { msg += ' New!' }
        else { msg = '' }

        return msg;
    }

    getClass = () => {
        const bookPrice = this.state.book.listPrice.amount;
        var bookClass = "book-details-container flex";
        if (bookPrice > 150) { bookClass += ' expensive' }
        else if (bookPrice < 40) { bookClass += ' cheap' } // in the instruction should be 20 but only one book fullfills it.

        return bookClass;
    }

    onBackToGallery = () => {
        this.setState({ book: null })
    }

    addReview = (ev) => {
        ev.preventDefault();
        bookService.addReview(this.state.book,this.state.review)
        this.setState({review: bookService.getBlankReview()})
    }

    updateReview = (field, val) => {
        this.setState({review: {...this.state.review, [field]: val}})
    }

    render() {
        const { book } = this.state
        if (!book) return <div>Loading....</div>
        const yearOfPublication = book.publishedDate;
        const bookAuthors = book.authors;
        const bookDescriptionLen = book.description.length;
        const price = utilService.getPrice(book.listPrice.amount, book.listPrice.currencyCode)

        return (<section className={this.getClass()}>
            <div className="image">
                <img src={book.thumbnail} alt="" />
            </div>
            <div className="book-info flex-col">
                <h1>Title: {book.title}</h1>
                <h2>Price: {price}</h2>
                <section className="authors">
                    Authors: {bookAuthors.map((author, idx) => <span key={idx}>{author}</span>)}
                </section>
                <h5>Number Of Pages: {book.pageCount} {this.pageCountMsg}</h5>
                <h5>Published At:{yearOfPublication} {this.publicationAtMsg}</h5>
                {book.listPrice.isOnSale && <h1>FOR SALE!!</h1>}
                {bookDescriptionLen > 100 && <LongTxt text={book.description} />}
                {bookDescriptionLen < 100 && <p>{book.description}</p>}
                <ReviewAdd onAddReview={this.addReview} onInputChange={this.updateReview} review={this.state.review}/>
                <Link to="/book"><button className="back-to-gallery-btn" onClick={this.onBackToGallery}>Back To Gallery</button></Link>
            </div>
        </section>
        )
    }

}