import { BookPreview } from './BookPreview.jsx'
import { GoogleBookPreview } from './GoogleBookPreview.jsx'


export function BookList(props){
       
    function DynamicCmp(props){
        switch (props.listToRender){
            case 'googleBooks':
                return <GoogleBookPreview {...props}/>
            case 'bookList':
                return <BookPreview {...props}/>
            default:
                break;
        }
    }

    return (<ul className="book-list clean-list">
        {props.books.map(book => {
            return <li key={book.id}>
                <DynamicCmp book={book} onAddBook={props.onAddBook} listToRender={props.listToRender}/>
            </li>
        })}
    </ul>)
}