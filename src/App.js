import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet.js'
import Welcome from './component/welcome'
import Message from './component/message'
import Counter from './component/Counter'
import Destructing from './component/Destructing';
import EventHandling from './component/Eventhandling';
import Classclick from './component/Classclick';
import Eventbind from './component/Eventbind';
import ParentComponent from './component/ParentComponent';
import UserGreeting from './component/UserGreeting';
import NameList from './component/List';
import Stylesheet from './component/Stylesheet';
import Inline from './component/Inline';
import './appStyle.css';
import styles from './appStyle.module.css';
import Form from './component/Form';
import FragmentDemo from './component/FragmentDemo';
import Table from './component/Table';
import PureComp from './component/PureComponent';
import Parentcomp from './component/ParentComponents';
import RefsDemo from './component/RefsDemo';
import FocusInput from './component/FocusInput';
import FRParentInput from './component/FRParentInput';
import Hero from './component/Hero';
import ErrorBoundary from './component/ErrorBoundary';
import ClickCounter from './component/ClickCounter';
import HoverCounter from './component/HoverCounter';
import ClickCounterTwo from './component/ClickCounterTwo';
import HoverCounterTwo from './component/HoverCounterTwo';
import User from './component/User';
import Counters from './component/Counters';
import ComponentC from './component/ComponentC';
import { UserProvider } from './component/UserContext';

function App() {
  return (
    <div className="App">
    {/* <Greet name="Test1" heroName="Superman">
     <p>Test paragraph </p>
     </Greet>
     <Greet name="Test2" heroName="Batman"/>
     <Greet name="Test3" heroName="Superwoman"/>

     <Welcome name="Test1" heroName="Superman">
     <p>Test paragraph </p>
     </Welcome>
     <Welcome name="Test2" heroName="Batman"/>
     <Welcome name="Test3" heroName="Superwoman"/>
    
     <Message/>

     <Counter/>
     <Destructing name="Test" heroName="User"/> 

     <EventHandling/>
     <Classclick/>
     <Eventbind/>
  <ParentComponent/> 
<UserGreeting/>
<NameList/>
<Stylesheet primary={true}/>
<Inline/>
<h1 className='error'> Error </h1>
<h1 className={styles.success}> Success </h1>
<Form/>
<FragmentDemo/>
<Table/>
<Parentcomp/>
<FocusInput/>
<FRParentInput/>
<ErrorBoundary>
<Hero heroName="SuperMan"/>
</ErrorBoundary>
<ErrorBoundary>
<Hero heroName ="Joker"/>
</ErrorBoundary>
<ErrorBoundary>
<Hero heroName ="BatMan"/>
</ErrorBoundary>
<ClickCounter/>
<ClickCounter name="ClickcounterName"/>
<HoverCounter/>
<ClickCounterTwo/>
<HoverCounterTwo/>
<User render={(isLoggedIn)=> isLoggedIn ? 'Nisha' : 'Guest'}/>
<Counters render={(count,incrementCount)=>(
  <ClickCounterTwo count={count} incrementCount={incrementCount}/>
)}/>

<Counters render={(count,incrementCount)=>(
  <HoverCounterTwo count={count} incrementCount={incrementCount}/>
)}/>
<Counters >
  {(count,incrementCount)=>(
  <ClickCounterTwo count={count} incrementCount={incrementCount}/>
  )}
</Counters>

<Counters >
  {(count,incrementCount)=>(
  <HoverCounterTwo count={count} incrementCount={incrementCount}/>
  )}
</Counters>

<UserProvider value="Nisha">
<ComponentC />
</UserProvider>
*/}

    </div>
  );
}

export default App;
