import React from "react";
import { Card, Button, Form } from "react-bootstrap";

const CardForm = ({
	nama,
	jabatan,
	divisi,
	handleSubmit,
	handleChange,
	id,
}) => {
	return (
		<div>
			<Card>
				<Card.Body>
					<Card.Title>
						{id ? "Edit Data Karyawan" : "Input Karyawan"}
					</Card.Title>
					<Form className="mt-3" onSubmit={handleSubmit}>
						<Form.Group>
							<Form.Control
								type="text"
								name="nama"
								placeholder="Nama"
								value={nama}
								onChange={(event) => handleChange(event)}
							/>
						</Form.Group>

						<Form.Group>
							<Form.Control
								type="text"
								name="jabatan"
								placeholder="Jabatan"
								value={jabatan}
								onChange={(event) => handleChange(event)}
							/>
						</Form.Group>

						<Form.Group>
							<Form.Control
								type="text"
								name="divisi"
								placeholder="Divisi"
								value={divisi}
								onChange={(event) => handleChange(event)}
							/>
						</Form.Group>

						<Button
							className="btn btn-block"
							variant="primary"
							type="submit"
						>
							Simpan
						</Button>
					</Form>
				</Card.Body>
			</Card>
		</div>
	);
};

export default CardForm;
