import React from "react";
import { Link } from "react-router-dom";

const UserItem = (props) => {
  var item = props.item;

  var stylesTableDescription = {
    border: "1px solid",
  };

  return (
    <tr>
      <td style={stylesTableDescription}>
        <Link
          to={{ pathname: `/userDetail/${item.email}`, state: item }}
          activeClassName="active"
          item={item}
        >
          {item.name.first} {item.name.last}
        </Link>
      </td>
      <td style={stylesTableDescription}>{item.email}</td>
      <td style={stylesTableDescription}>{item.phone}</td>
      <td style={stylesTableDescription}>{item.gender}</td>
    </tr>
  );
};

export default UserItem;
