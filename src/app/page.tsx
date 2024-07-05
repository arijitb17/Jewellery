import Image from "next/image";
import Slider from "./Slider/page";
import Cards from "./Cards/page";
import Divider from "./Divider/page";
import Login from "./Typewriter/page";
import Video from "./Video/page";
import Review from "./Review/page";

export default function Home() {
  return (
    <div>
     <Slider />
     <Divider />
     <Cards />
     <Login />
     <Video />
     <Review />
    </div>
  );
}
