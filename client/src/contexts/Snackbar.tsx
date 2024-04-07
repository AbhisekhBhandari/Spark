"use client";

import { Alert, AlertProps, Snackbar } from "@mui/material";
import { ReactNode, createContext, useContext, useState } from "react";

const SnackbarContext = createContext({
  showSnackbar: (message: string, severity: SeverityType) => {},
});

type SeverityType = "error" | "info" | "success" | "warning";

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState<SeverityType>("info");
  const [message, setMessage] = useState<string>("");

  const handleClose = () => {
    setOpen(false);
  };
  function showSnackbar(message: string, severity: SeverityType) {
    setMessage(message);
    setSeverity(severity);
    setOpen(true);
  }

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical:'bottom', horizontal:'right' }}>
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
      {children}
    </SnackbarContext.Provider>
  );
};

export function useSnackbar() {
  return useContext(SnackbarContext);
}
