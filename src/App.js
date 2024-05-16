import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";

// Common Components
import { Navigation } from "components/NavigationBar/Navigation";
// Standalone Pages
import { Home } from "pages/Home/Home";
import { Topics } from "pages/Topics/Topics";
import { PageNotFound } from "pages/PageNotFound/PageNotFound";
// React Hooks Components
import { ReactHooks } from "pages/Topics/ReactHooks/ReactHooks";
import { CallBackTutorial } from "pages/Topics/ReactHooks/UseCallback/CallbackTutorial";
import { ContextTutorial } from "pages/Topics/ReactHooks/UseContext/ContextTutorial";
import { EffectTutorial } from "pages/Topics/ReactHooks/UseEffect/EffectTutorial";
import { ImperativeHandle } from "pages/Topics/ReactHooks/UseImperativeHandle/ImperativeHandle";
import { LayoutEffectTutorial } from "pages/Topics/ReactHooks/UseLayoutEffect/LayoutEffectTutorial";
import { MemoTutorial } from "pages/Topics/ReactHooks/UseMemo/MemoTutorial";
import { RefTutorial } from "pages/Topics/ReactHooks/UseRef/RefTutorial";
import { ReducerTutorial } from "pages/Topics/ReactHooks/UseReducer/ReducerTutorial";
import { StateTutorial } from "pages/Topics/ReactHooks/UseState/StateTutorial";
// React Table Components
import { ReactTable } from "pages/Topics/ReactTable/ReactTable.js"
import { BasicTable } from "pages/Topics/ReactTable/BasicTable";
import { FilteringTable  } from "pages/Topics/ReactTable/FilteringTable";
import { PaginationTable  } from "pages/Topics/ReactTable/PaginationTable";
import { SortingTable } from "pages/Topics/ReactTable/SortingTable";
// React Project Components
import { Projects } from "pages/Projects/Projects";
import { TaskTracker } from "pages/Projects/TaskTracker/TaskTracker";


function App() {
  return (
    <div className="App">
      <HashRouter>
      <Navigation />
        <Routes>
            {/* Main Navigation routes */}
            <Route path="/" element={<Home />} />
            <Route path="/topics" element={<Topics />} />
            {/* React Hooks */}
            <Route path="react-hooks" element={<ReactHooks />} />
            <Route path="react-hooks/use-state" element={<StateTutorial />} />
            <Route path="react-hooks/use-effect" element={<EffectTutorial />} />
            <Route path="react-hooks/use-reduce" element={<ReducerTutorial />} />
            <Route path="react-hooks/use-ref" element={<RefTutorial />} />
            <Route path="react-hooks/use-memo" element={<MemoTutorial />} />
            <Route path="react-hooks/use-context" element={<ContextTutorial />} />
            <Route path="react-hooks/use-imperative-handler" element={<ImperativeHandle />} />
            <Route path="react-hooks/use-layout-effect" element={<LayoutEffectTutorial />} />
            <Route path="react-hooks/use-callback" element={<CallBackTutorial />} />
            {/* React Table */}
            <Route path="react-table" element={<ReactTable />} />
            <Route path="react-table/basic-table" element={<BasicTable />} />
            <Route path="react-table/filtering-table" element={<FilteringTable />} />
            <Route path="react-table/sorting-table" element={<SortingTable />} />
            <Route path="react-table/pagination-table" element={<PaginationTable />} />
            {/* Projects */}
            <Route path="projects" element={<Projects />} />
            <Route path="projects/task-tracker" element={<TaskTracker />} />
            {/* Page Not found */}
            <Route path="*" element={<PageNotFound />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
