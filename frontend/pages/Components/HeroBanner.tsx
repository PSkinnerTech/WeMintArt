import React from "react";
import ReactPlayer from "react-player/youtube";
import { Box, Text, useBreakpointValue } from "@chakra-ui/react";

const HeroBanner: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      position="relative"
      overflow="hidden"
      height={["300px", "1000px"]}
      w="100vw"
      marginLeft="-50vw"
      left="50%"
    >
      <ReactPlayer
        url="https://www.youtube.com/watch?v=bEssYwezchw"
        playing
        muted
        loop
        width="100vw"
        height="120%"
        style={{
          objectFit: "cover",
          left: "0%",
          top: "-10%",
          position: "absolute",
        }}
        config={
          {
            youtube: {
              playerVars: {
                controls: 0,
                showinfo: 0,
                autoplay: 1,
                mute: 1,
              },
            },
          } as any
        }
      />
      <Box
        position="absolute"
        top="50%"
        left={isMobile ? "50%" : "10%"}
        transform={isMobile ? "translate(-50%, -50%)" : "translateY(-50%)"}
        textAlign={isMobile ? "center" : "left"}
      >
        <Text
          fontSize={["lg", "6xl"]}
          fontWeight="bold"
          color="white"
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)"
        >
          The Official Faces by Larry Stewart Mint
        </Text>
      </Box>
    </Box>
  );
};

export default HeroBanner;
