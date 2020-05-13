import React from "react";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import { MuiThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "30%",
    color: "#0EB7BF",

  },
  icon: {
    color: "#B5EDEA",

  }
}));
const muiTheme = createMuiTheme({
  overrides: {
    MuiStepConnector: {
      line: {
        borderColor: '#0EB7BF'
      }
    },
    MuiStepIcon: {
      root: {
        color: '#000000', // or 'rgba(0, 0, 0, 1)'
        '&$active': {
          color: '#0EB7BF',
        },
        '&$completed': {
          color: '#000000',
        },
      },
    },
  }
});

function getSteps() {
  return ["", "", ""];
}

export default function MyStepper({ activeStepId }) {
  const classes = useStyles();
  /*  const [activeStep, setActiveStep] = React.useState(0); */
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={muiTheme}>
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
      </MuiThemeProvider>
    </div>
  );
}
