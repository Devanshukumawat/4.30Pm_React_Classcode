import { Box, Typography, styled } from "@mui/material";

function Mystyle() {

    const Box1 = styled(Box)({
            backgroundColor:"yellow",
            color:"brown"
    })

    return ( 
        <>
            <Box
            sx={{
                backgroundColor:"red",
                color:"white"
            }}
            >
                <Typography variant="h2">
                    Hello Good AfterNoon
                </Typography>
            </Box>

            <Box1>
                <Typography variant="h2">
                    Hello Good Morning
                </Typography>
            </Box1>
        </>
     );
}

export default Mystyle;