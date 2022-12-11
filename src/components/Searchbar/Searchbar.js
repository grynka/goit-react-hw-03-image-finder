import { Searchbars, SearchForm, Button, Label, Input } from './Searchbar.styled';
import { ImSearch} from 'react-icons/im';
const { Component } = require("react");


export default class Searchbar extends Component {
    state = {
        searchRequest: '',
    }
    handleRequestChange = event => {
      this.setState({
        searchRequest: event.currentTarget.value
      });
    }

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.searchRequest.trim() === '') {
            alert("Введите запрос")
            return
         }
        
          this.props.onSubmit({
            searchRequest: this.state.searchRequest,
          });
      this.reset();
  } 

  reset = () => {
    this.setState({
      searchRequest: ''
    });
  }

    render() {
        return (
          <Searchbars>
            <SearchForm onSubmit={this.handleSubmit}>
              <Button type="submit" className="button">
                <ImSearch />
                <Label>Search</Label>
              </Button>

              <Input
                className="input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                value={this.state.searchRequest}
                onChange={this.handleRequestChange}
              />
            </SearchForm>
          </Searchbars>
        );
}
    }
