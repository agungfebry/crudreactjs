import React from "react";
import { Table } from "react-bootstrap";

const TableData = ({ karyawan, editData, deleteData }) => {
	return (
		<div>
			<Table striped bordered hover size="sm">
				<thead className="text-center">
					<tr>
						<th>#</th>
						<th>Nama</th>
						<th>Jabatan</th>
						<th>Divisi</th>
						<th>Aksi</th>
					</tr>
				</thead>
				<tbody>
					{karyawan.map((data, index) => {
						return (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{data.nama}</td>
								<td>{data.jabatan}</td>
								<td>{data.divisi}</td>
								<td>
									<button
										className="btn mr-3 btn-sm btn-warning"
										onClick={() => editData(data.id)}
									>
										Edit
									</button>

									<button
										className="btn btn-sm btn-danger"
										onClick={() => deleteData(data.id)}
									>
										Edit
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};

export default TableData;
