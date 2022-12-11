import { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Loaders } from './Loader.styled';

export default class Loader extends Component {
  render() {
    return (
      <Loaders>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />{' '}
      </Loaders>
    );
  }
}
