const data = require('./eth-usd.json')

/**
 * Download the tar.gz historical data from CryptoChassis
 * 1. Access a URL with more data than it is willing to return https://api.cryptochassis.com/v1/ohlc/coinbase/eth-usd?interval=1d&startTime=2020-01-01T00:00:00Z
 * 2. Save the S3 Location
 *
 * Unzip it and use https://www.convertcsv.com/csv-to-json.htm to convert it to JSON
 *
 * Save the JSON beside this file
 */

export default function handler(req, res) {
  res.status(200).json({ history: data })
}
