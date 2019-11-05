import React from 'react';

const style = {
	div: {
		marginLeft: '400px',
		marginTop: '100px',
		marginBottom: '40px',
	},
	h2: {
		color: 'black',
		fontWeight: 'normal',
	},
}

const inputik  = {
	width: '400px',
	padding: '5px',
}

const submit  = {
	width: '50px',
	padding: '5px',
	marginLeft: '20px',
	color: 'white',
	backgroundColor: 'blue',
}

function Forms() {
  return (
    <div style={style.div}>
      <h2 style={style.h2}>ToDo List</h2>
      <form>
      	<input type="text" placeholder="New Task" style={inputik} />
      	<input type="submit" value="Add" style={submit} />
      </form>
    </div>
  );
}

export default Forms;