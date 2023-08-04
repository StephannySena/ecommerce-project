import { Box, Drawer, List, Typography, styled } from "@mui/material";

export default function SideBar({ openDrawner, setOpenDrawner }: any) {
  const DrawnerCustom = styled(Box)({
    backgroundColor: "#363636",
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
