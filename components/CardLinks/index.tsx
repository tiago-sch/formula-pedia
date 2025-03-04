import OverlayCard from "@/components/OverlayCard";

const CardLinks = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <OverlayCard
      image="/michal-wojcik-h2UjzXMyAD4-unsplash.jpg"
      alt="Racing track"
      title="Season of 2025"
      buttonText="Go"
      buttonHref="/seasons/2025"
    />

    <OverlayCard
      image="/bhavya-patel-BTw1SJMz_fM-unsplash.jpg"
      alt="Racing track"
      title="Season of 2024"
      buttonText="Go"
      buttonHref="/seasons/2024"
    />

    <OverlayCard
      image="/spencer-davis-o2ZqjDc7VXE-unsplash.jpg"
      alt="Racing driver"
      title="Drivers"
      buttonText="Go"
      buttonHref="/drivers"
    />

    <OverlayCard
      image="/eric-rothermel-FoKO4DpXamQ-unsplash.jpg"
      alt="Paper calendars"
      title="Seasons"
      buttonText="Go"
      buttonHref="/seasons"
    />

    <OverlayCard
      image="/zu-photography-3JZET_OPhBs-unsplash.jpg"
      alt="Racing suits"
      title="Constructors"
      buttonText="Go"
      buttonHref="/constructors"
    />

    <OverlayCard
      image="/aleksei-shabalin-6GCCq0q5Bm8-unsplash.jpg"
      alt="Racing track"
      title="Circuits"
      buttonText="Go"
      buttonHref="/circuits"
    />
  </div>
);

export default CardLinks;
