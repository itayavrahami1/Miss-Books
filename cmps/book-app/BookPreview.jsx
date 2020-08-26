const { Link } = ReactRouterDOM
import {utilService} from '../../services/utils.js'

export function BookPreview({ book }) {
    const priceToDisplay = utilService.getPrice(book.listPrice.amount, book.listPrice.currencyCode)

    return (
        <Link to={`/book/${book.id}`}>
            <article className="book-preview">
                <img src={book.thumbnail} alt="" />
                <h3>{book.title}</h3>
                <h4>Price: {priceToDisplay}</h4>
            </article>
        </Link>
    )
}