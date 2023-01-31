import { Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'

export const Menu = () => {

  const menu = useSelector(state => state.menu.menuLists);
  const [selectedTabNumber, setSelectedTabNumber] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log("file: Menu.js:15 -> handleChange -> newValue", newValue)
    setSelectedTabNumber(newValue);
  };


  const showTabContent = useCallback(() => {
    switch (selectedTabNumber) {
      case 0: {
        return null;
      }
    }
  }, [selectedTabNumber])




  return (

    <Box>
      <Tabs value={selectedTabNumber} onChange={handleChange} centered>
        <Tab label="Contents" />
        <Tab label="Index" />
        <Tab label="Bookmarks" />
      </Tabs>
      {selectedTabNumber === 0 ? <Box>
        0
      </Box> : null}
    </Box>
  )
}
