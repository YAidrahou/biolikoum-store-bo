import FeatureButton from "@/components/ui/home/FeatureButton";
import StatsCard from "@/components/ui/home/StatsCard";
import StatsChart from "@/components/ui/home/StatsChart";
import { faAdd, faArrowTrendDown, faPenSquare, faSackDollar, faShop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {

  const stats = [
    {
      title: "Total Product",
      value: "1,600",
      description: "12 low in stock",
      icon: <FontAwesomeIcon icon={faShop} className="absolute top-4 right-4"  style={{ width: '35px', height: '35px' }}/>,
      color: "text-primary",
    },
    {
      title: "Total value",
      value: "2,300",
      description: "Based on current stock",
      icon: <FontAwesomeIcon icon={faSackDollar} className="absolute top-4 right-4" style={{ width: '35px', height: '35px' }} />,
      color: "text-primary",
    },
    {
      title: "Low Stock Alert",
      value: "$1,600",
      description: "Products need restock",
      icon: <FontAwesomeIcon icon={faArrowTrendDown} className="absolute top-4 right-4"  style={{ width: '35px', height: '35px' }}/>,
      color: "text-primary",
    }
  ]; 

  const features = [
    {
      title: "Add New Product",
      icon: <FontAwesomeIcon icon={faAdd} style={{ width: '35px', height: '35px' }} />,
      description: "Add a new product to the inventory",
    },
    {
      title: "Update Stock",
      icon: <FontAwesomeIcon icon={faPenSquare} style={{ width: '35px', height: '35px' }} />,
      description: "Update stock of existing products",
    },
    {
      title: "Update Prices",
      icon: <FontAwesomeIcon icon={faPenSquare} style={{ width: '35px', height: '35px' }} />,
      description: "Update prices of existing products",
    },
    {
      title: "View Low Stock",
      icon: <FontAwesomeIcon icon={faArrowTrendDown} style={{ width: '35px', height: '35px' }} />,
      description: "View products that need restock",
    }
  ]

  return (
    <div className="grid grid-row-3 gap-4 mx-5">
      <div className="stats mt-4 grid grid-cols-3 gap-4">
        {
          stats.map((stat) => (
            <StatsCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              description={stat.description}
              icon={stat.icon}
              color={stat.color}
            />
            )
          )
        }
      </div>
      <div className="feature-cards flex justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4">
          {
            features.map((feature) => (
              <FeatureButton key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} />
            ))
          }
        </div>
      </div>
      <div className="graph-stats flex justify-center">
        <StatsChart />
      </div>
    </div>
  );
}
