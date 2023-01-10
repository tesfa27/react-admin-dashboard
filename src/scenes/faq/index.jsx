import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequentedly Asked Questions Page" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            some text over here are djfkjfksk 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            dhjdjf fhjfdls aklsjfjlfdl fjdkf dk eurie l mcncla dfjkdieiel
            eirulsa ele kd dudfhal eue dfjkfjl;al eieu fkd aleieeo klpefiu
            aieura as
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your Favorite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            dhjdjf fhjfdls aklsjfjlfdl fjdkf dk eurie l mcncla dfjkdieiel
            eirulsa ele kd dudfhal eue dfjkfjl;al eieu fkd aleieeo klpefiu
            aieura as
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            dhjdjf fhjfdls aklsjfjlfdl fjdkf dk eurie l mcncla dfjkdieiel
            eirulsa ele kd dudfhal eue dfjkfjl;al eieu fkd aleieeo klpefiu
            aieura as
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            dhjdjf fhjfdls aklsjfjlfdl fjdkf dk eurie l mcncla dfjkdieiel
            eirulsa ele kd dudfhal eue dfjkfjl;al eieu fkd aleieeo klpefiu
            aieura as
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
