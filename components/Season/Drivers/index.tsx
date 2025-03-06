import { fetchSeasonDrivers } from "@/service/season";

const SeasonDrivers = async ({ year }: { year: string }) => {
  const drivers = await fetchSeasonDrivers(year);

  if ("error" in drivers) {
    return <div>[ERROR]</div>
  }

  return (
    <ul>
      {drivers?.map((driver, index) => (
        <li key={`driver-${index}-${driver.code || driver.driverId}`}>
          {driver.code || driver.driverId} - {driver.givenName} {driver.familyName} ({driver.nationality})
        </li>
      ))}
    </ul>
  )
}

export default SeasonDrivers;