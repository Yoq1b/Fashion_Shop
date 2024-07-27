import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="space-y-[10px]">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          backgroundColor: "#140D2B",
          color: "#fff",
          borderRadius: "6px",
          fontsize: "12px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-white" />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className="bg-[#140D2B] rounded-[20px]"
          sx={{
            height: "50px",
            backgroundColor: "#140D2B",
            color: "#fff",
            borderRadius: "20px",
          }}
        >
          <Typography className="flex-shrink-0 font-poppins text-white">
            Product Details
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-[#140D2B] text-white opacity-50 w-full">
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
            tenetur sit ullam voluptatibus itaque. Deleniti?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{
          backgroundColor: "#140D2B",
          color: "#fff",
          borderRadius: "6px",
          fontsize: "12px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-white" />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className="bg-[#140D2B] rounded-[20px]"
          sx={{
            height: "50px",
            backgroundColor: "#140D2B",
            color: "#fff",
            borderRadius: "20px",
          }}
        >
          <Typography className="flex-shrink-0 font-poppins text-white">
            Specifications
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-[#140D2B] text-white text-[12px] mt-0 opacity-50 w-full">
          <Typography>
            He moonlights difficult engrossed, sportsmen interested has all
            Devonshire difficulty gay assistance joy. For who thoroughly
            conviction.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{
          backgroundColor: "#140D2B",
          color: "#fff",
          borderRadius: "6px",
          fontsize: "12px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-white" />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className="bg-[#140D2B] rounded-[20px]"
          sx={{
            height: "50px",
            backgroundColor: "#140D2B",
            color: "#fff",
            borderRadius: "20px",
          }}
        >
          <Typography className="flex-shrink-0 font-poppins text-white">
            Material & Care
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-[#140D2B] text-white text-[12px] mt-0 opacity-50 w-full">
          <Typography>
            He moonlights difficult engrossed, sportsmen interested has all
            Devonshire difficulty gay assistance joy. For who thoroughly
            conviction.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        sx={{
          backgroundColor: "#140D2B",
          color: "#fff",
          borderRadius: "6px",
          fontsize: "12px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-white" />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className="bg-[#140D2B] rounded-[20px]"
          sx={{
            height: "50px",
            backgroundColor: "#140D2B",
            color: "#fff",
            borderRadius: "20px",
          }}
        >
          <Typography className="flex-shrink-0 font-poppins text-white">
            Rating & Reviews
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-[#140D2B] text-white text-[12px] mt-0 opacity-50 w-full">
          <Typography>
            He moonlights difficult engrossed, sportsmen interested has all
            Devonshire difficulty gay assistance joy. For who thoroughly
            conviction.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
