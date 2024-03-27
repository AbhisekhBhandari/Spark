import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';



// const matches = useMediaQuery('(min-width:600px)');
export const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props}  classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
    px:3,
    py:10
    
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
    // boxShadow: theme.shadows[1],
    
  },
}));

const styledMUITooltip = ()=>{

}
