

export function ReviewAdd({ onAddReview, onInputChange,review }) {
    
    return <form className="flex-col" onSubmit={onAddReview}>
        <input name="name" type="text" placeholder="Books Reader" value={review.name} onChange={(ev) => {
            onInputChange(ev.target.name, ev.target.value)
        }} />
        <input name="rate" type="number" placeholder="1-5" value={review.rate} onChange={(ev) => {
            onInputChange(ev.target.name, ev.target.value)
        }} />
        <span>Read At: </span><input type="date" name="read-date" placeholder="" value={review['read-date']} onChange={(ev) => {
            onInputChange(ev.target.name, ev.target.value)
        }} />
        <textarea name="free-text" id="" cols="30" rows="10" placeholder="Free Text" value={review['free-text']} onChange={(ev) => {
            onInputChange(ev.target.name, ev.target.value)
        }} ></textarea>
        <button className="submit-btn" onClick={onAddReview}>Submit</button>
    </form>
}


