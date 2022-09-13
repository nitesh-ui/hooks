import './App.css';
import ClassCounter from './components/ClassCounter';
import ClassCounterOne from './components/ClassCounterOne';
import ClassMouse from './components/ClassMouse';
import ParentComponent from './components/useCallback/ParentComponent';
import DataFetching from './components/useEffect/DataFetching';
import HookCounterOne from './components/useEffect/HookCounterOne';
import HookMouse from './components/useEffect/HookMouse';
import LayoutEffect from './components/useLayoutEffect/LayoutEffect';
import SetValueHook from './components/useLayoutEffect/SetValueHook';
import Counter from './components/useMemo/Counter';
import ClassTimer from './components/useRef/ClassTimer';
import FocusInput from './components/useRef/FocusInput';
import HookTimer from './components/useRef/HookTimer';
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
      <div className="App">
        <FocusInput/>
        <ClassTimer/>
        <HookTimer/>
      </div>
      <div className="App">
        <LayoutEffect/>
        <SetValueHook/>
      </div>
    </div>
  );
}

export default App;
