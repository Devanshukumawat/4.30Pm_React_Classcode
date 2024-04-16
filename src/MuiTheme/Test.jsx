import { Avatar, Box, Button, Fab, FormControlLabel, FormGroup, IconButton  } from "@mui/material";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import {AlarmAdd, AddShoppingCart, CheckBox, EditCalendar } from "@mui/icons-material"
import Image from "../Day1/media/1691224446516 (1).jpeg"

function Test() {

    

  return (
    <>
      <h1>MUI Usages</h1>
      <Button variant="outlined"
      color="error"
      startIcon={<AcUnitIcon/>}
       >
        Login
      </Button>
      <Button
      variant="outlined"
        onClick={() => {
          alert("clicked");
        }}
        endIcon={<AlternateEmailIcon/>}
      >
        Click me
      </Button>
      <Box>
      <AlarmAdd/>
      </Box>

      <IconButton color="info" >
        <AlarmAdd/>
      </IconButton>

      <div>
        <h1>Helllo</h1>
        <AddShoppingCart/>
        <button>Hello</button>

      </div>

      
        <FormGroup>
        <FormControlLabel control={<CheckBox/>}/>
        </FormGroup>

        <Fab>
            <EditCalendar/>
        </Fab>


        
<Avatar alt="" src={Image}/>



        
      

      
    </>
  );
}

export default Test;



// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Badge from '@mui/material/Badge';
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';

// const StyledBadge = styled(Badge)(({ theme }) => ({
//   '& .MuiBadge-badge': {
//     backgroundColor: '#44b700',
//     color: '#44b700',
//     boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
//     '&::after': {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: '100%',
//       borderRadius: '50%',
//       animation: 'ripple 1.2s infinite ease-in-out',
//       border: '1px solid currentColor',
//       content: '""',
//     },
//   },
//   '@keyframes ripple': {
//     '0%': {
//       transform: 'scale(.8)',
//       opacity: 1,
//     },
//     '100%': {
//       transform: 'scale(2.4)',
//       opacity: 0,
//     },
//   },
// }));

// const SmallAvatar = styled(Avatar)(({ theme }) => ({
//   width: 22,
//   height: 22,
//   border: `2px solid ${theme.palette.background.paper}`,
// }));

// export default function BadgeAvatars() {
//   return (
//     <Stack direction="row" spacing={2}>
//       <StyledBadge
//         overlap="circular"
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//         variant="dot"
//       >
//         <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//       </StyledBadge>
//       <Badge
//         overlap="circular"
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//         badgeContent={
//           <SmallAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//         }
//       >
//         <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
//       </Badge>
//     </Stack>
//   );
// }



// // import * as React from 'react';
// // import Badge from '@mui/material/Badge';
// // import MailIcon from '@mui/icons-material/Mail';

// // export default function SimpleBadge() {
// //   return (
// //     <Badge badgeContent={4} color="primary">
// //       <MailIcon color="action" />
// //     </Badge>
// //   );
// // }


