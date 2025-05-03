import { createServer } from 'node:http'
import { styleText } from 'node:util'

import { calculateTimeFromNowTo } from './lib/calculate.js'

const PORT = Number(process.env.PORT)

const server = createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' })
	res.end(calculateTimeFromNowTo('2028-11-07'))
})

server.listen(PORT, '127.0.0.1', () => {
	console.log(
		`Listening on ${styleText(['underline', 'blue'], `http://127.0.0.1:${PORT}`)}`,
	)
})