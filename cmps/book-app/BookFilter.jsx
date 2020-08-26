export function BookFilter(props) {

    return <section className="book-filter">
        <h2>Book Filter</h2>

        <input name="name" type="text" placeholder="Filter by Name" onChange={(ev) => {
            props.onFilter(ev.target.name, ev.target.value)
        }} />


        <input name="min" type="number" placeholder="min price" onChange={(ev) => {
            props.onFilter(ev.target.name, ev.target.value)
        }} />

        <input name="max" type="number" placeholder="max price" onChange={(ev) => {
            props.onFilter(ev.target.name, ev.target.value)
        }} />
    </section>
}

