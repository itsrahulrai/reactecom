
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Paginations = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mt-10">
      <Stack spacing={2}>
        <Pagination
          count={totalPages} // Total pages
          page={currentPage}
          onChange={(event, page) => onPageChange(page)}
          variant="outlined"
          shape="rounded"
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#333",
              fontWeight: "500",
            },
            "& .Mui-selected": {
              backgroundColor: "#EF2853 !important",
              color: "white !important",
              borderRadius: "8px",
            },
            "& .MuiPaginationItem-root:hover": {
              backgroundColor: "#EF2853",
              color: "white",
            },
          }}
        />
      </Stack>
    </div>
  );
};

export default Paginations;
