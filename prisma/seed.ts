// prisma/seed.ts

import { PrismaClient } from '@prisma/client'
import weatherData from "../src/lib/data.json" assert { type: "json" }

const prisma = new PrismaClient()

async function main() {
  console.log(`Start seeding ...`)

  for (const p of weatherData) {
    const record = await prisma.locationDay.create({
      data: {
        countryName: p.countryName, 
        cityName: p.cityName,
        month: p.month,
        day: p.day,
        temperature_2m_max: p.temperature_2m_max,
        temperature_2m_min: p.temperature_2m_min,
        temperature_2m_mean: p.temperature_2m_mean,
        apparent_temperature_max: p.apparent_temperature_max,
        apparent_temperature_min: p.apparent_temperature_min,
        apparent_temperature_mean: p.apparent_temperature_mean,
        sunrise: p.sunrise,
        sunset: p.sunset,
        precipitation_sum: p.precipitation_sum,
        rain_sum: p.rain_sum,
        snowfall_sum: p.snowfall_sum,
        precipitation_hours: p.precipitation_hours,
        windspeed_10m_max: p.windspeed_10m_max,
        windgusts_10m_max: p.windgusts_10m_max,
      }
    })
    console.log(`Created record with id: ${record.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })