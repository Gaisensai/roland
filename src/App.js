import './App.css';
import { Box } from "@mui/material";

function App() {
  return (
    <Box className= "body">
    <Box className="container">
      <Box className="header">
        <Box className='name'>
          <h3>Toko</h3>
          <h3>KelongTong</h3>
          <p>lorem ipsum</p>
        </Box>
        <Box className='invoice'>
          <h1>INVOICE</h1>
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
      <Box className='table'>
        <table>
          <tr>
            <th>QTY</th>
            <th>DESCRIPTION</th>
            <th>PRICE</th>
            <th>TOTAL</th>
          </tr>
          <tr>
            <td>3</td>
            <td><strong>Kunyit Asam</strong><br></br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            </td>
            <td>$10.00</td>
            <td>$30.00</td>
          </tr>
          <tr>
            <td>2</td>
            <td><strong>Sabum Sirih</strong><br></br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </td>
            <td>$12.00</td>
            <td>$24.00</td>
          </tr>
          <tr>
            <td>5</td>
            <td><strong>Cream Siang, Malam</strong><br></br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            </td>
            <td>$30.00</td>
            <td>$150.00</td>
          </tr>
        </table>
        
        <Box>
          <Box className='payment'>
            <p><strong>Payment method</strong></p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </p>
          </Box>
          <Box className='terms'>
            <p><strong>Terms and conditions</strong></p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </p>
          </Box>
        </Box>

      <Box className="subtotal">
          <p><strong>Subtotal</strong></p>
          <p><strong>Tax 10%</strong></p>
      </Box>
      <Box className ="price">
        <p>$164.00</p>
        <p>$16.40</p>
      </Box>

      <Box className= 'orange-box'>
          <p><strong>GRAND TOTAL: $180.40</strong></p>
      </Box>
      </Box>
      
    </Box>
    </Box>
  );
}

export default App;
