import { Autocomplete, Box, Drawer, TextField, Typography, styled } from "@mui/material";
import theme from "../../../Theme";

export default function SideBar({ openDrawner, setOpenDrawner }: any) {
  const DrawnerCustom = styled(Box)({
    backgroundColor: theme.palette.primary.light,
    height: "100vh",
    padding: "10px",
  });
  
 const TextFieldCustom = styled(TextField) `
    & label.Mui-focused {
      color: white;
    }
    & label {
      color: white;
    }
    & input {
      color: white;
    }
    & .MuiSvgIcon-root {
      color: white;
    }
    & .MuiInput-underline:after {
      border-bottom-color: white;
    }
    & .MuiOutlinedInput-root {
      & fieldset {
        border-color: white;
      }
      &:hover fieldset {
        border-color: white;
      }
      &.Mui-focused fieldset {
        border-color: white;
      }
    }
 `

  const options = [
    { label: 'The Godfather', id: 1 },
    { label: 'Pulp Fiction', id: 2 },
  ];

  return (
    <Drawer open={openDrawner} onClose={() => setOpenDrawner(!openDrawner)}>
      <DrawnerCustom>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          sx={{ width: 300 }}
          color="white"
          renderInput={(params) => <TextFieldCustom {...params} label="Pesquisar"/>}
        />
      </DrawnerCustom>
    </Drawer>
  );
}
