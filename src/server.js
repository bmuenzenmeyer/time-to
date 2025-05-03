import 'dotenv/config'
import { createServer } from 'node:http'
import chalk from 'chalk'

import { calculateTimeFromNowTo } from './lib/calculate.js'

const { PORT } = process.env

const server = createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' })
	res.end(calculateTimeFromNowTo(new Date('2028-11-07')))
})

server.listen(PORT, '127.0.0.1', () => {
	console.log(
		`Listening on ${chalk.blue(chalk.underline(`http://127.0.0.1:${PORT}`))}`,
	)
})