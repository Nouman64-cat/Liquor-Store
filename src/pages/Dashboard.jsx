import React, { useState } from 'react'
import AddProduct from './AddProduct'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AllItems1 from './AllItems1';
import UpdateItem from './UpdateItem';
import { BlogManagement, CreateBlog } from '../components';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const Dashboard = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="bg-[#F5F5F5]">
      {/* <div className='w-full bg-[#F5F5F5] h-16 flex items-center justify-between'>
      <h1 className='text-[#2F2F2F] text-3xl font-bold p-5'>Dashboard</h1>
      </div> */}
      <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 524 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Welcome" {...a11yProps(0)} />
        <Tab label="Add Product" {...a11yProps(1)} />
        <Tab label="Update Product" {...a11yProps(2)} />
        <Tab label="Blog" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <AllItems1 />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AddProduct />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <UpdateItem />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className='flex items-center'>
        <CreateBlog />
        <BlogManagement />
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
    </div>
  )
}

export default Dashboard