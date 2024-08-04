import {NetflixCard, Footer} from './Components/NetflixCards'
import style from './Components/Netflix.module.css'
import { EventHandling } from './Components/EventHandlins'
import { States } from './Components/hooks/State'
import { DerivedStates } from './Components/DerivedStates'
import { LiftStates } from './Components/LiftStateUp'
import { ToggleSwitch } from './Projects/ToggleBar/ToggleSwitch'
export const App =()=>{
  return <>
  <section className={style.container}>
    <h1 className="text-3xl font-bold my-3 mx-5 underline">List of Best Series</h1>
  {/* <NetflixCard/> */}
  {/* <EventHandling/> */}
  {/* <States/> */}
  {/* <DerivedStates/> */}
  {/* <LiftStates/> */}
  <ToggleSwitch/>
  </section>
  {/* <Footer/> */}
  </>
}