import { Box, Drawer, Typography, styled } from "@mui/material";
import theme from "../../../Theme";

export default function SideBar({ openDrawner, setOpenDrawner }: any) {
  const DrawnerCustom = styled(Box)({
    backgroundColor: theme.palette.primary.light,
    height: "100vh",
    padding: "10px"
  });

  return (
    <Drawer open={openDrawner} onClose={() => setOpenDrawner(!openDrawner)}>
      <DrawnerCustom>
        <Typography variant="h6" color={"whitesmoke"}>aaaaaa</Typography>
      </DrawnerCustom>
    </Drawer>
  );
}
