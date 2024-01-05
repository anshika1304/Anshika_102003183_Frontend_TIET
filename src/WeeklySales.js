import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function createData(name, category, price) {
  return { name, category, price };
}

const rows = [
  createData("Abode XD Part 01", "UIUX Design", "$20"),
  createData("Abode XD Part 01", "UIUX Design", "$20"),
  createData("Abode XD Part 01", "UIUX Design", "$20"),
];

export default function BasicTable() {
  return (
      <div className="Table">
        <div className="top">
            <h1 className="title">Weekly Sales Stats</h1>
            <MoreVertIcon fontSize="small" />
        </div>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.category}</TableCell>
                  <TableCell align="left">{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}