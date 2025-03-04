import CardLinks from "@/components/CardLinks";

export default function Home() {
  return (
    <>
      <div
        className="hero h-80 md:h-100 lg:h-150 mb-5 rounded"
        style={{
          backgroundImage: "url(/jesper-giortz-behrens-yn8-sVBtys8-unsplash.jpg)",
        }}>
        <div className="hero-overlay rounded"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold serif">Formula Pedia</h1>
            <p className="text-lg">
              Quick wiki about everything Formula 1
            </p>
          </div>
        </div>
      </div>
      <main>
        <CardLinks />
      </main>
    </>
  );
}
