import { fetchSeasonConstructors } from "@/service/season";

const SeasonConstructors = async ({ year }: { year: string }) => {
  const constructors = await fetchSeasonConstructors(year);

  if ("error" in constructors) {
    return <div>[ERROR]</div>
  }

  return (
    <ul>
      {constructors?.map(maker => (
        <li key={maker.constructorId}>
          {maker.name} ({maker.nationality})
        </li>
      ))}
    </ul>
  )
}

export default SeasonConstructors;
