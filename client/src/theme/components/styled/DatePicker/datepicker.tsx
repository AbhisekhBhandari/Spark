// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
// import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
// import Typography from '@mui/material/Typography';
// import { useMediaQuery } from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers';

// // const matches = useMediaQuery('(min-width:600px)');
// export const CustomDatePicker = styled(({ ...props }) => (
//   <DatePicker {...props}   />
// ))(({ theme }) => ({
//     "& .MuiInputBase-root":{
//         fontSize: '0.875rem',
//         lineHeight: '1.25rem',
//         width:"100%",
//         fontFamily:'inherit',
//         border:'solid #6372E5 1px',
//         borderRadius:'0.5rem',
//     },
//     "& .MuiInputBase-root input":{
//         height:'10px'
//     }

// //   [`& .${tooltipClasses.tooltip}`]: {
// //     backgroundColor: theme.palette.common.white,
// //     color: 'rgba(0, 0, 0, 0.87)',
// //     boxShadow: theme.shadows[1],
// //     fontSize: 11,
// //     px:3,
// //     py:10

// //   },
// //   [`& .${tooltipClasses.arrow}`]: {
// //     color: theme.palette.common.white,
// //     // boxShadow: theme.shadows[1],

// //   },
// }));

// // const styledMUITooltip = ()=>{

// // }

import { styled } from "@mui/material/styles";
import { DatePicker } from "@mui/x-date-pickers";

export const CustomDatePicker = styled(DatePicker)(({ theme }) => ({
  "& .MuiInputBase-root": {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    width: "100%",
    fontFamily: "inherit",
    borderRadius: "0.5rem",
    outline: "none",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
    paddingLeft:' 5px',
    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(99, 114, 229, 0.6)"
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    },
  },
  "& input": {
    // Directly targeting the input element
    padding: "8px",
    height: "26px",
    border: "none",
    // Adjust the height as needed
    // Optional: Add padding to the input
  },
}));
