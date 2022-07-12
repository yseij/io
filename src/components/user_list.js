import React, { Component } from "react";

import UserApi from "../apis/user_api";
import FilterGender from "./filter_gender";
import UserData from "./user_data";

class UserList extends Component {
  constructor(props) {
    super();
    this.state = {
      items: [],
      huidigeItems: [],
      nameSorting: 0,
      emailSorting: 0,
      genderSorting: 0,
      errorApi: true,
    };
    this.SortingName = this.SortingName.bind(this);
    this.OnChangeFilterGender = this.OnChangeFilterGender.bind(this);
  }

  componentDidMount() {
    const fetchUsers = async () => {
      const clients = await getUsers();
      this.setState({ items: clients.data.results });
      this.setState({ huidigeItems: clients.data.results });
    };
    fetchUsers();
  }

  SortingName() {
    if (this.state.nameSorting === 0) {
      this.setState({
        items: this.state.items.sort((a, b) =>
          a.name.first > b.name.first ? 1 : -1
        ),
        nameSorting: 1,
      });
    } else {
      this.setState({
        items: this.state.items.sort((a, b) =>
          a.name.first > b.name.first ? -1 : 1
        ),
        nameSorting: 0,
      });
    }
  }

  SortingEmail() {
    if (this.state.emailSorting === 0) {
      this.setState({
        items: this.state.items.sort((a, b) => (a.email > b.email ? 1 : -1)),
        emailSorting: 1,
      });
    } else {
      this.setState({
        items: this.state.items.sort((a, b) => (a.email > b.email ? -1 : 1)),
        emailSorting: 0,
      });
    }
  }

  SortingGender() {
    if (this.state.genderSorting === 0) {
      this.setState({
        items: this.state.items.sort((a, b) => (a.gender > b.gender ? 1 : -1)),
        genderSorting: 1,
      });
    } else {
      this.setState({
        items: this.state.items.sort((a, b) => (a.gender > b.gender ? -1 : 1)),
        genderSorting: 0,
      });
    }
  }

  OnChangeFilterGender(event) {
    switch (event.target.value) {
      case "male":
        this.setState({
          items: this.state.huidigeItems.filter(
            (item) => item.gender === "male"
          ),
        });
        break;
      case "female":
        this.setState({
          items: this.state.huidigeItems.filter(
            (item) => item.gender === "female"
          ),
        });
        break;
      case "/":
        this.setState({
          items: this.state.huidigeItems,
        });
        break;
      default:
        break;
    }
  }

  render() {
    var stylesTableHeader = {
      border: "1px solid",
      borderBottomWidth: StyleSheet.hairlineWidth,
    };

    if (typeof this.state.items !== "undefined") {
      const output = this.state.items.map((item, i) => {
        return <UserData item={item} key={item.login.uuid} />;
      });
      return (
        <div>
          <FilterGender onChange={this.OnChangeFilterGender} />
          <p>
            klik op de headers {"("}name, email en gender{")"} van de tabel om
            te sorteren
          </p>
          <table>
            <thead>
              <tr>
                <th style={stylesTableHeader} onClick={this.SortingName}>
                  Name
                </th>
                <th style={stylesTableHeader} onClick={this.SortingEmail}>
                  Email
                </th>
                <th style={stylesTableHeader}>Phone</th>
                <th style={stylesTableHeader} onClick={this.SortingGender}>
                  Gender
                </th>
              </tr>
            </thead>
            <tbody>{output}</tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div>
          <p>Kon geen gegevens ophalen --{">"} check je API instellingen</p>
        </div>
      );
    }
  }
}

export const getUsers = () => {
  let api = new UserApi();
  var promise = api.getHundredUsers();
  return promise
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};

export default UserList;
