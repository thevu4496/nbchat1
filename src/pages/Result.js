import React from 'react';


function Result(props) {
  let users = props.users;
  let search = props.search;
  function renderUser(user,index){
    if(user.username.indexOf(search) !== -1){
      return <div key={index} className="list__search">
              <div className="search__avatar"><img src={user.profile_picture} alt="" /></div>
              <div className="search__info">
                <span className="info__name">{user.username}</span>
                <span className={"info__status " + (user.logged ? 'online' : 'offline')}>{user.logged ? 'online' : 'offline'}</span>
              </div>
            </div>
    }
    return null;
  }
  return (
    <div className="box__search">
      <h3 className="title__search">Discover</h3>
      <div className="warpper__search">
      {users.map((user,index) => renderUser(user,index))}
      </div>
    </div>
  );
}

export default Result;
