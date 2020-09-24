import React, { Component } from "react";
import CardForm from "./components/Card.js";
import TableData from "./components/Table.js";
import { Row, Col, Container } from "react-bootstrap";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      karyawan: [],
      id: "",
      nama: "",
      jabatan: "",
      divisi: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === "") {
      this.setState({
        karyawan: [
          ...this.state.karyawan,
          {
            id: this.state.karyawan.length + 1,
            nama: this.state.nama,
            jabatan: this.state.jabatan,
            divisi: this.state.divisi,
          },
        ],
      });
    } else {
      const karyawanNoClick = this.state.karyawan
        .filter((data) => data.id !== this.state.id)
        .map((filterKaryawan) => {
          return filterKaryawan;
        });

      this.setState({
        karyawan: [
          ...karyawanNoClick,
          {
            id: this.state.karyawan.length + 1,
            nama: this.state.nama,
            jabatan: this.state.jabatan,
            divisi: this.state.divisi,
          },
        ],
      });
    }

    this.setState({
      id: "",
      nama: "",
      jabatan: "",
      divisi: "",
    });
  };

  editData = (id) => {
    const karyawanClick = this.state.karyawan
      .filter((data) => data.id === id)
      .map((filterKaryawan) => {
        return filterKaryawan;
      });

    this.setState({
      id: karyawanClick[0].id,
      nama: karyawanClick[0].nama,
      jabatan: karyawanClick[0].jabatan,
      divisi: karyawanClick[0].divisi,
    });
  };

  deleteData = (id) => {
    const deleteKaryawan = this.state.karyawan
      .filter((data) => data.id !== id)
      .map((filterKaryawan) => {
        return filterKaryawan;
      });

    this.setState({
      karyawan: deleteKaryawan,
    });
  };

  render() {
    console.log(this.state.karyawan);
    return (
      <div>
        <Container className="mt-5">
          <Row>
            <Col sm={4}>
              <CardForm
                {...this.state}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            </Col>
            <Col sm={8}>
              <TableData
                karyawan={this.state.karyawan}
                editData={this.editData}
                deleteData={this.deleteData}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
