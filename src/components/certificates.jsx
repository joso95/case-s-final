import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  ButtonGroup,
} from "@material-ui/core";

const Certificates = ({ shipData, newShipIndex, setIndexFunc, ...props }) => {
  let certs = [];
  shipData[newShipIndex].certificates.map((items) => (certs += items));
  //console.log(newShipIndex);

  if (certs.length < 1) {
    return (
      <TableContainer>
        <TableHead>
          <TableRow>
            <TableCell>Vessel</TableCell>
            <TableCell>Member</TableCell>
            <TableCell>IMO</TableCell>
            <TableCell>Certificates</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={newShipIndex}>
            <TableCell>{shipData[newShipIndex].vesselName}</TableCell>
            <TableCell>{shipData[newShipIndex].member}</TableCell>
            <TableCell>{shipData[newShipIndex].imo}</TableCell>
            <TableCell>We have found no certificates on this vessel.</TableCell>
            <TableCell>
              <ButtonGroup color="secondary">
                <Button onClick={() => setIndexFunc(null)} color="secondary">
                  Back
                </Button>
              </ButtonGroup>
            </TableCell>
          </TableRow>
        </TableBody>
      </TableContainer>
    );
  } else {
    return (
          <TableContainer>
            <Table className="vessels">
              <TableHead>
                <TableRow>
                  <TableCell>Vessel</TableCell>
                  <TableCell>Member</TableCell>
                  <TableCell>Flag</TableCell>
                  <TableCell>GT</TableCell>
                  <TableCell>IMO</TableCell>
                  <TableCell>Year built</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{shipData[newShipIndex].vesselName}</TableCell>
                  <TableCell>{shipData[newShipIndex].member}</TableCell>
                  <TableCell>
                    {shipData[newShipIndex].flagDescription}
                  </TableCell>
                  <TableCell>{shipData[newShipIndex].grossTonnage}</TableCell>
                  <TableCell>{shipData[newShipIndex].imo}</TableCell>
                  <TableCell>{shipData[newShipIndex].builtYear}</TableCell>
                </TableRow>
              </TableBody>
              <TableHead>
                <TableRow>
                    
                  <TableCell align="center">Certificate</TableCell>
                  <TableCell align="center">Certificate type</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {shipData[newShipIndex].certificates.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row" align="center">
                      {item.certificate}
                    </TableCell>
                    <TableCell align="center">{item.certificateType}</TableCell>
                  </TableRow>
                ))}
                  <ButtonGroup color="secondary">
                    <Button
                      onClick={() => setIndexFunc(null)}
                      color="secondary"
                    >
                      Back
                    </Button>
                  </ButtonGroup>
              </TableBody>
            </Table>
          </TableContainer>
    );
  }
};

export default Certificates;
