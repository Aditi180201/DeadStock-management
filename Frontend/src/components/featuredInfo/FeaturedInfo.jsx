import "./featuredInfo.css";


export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Working</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">415</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Not Working but Repairable</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">15</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Not Working and Not Repairable</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">25</span>
        </div>
      </div>
    </div>
  );
}
