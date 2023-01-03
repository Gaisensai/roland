import './App.css';
import { Box } from "@mui/material";

function App() {
  return (
    <Box className="container">
      <Box className="header">
        <Box className='name'>
          <h3>Toko</h3>
          <h3>KelongTong</h3>
          <p>lorem ipsum</p>
        </Box>
        <Box className='invoice'>
          <h1>Invoice</h1>
          <p> December 26th 2018</p>
          <Box className='receiver'>
            <p>To.</p>
            <h4>Mrs Margreth</h4>
          </Box>
          <Box className='details'>
            <p>Company Name</p>
            <p>Address and City Name</p>
            <p>2424 Country Name</p>
          </Box> 
        </Box>
        <Box className='isn'>
          <h4>NO/ISN 01.12.2019</h4>
        </Box>
      </Box>
      <Box className=''>
        <table>
          <tr>
            <th>QTY</th>
            <th>Description</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </table>

      </Box>
      
    </Box>
  );
}

export default App;
