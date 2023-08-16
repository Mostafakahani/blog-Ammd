import { Typography } from "@mui/material";

const TypeSubText = (props) => {
    return (
        <>
        
            <Typography
                sx={{
                    color: '#fff',
                    textAlign: 'center',
                    marginTop: { sm: '-100px', xs: '-50px' }
                }}>
                {props.text}
            </Typography>

        </>
    )
}
export default TypeSubText;