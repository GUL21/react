import React from 'react';
import logo from './basket.png';

const list = {
	ul: {
		marginLeft: '300px',
		listStyle: 'none',
	},
	li: {
		border: "1px solid grey",
		width: "600px",
		marginBottom: "5px",
		padding: "10px",
	},
	img: {
		width: '20px',
		height: '20px',
		float: 'right',
	},
	span: {
		marginLeft: '30px',
	}
}

const check = {
		textDecoration: 'line-through',
		marginLeft: '30px',
	}

function List() {
  return (
    <ul style={list.ul}>
      <li style={list.li}>
      	<input type="checkbox" checked />
      	<span style={check}>First item</span>
      	<img src={logo} alt={"logo"} style={list.img} /> 
      </li>
      <li style={list.li}>
      	<input type="checkbox" />
      	<span style={list.span}>Second item</span>
      	<img src={logo} alt={"logo"} style={list.img} /> 
      </li>
      <li style={list.li}>
      	<input type="checkbox" />
      	<span style={list.span}>Third item</span>
      	<img src={logo} alt={"logo"} style={list.img} /> 
      </li>
    </ul>
  );
}

export default List;