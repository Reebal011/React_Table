import "./App.css";
import BasicTable from "./components/BasicTable";
import FilteringTable from "./components/FilteringTable";
import PaginationTable from "./components/PaginationTable";
import RowSelection from "./components/RowSelection";
import SortingTable from "./components/SortingTable";

function App() {
  return (
    <div className="App">
      <RowSelection />
    </div>
  );
}

export default App;
