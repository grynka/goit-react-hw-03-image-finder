const { Component } = require("react");

export default class Searchbar extends Component {
    state = {
        searchRequest: '',
    }
    handleRequestChange = event => {
        this.setState({ searchRequest: event.currentTarget.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit({
          searchRequest: this.state.searchRequest,
          });
} 
    render() {
        return (
            <header className="searchbar">
  <form className="form" onSubmit={this.handleSubmit} >
    <button type="submit" className="button">
      <span className="button-label">Search</span>
    </button>

    <input
      className="input"
      type="text"
      autoComplete="off"
      autoFocus
                        placeholder="Search images and photos"
                        value={this.state.searchRequest}
                        onChange={this.handleRequestChange}
    />
  </form>
</header>
        
        );
}
    }
