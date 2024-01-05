import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function createData(name, status, status) {
  return { name, status, status };
}

const rows = [
  createData("Machine Learning BootCamp", "View", "Decline"),
  createData("Python & R in Data Science", "Approval", "Decline"),
  createData("SuperDataScience Support", "Approval", "Decline"),
  createData("Analyst Bootcamp 2020", "Approval", "Decline")
];


const makeStyle=(status)=>{
  if(status === 'Approval')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === 'Decline')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else if(status === 'View')
  {
    return{
      background: '#ffadad8f',
      color: 'purple',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}

export default function BasicTable() {
  return (
      <div className="Table">
        <div className="top">
            <h1 className="title">Student Queries</h1>
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
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}