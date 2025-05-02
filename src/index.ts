#!/usr/bin/env node

import { parseArgs } from 'node:util'

import { calculateTimeFromNowTo } from './lib/calculate.js'

const { values } = parseArgs({
	strict: true,
	options: {
		to: {
			type: 'string',
			description: 'Date string to measure time until',
		},
	},
})

const timeTo = calculateTimeFromNowTo(values.to)
console.log(timeTo)