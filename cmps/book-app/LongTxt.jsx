export class LongTxt extends React.Component {


    state = {
        isExpanded: false,
        txtToShow: this.props.text.substring(0,99) + '...',
        btnTxt: 'Read More'
    }

    toggleText = () => {
        if (!this.state.isExpanded){
            this.setState({isExpanded: true, txtToShow: this.props.text, btnTxt: 'Read Less'})
        } else {
            this.setState({isExpanded: false, txtToShow: this.props.text.substring(0,99) + '...', btnTxt: 'Read More' })
        }
    }

    render() {
        return (
            <section className="book-description">
            <p>{this.state.txtToShow}</p>
            <button className="read-more-btn" onClick={this.toggleText}>{this.state.btnTxt}</button>
        </section>
        )
    }
}