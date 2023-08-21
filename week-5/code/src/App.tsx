import ButtonPage from "./components/ButtonPage";
import InputPage from "./components/InputPage";
import SelectPage from "./components/SelectPage";

function App() {
  return (
    <div className="m-20 flex flex-col gap-10">
      <div className=" grid grid-flow-row justify-center rounded-lg p-4 shadow-md">
        <div className="mb-3 text-center text-2xl">Buttons</div>
        <ButtonPage />
      </div>
      <div className=" grid grid-flow-row justify-center rounded-lg p-4 shadow-md">
        <div className="mb-3 text-center text-2xl">Inputs</div>
        <InputPage />
      </div>
      <div className=" grid grid-flow-row justify-center rounded-lg p-4 shadow-md">
        <div className="mb-3 text-center text-2xl">SelectBoxs</div>
        <SelectPage />
      </div>
    </div>
  );
}

export default App;
