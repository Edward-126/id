import me from "../assets/me.jpg";
import HeadCont from "./headcont/HeadCont";
import CardText from "./bodycont/CardText";
import Socials from "./bodycont/Socials";

export default function Card() {
  return (
    <div className="container">
      <div className="card border-0 card-main">
        <img src={me} className="card-img-top" alt="..." />
        <div className="card-body">
          <HeadCont />
          <CardText />
        </div>
        <Socials />
      </div>
    </div>
  );
}
