import { Box } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

export type ProgressIndicatorProps = {
  handleNext: () => void;
  handlePrev: () => void;
  handleZoomIn: () => void;
  currentIndex: number;
};

export default function ProgressIndicator({
  handleNext,
  handlePrev,
  handleZoomIn,
  currentIndex,
}: ProgressIndicatorProps) {
  const handleFullscreen = () => {
    const element = document.documentElement;

    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.requestFullscreen) {
      // For Firefox
      element.requestFullscreen();
    } else if (element.requestFullscreen) {
      // For Safari
      element.requestFullscreen();
    } else if (element.requestFullscreen) {
      // For IE/Edge
      element.requestFullscreen();
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginBottom: "15px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "10px",
          backgroundColor: "gray",
          borderRadius: "20px",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        <Box
          sx={{
            width: "11.11%",
            height: "10px",
            backgroundColor: "red",
            borderRadius: "20px",
            marginLeft: `${currentIndex * 11.11}%`,
          }}
        />
      </Box>
      <ArrowBackIosNewIcon
        sx={{ marginRight: "5px", color: "red", cursor: "pointer" }}
        onClick={handlePrev}
      />
      <ArrowForwardIosIcon
        sx={{ marginLeft: "5px", color: "red", cursor: "pointer" }}
        onClick={handleNext}
      />
      <CloudDownloadIcon
        sx={{ marginLeft: "5px", color: "red", cursor: "pointer" }}
      />
      <ZoomInIcon
        sx={{ marginLeft: "5px", color: "red", cursor: "pointer" }}
        onClick={handleZoomIn}
      />
      <FullscreenIcon
        sx={{ marginLeft: "5px", color: "red", cursor: "pointer" }}
        onClick={handleFullscreen}
      />
    </Box>
  );
}
