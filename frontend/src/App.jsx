import { SpaceLanding } from "./components/SpaceLanding/SpaceLanding";
// import { NewsletterSignup } from "./components/Newsletter/NewsletterSignup";
// import { LatestNews } from "./components/News/LatestNews";

function App() {
  return (
    <div className="custom-container">
      <SpaceLanding />
      {/* <NewsletterSignup
        title="Stay Updated"
        description="Get the latest space travel news and exclusive offers"
      /> */}
      {/* <LatestNews
        articles={[
          {
            title: "New Mars Mission Announced",
            date: "2024-01-15",
            preview:
              "Exciting new developments in our Mars exploration program...",
          },
          {
            title: "Space Hotel Opening Soon",
            date: "2024-01-10",
            preview: "Experience luxury accommodation in zero gravity...",
          },
          {
            title: "Lunar Base Expansion",
            date: "2024-01-05",
            preview:
              "Our Moon base facilities are growing to accommodate more visitors...",
          },
        ]}
      /> */}
    </div>
  );
}

export default App;
