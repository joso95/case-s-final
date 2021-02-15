import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    ButtonGroup,
    TableSortLabel,
  } from "@material-ui/core";
  
  
  const Vessels = ({ shipData, setIndexFunc, ...props }) => {
    const vasselData = shipData;
    return (
      <TableContainer>
        <Table className="vessels">
          <TableHead>
            <TableRow>
              <TableCell>Vessel</TableCell>
              <TableCell TableSortLabel='true' align="right">Member</TableCell>
              <TableCell align="right">Flag</TableCell>
              <TableCell align="right">GT</TableCell>
              <TableCell align="right">IMO</TableCell>
              <TableCell align="right">Year built</TableCell>
              <TableCell aling='right'>Certifications</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {vasselData.map((item, index) => (
              <TableRow key={index}>
                {console.log(item.vesselName, index)}
                <TableCell component="th" scope="row">
                  {item.vesselName}
                </TableCell>
                <TableCell align="right">{item.member}</TableCell>
                <TableCell align="right">{item.flagDescription}</TableCell>
                <TableCell align="right">{item.grossTonnage}</TableCell>
                <TableCell align="right">{item.imo}</TableCell>
                <TableCell align="right">{item.builtYear}</TableCell>
                <TableCell>
                  <ButtonGroup color='primary'>
                    <Button onClick={() => setIndexFunc(index)} color="primary">
                      Certificates
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  
  export default Vessels;
  