import 'dotenv/config'
import { createServer } from 'node:http'
import { parseArgs, styleText } from 'node:util'
import chalk from 'chalk'

import { calculateTimeFromNowTo } from './lib/calculate.js'

const { PORT } = process.env

const { values } = parseArgs({
	options: {
		to: {
			type: 'string',
			description: 'Date string to measure time until',
		},
	},
})

const server = createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' })
	res.end(calculateTimeFromNowTo(new Date(values.to || '2026-01-01')))
})

server.listen(PORT, '127.0.0.1', () => {
	console.log(
		`Listening on ${chalk.blue(chalk.underline(`http://127.0.0.1:${PORT}`))}`,
	)
	console.log(
		`Listening on ${styleText(['underline', 'blue'], `http://127.0.0.1:${PORT}`)}`,
	)
})
