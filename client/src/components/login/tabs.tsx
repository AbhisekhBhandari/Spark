import React from 'react'
import Tabs, {TabsProps} from '@mui/material/Tabs'
import Tab, {TabProps} from '@mui/material/Tab'
import { styled } from '@mui/material'


// const StyledTabs = styled(Tabs)<TabsProps>(({theme}))=>({
//     '& .MuiTabs-indicator':{
    
//     }
// })
export const StyledTab = styled(Tab)<TabProps>(({ theme }) => ({
    width: 300,
    '& .Mui-selected':{
        border: '2px solid black'
    }

  }));
