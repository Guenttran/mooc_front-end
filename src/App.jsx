import {RouterProvider} from "react-router-dom";
import router from "./router/router.jsx";
import {Suspense} from "react";
import Spin from "./ui/Spin.jsx";
import styled from "styled-components";

const SpinCenter = styled(Spin)`
    height:100vh;
    width:100vw;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 60px;
`
function App() {

  return (
      <Suspense fallback={<SpinCenter/>}>
          <RouterProvider router={router}>
          </RouterProvider>
      </Suspense>
  )
}

export default App
