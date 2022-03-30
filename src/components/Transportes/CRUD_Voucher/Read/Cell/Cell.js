import TableCell from "@mui/material/TableCell";

export default function Cell({text , border_right = ""}) {
  return (
    <TableCell
      style={{
        fontSize: "20px",
        textAlign: "center",
        borderRight: border_right,
      }}
    >
      {text}
    </TableCell>
  );
}
