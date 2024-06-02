import { Paper } from "@mui/material";
import PlaceCard from "../../components/PlaceCard";

export default function Explore() {
  return (
    <div className="grid grid-cols-5 gap-2 m-4">
      <Paper
        className="col-span-1"
        sx={{ minHeight: 300, maxWidth: "full", background: "#111827" }}
      >
        this 2 cols
      </Paper>
      <Paper
        className="col-span-4 grid grid-cols-4 gap-2 p-4"
        sx={{ minHeight: 300, maxWidth: "full", background: "red" }}
      >
        <PlaceCard/>
        <PlaceCard/>
        <PlaceCard/>
        <PlaceCard/>
        <PlaceCard/>
        <PlaceCard/>
        <PlaceCard/>
        <PlaceCard/>
      </Paper>
    </div>
  );
}
