import React from "react";

export default class FetchPets extends React.Component {
  state = {
    loading: true,
    pet: null
  };

  async componentDidMount() {
    const response = await fetch('../pets.json');
    const data = await response.json();
    this.setState({ pet: data.results[0], loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>carregando...</div>;
    }

    if (!this.state.pet) {
      return <div>não foi possivel obter um pet</div>;
    }

    return (
      <div>
      </div>
    );
  }
}