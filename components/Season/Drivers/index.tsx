import { fetchSeasonDrivers } from "@/service/season";

const SeasonDrivers = async ({ year }: { year: string }) => {
  const drivers = await fetchSeasonDrivers(year);

  if ("error" in drivers) {
    return <div>[ERROR]</div>
  }

  return (
    <ul>
      {drivers?.sort((a, b) => Number(a.permanentNumber) - Number(b.permanentNumber)).map((driver, index) => (
        <li key={`driver-${index}-${driver.code || driver.driverId}`}>
          {driver.permanentNumber ? `#${driver.permanentNumber} - ` : ""} {driver.givenName} {driver.familyName} ({driver.nationality})
        </li>
      ))}
    </ul>
  )
}

export default SeasonDrivers;