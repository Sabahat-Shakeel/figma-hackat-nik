import List from "./Items/components/footer/footlist";
import Hero from "./Items/components/header/hero";
import BestShoes from "./Items/components/main/bestshoes";
import Flight from "./Items/components/main/dontmiss";
import Features from "./Items/components/main/essential";
import { GearUp } from "./Items/components/main/gearup";



export default function Home() {
  return (
    <div>

<Hero/>
<BestShoes/>
<GearUp/>
<Flight/>
<Features/>
<List/>

    </div>
  );
}
