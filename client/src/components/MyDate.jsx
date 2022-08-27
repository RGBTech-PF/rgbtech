import React, { useState } from "react";
import {  } from "react-bootstrap";
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from "reactstrap"
const MyData = () => {
	const [user, setUser] = useState({
		id: 1,
		user: "andres",
		mail: "pepe@pepe.com",
		profilePhoto: "https://holatelcel.com/wp-content/uploads/2020/09/instagram-foto-de-perfil-4.jpg",
	});

	return (
		<div>
			<Container>
			<h1>My data</h1>
      <Button color="primary">insertar nuevo personaje</Button>
			</Container>
			<Table>
				<thead><tr></tr>id</thead>
				<thead><tr></tr>id</thead>
			</Table>
		</div>
	);
};

export default MyData;
