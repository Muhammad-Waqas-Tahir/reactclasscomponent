import React from 'react';
class App extends React.Component {
  //New Way without Constructor
  state = { users: [], isLoading: false };

  //with Constuctor
  // constructor(props) {
  //   super(props);
  //   this.fetchUser = this.fetchUser.bind(this);
  //   this.state = { users: [], isLoading: false };
  // }

  fetchUser = async () => {
    try {
      this.setState({ isLoading: true });
      const User = await fetch('https://jsonplaceholder.typicode.com/users');
      const result = await User.json();
      this.setState({ users: result });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  // Useffect with []
  componentDidMount() {
    this.fetchUser();
  }

  //useEffect with [users]
  componentDidUpdate(preProps, preState) {}

  //clearnUp Function in UseEffect
  componentWillUnmount() {
    console.log('component will unmount');
  }

  render() {
    return (
      <>
        {this.state.isLoading ? (
          <p>Loading.....</p>
        ) : (
          <User users={this.state.users} />
        )}
      </>
    );
  }
}

export default App;

class User extends React.Component {
  render() {
    console.log(this.props.users);

    return (
      <>
        {this.props.users.map((user) => (
          <React.Fragment key={user.id}>
            <h2>{user.name}</h2>
            <h2>{user.website}</h2>
            <h2>{user.address.city}</h2>
          </React.Fragment>
        ))}
      </>
    );
  }
}
