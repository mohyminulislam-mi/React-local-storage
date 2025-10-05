import { Suspense } from "react";
import Bottles from "./components/Bottles";


const bottobottlesPromise = fetch('bottles.json').then(res => res.json());

function App() {
 
  return (
    <>
      <Suspense fallback={<h1>Plese wait, Data is loading.....</h1>}>
        <Bottles bottobottlesPromise={bottobottlesPromise}></Bottles>
      </Suspense>
    </>
  )
}

export default App
