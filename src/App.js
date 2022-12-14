import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navigation } from "./components/NavigationBar/Navigation";
// import Components

import { ReactHooks } from "./pages/ReactHooks/ReactHooks";
import { Home } from "./pages/Home/Home";

import { CallBackTutorial } from "./pages/ReactHooks/UseCallback/CallbackTutorial";
import { ContextTutorial } from "./pages/ReactHooks/UseContext/ContextTutorial";
import { EffectTutorial } from "./pages/ReactHooks/UseEffect/EffectTutorial";
import { ImperativeHandle } from "./pages/ReactHooks/UseImperativeHandle/ImperativeHandle";
import { LayoutEffectTutorial } from "./pages/ReactHooks/UseLayoutEffect/LayoutEffectTutorial";
import { MemoTutorial } from "./pages/ReactHooks/UseMemo/MemoTutorial";
import { RefTutorial } from "./pages/ReactHooks/UseRef/RefTutorial";
import { ReducerTutorial } from "./pages/ReactHooks/UseReducer/ReducerTutorial";
import { StateTutorial } from "./pages/ReactHooks/UseState/StateTutorial";
import { Topics } from "./pages/Topics/Topics";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";


function App() {
  return (
    <div className="App">
      <Router basename="/react-practices">
        <Navigation />
        <Routes>
            {/* Main Navigation routes */}
            <Route path="/" element={<Home />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="react-hooks/use-state" element={<StateTutorial />} />
            <Route path="react-hooks/use-effect" element={<EffectTutorial />} />
            <Route path="react-hooks/use-reduce" element={<ReducerTutorial />} />
            <Route path="react-hooks/use-ref" element={<RefTutorial />} />
            <Route path="react-hooks/use-memo" element={<MemoTutorial />} />
            <Route path="react-hooks/use-context" element={<ContextTutorial />} />
            <Route path="react-hooks/use-imperative-handler" element={<ImperativeHandle />} />
            <Route path="react-hooks/use-layout-effect" element={<LayoutEffectTutorial />} />
            <Route path="react-hooks/use-callback" element={<CallBackTutorial />} />
            <Route path="react-hooks" element={<ReactHooks />} />

            <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
