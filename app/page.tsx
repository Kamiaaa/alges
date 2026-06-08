import Carousel from "./components/carousel/Carousel";
import DonatePromo from "./components/DonatePromo";
import IslamicFeatures from "./components/IslamicFeatures";
import LatestEvents from "./components/LatestEvents";



export default function Home() {
  return (
    <>
      <Carousel />
      <LatestEvents />
      <IslamicFeatures />
      <DonatePromo />
      
    </>
  );
}
