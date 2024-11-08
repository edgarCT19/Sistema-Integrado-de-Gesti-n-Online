import React from "react";
import Pagination from "@mui/material/Pagination";

const Paginacion = () => {
  return (
    <>
      <div className="table-header d-flex justify-content-end align-items-center mt-2 mb-3 p-2">
        <Pagination
          count={10}
          showFirstButton
          showLastButton
          sx={{
            "& .MuiPaginationItem-root": {
              color: "var(--color-uacam-primary)",
              "&.Mui-selected": {
                backgroundColor: "var(--color-uacam-secondary)",
                color: "#000",
              },
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.1)",
              },
            },
          }}
        />
      </div>
    </>
  );
};

export default Paginacion;
