import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Product from './Product';
import { useNavigate } from 'react-router-dom';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 4 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const  BasicTabs= ()=> {
    const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', display: "flex", justifyContent:"center" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="About" {...a11yProps(0)} />
          <Tab label="product" {...a11yProps(1)} />
          <Tab label="Documentation" {...a11yProps(2)} />
          <Tab label="Details" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <Box sx={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      <CustomTabPanel value={value} index={0} >
        { value? <p>hii</p>: <Product/> }
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      { value? <Product/>: <p>hii</p> }
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      { value? <Product/>: <p>hii</p> }
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Item Three
      </CustomTabPanel>

      </Box>
    
    </Box>
  );
}
export default BasicTabs;