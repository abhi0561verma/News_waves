import "./App.css";

import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import React, { useState } from "react";
//, useRef

import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {
  const [progress, setProgress] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar />

          <News
            setProgress={setProgress}
            key="general"
            pageSize={20}
            country="in"
            category="general"
          />
        </>
      ),
    },
    {
      path: "/business",
      element: (
        <>
          <NavBar onClick={({}) => ref.current.continuousStart()} />
          <News
            setProgress={setProgress}
            key="business"
            pageSize={15}
            country="in"
            category="business"
          />
        </>
      ),
    },
    {
      path: "/entertainment",
      element: (
        <>
          <NavBar />

          <News
            setProgress={setProgress}
            key="entertainment"
            pageSize={15}
            country="in"
            category="entertainment"
          />
        </>
      ),
    },
    {
      path: "/general",
      element: (
        <>
          <NavBar />
          <News
            setProgress={setProgress}
            key="general"
            pageSize={15}
            country="in"
            category="general"
          />
        </>
      ),
    },
    {
      path: "/health",
      element: (
        <>
          <NavBar />
          <News
            setProgress={setProgress}
            key="health"
            pageSize={15}
            country="in"
            category="health"
          />
        </>
      ),
    },
    {
      path: "/science",
      element: (
        <>
          <NavBar />
          <News
            setProgress={setProgress}
            key="science"
            pageSize={15}
            country="in"
            category="science"
          />
        </>
      ),
    },
    {
      path: "/sports",
      element: (
        <>
          <NavBar />
          <News
            setProgress={setProgress}
            key="sports"
            pageSize={15}
            country="in"
            category="sports"
          />
        </>
      ),
    },
    {
      path: "/technology",
      element: (
        <>
          <NavBar />
          <News
            setProgress={setProgress}
            // ref={loadingBar}
            key="technology"
            pageSize={15}
            country="in"
            category="technology"
          />
        </>
      ),
    },
  ]);

  return (
    <div>
      <LoadingBar
        color="#f11946"
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />

      <RouterProvider
        router={router}
        onClick={() => ref.current.continuousStart()}
      />
    </div>
  );
}
