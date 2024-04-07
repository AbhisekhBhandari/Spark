import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";
import React from "react";
import { StyledMenu } from "@/theme/components/styled/Menu";
import Image from "next/image";
import OptionIcon from '@/assets/Post/Option.svg';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { client } from "@/lib/utils/request";
import { POST_DELETE_QUERY } from "@/lib/query/query";

interface PostMenuProps{
  postId:string
}


export default function PostMenu({postId}:PostMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const queryClient = useQueryClient()
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteMutation = useMutation({
    mutationKey:['deletePost'],
    mutationFn : async (postId:string)=> {
      handleClose()
      return client.request(POST_DELETE_QUERY,{postId})},
    onSuccess:()=>{
        queryClient.invalidateQueries({queryKey:['posts']})
    } 
  })


  return (
    <div>
      <Image
        onClick={handleClick}
        src={OptionIcon}
        height={30}
        width={30}
        alt="option"
        aria-expanded={open ? "true" : undefined}
      />

     
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <EditIcon />
          Edit
        </MenuItem>
        <MenuItem onClick={()=>deleteMutation.mutate(postId)} disableRipple>
          <FileCopyIcon />
          Delete
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <ArchiveIcon />
          Save
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          More
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
