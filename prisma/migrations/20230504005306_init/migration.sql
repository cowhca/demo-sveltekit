-- CreateTable
CREATE TABLE "locationDay" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "countryName" TEXT NOT NULL,
    "cityName" TEXT NOT NULL,
    "month" INTEGER NOT NULL,
    "day" INTEGER NOT NULL,
    "temperature_2m_max" INTEGER NOT NULL,
    "temperature_2m_min" INTEGER NOT NULL,
    "temperature_2m_mean" INTEGER NOT NULL,
    "apparent_temperature_max" INTEGER NOT NULL,
    "apparent_temperature_min" INTEGER NOT NULL,
    "apparent_temperature_mean" INTEGER NOT NULL,
    "sunrise" INTEGER NOT NULL,
    "sunset" INTEGER NOT NULL,
    "precipitation_sum" INTEGER NOT NULL,
    "rain_sum" INTEGER NOT NULL,
    "snowfall_sum" INTEGER NOT NULL,
    "precipitation_hours" INTEGER NOT NULL,
    "windspeed_10m_max" INTEGER NOT NULL,
    "windgusts_10m_max" INTEGER NOT NULL
);
