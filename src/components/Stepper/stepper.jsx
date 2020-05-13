import React from "react";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import "./stepper.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "30%",
    color: "#0EB7BF",
  },
  icon: {
    color: "#B5EDEA",
  },
}));

function getSteps() {
  return ["", "", ""];
}

export default function MyStepper({ activeStepId }) {
  const classes = useStyles();
  /*  const [activeStep, setActiveStep] = React.useState(0); */
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel nonLinear activeStep={activeStepId}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel
                {...labelProps}
                StepIconProps={{
                  classes: { root: classes.icon },
                }}
              >
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
}
