import React, { Component } from 'react';
import User from '../user/User';

export default class Movie extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        {(favoritedBy => {
          if (favoritedBy.length !== 0) {
            return (
              <ul>
                {favoritedBy.map(profile => {
                  return (
                    <User
                      key={`${profile.userID}${this.props.name}`}
                      userObject={this.props.users[profile.userID]}
                    />
                  );
                })}
              </ul>
            );
          } else {
            return <p>None of the current users liked this movie</p>;
          }
        })(this.props.favoritedBy)}
      </div>
    );
  }

  /* <h2>Get Out</h2>
<p>Liked By:</p>
<ul>
  <li>John Doe</li>
  <li>Autumn Green</li>
</ul> 

<h2>Autumn Green</h2>
<p>None of the current users liked this movie</p>
*/
}
