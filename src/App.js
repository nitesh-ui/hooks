import './App.css';
import ClassCounter from './components/ClassCounter';
import ClassCounterOne from './components/ClassCounterOne';
import ClassMouse from './components/ClassMouse';
import ParentComponent from './components/useCallback/ParentComponent';
import DataFetching from './components/useEffect/DataFetching';
import HookCounterOne from './components/useEffect/HookCounterOne';
import HookMouse from './components/useEffect/HookMouse';
import Counter from './components/useMemo/Counter';
import HookCounter from './components/useState/HookCounter';
import HookCounterFour from './components/useState/HookCounterFour';
import HookCounterThree from './components/useState/HookCounterThree';
import HookCounterTwo from './components/useState/HookCounterTwo';

function App() {
  return (
    <div className="App">
      <ClassCounter/>
      <HookCounter/>
      <HookCounterTwo/>
      <HookCounterThree/>
      <HookCounterFour/>
      <div className="App">
        <ClassCounterOne/>
        <HookCounterOne/>
      </div>
      <div className="App">
        <ClassMouse/>
        <HookMouse/>
        <DataFetching/>
      </div>
      <div className="App">
        <ParentComponent/>
      </div>
      <div className="App">
        <Counter/>
      </div>
    </div>
  );
}

export default App;
