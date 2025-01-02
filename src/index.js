#!/usr/bin/env node

// import { parseArgs } from 'node:util'

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import { calculateTimeFromNowTo } from './lib/calculate.js'

const values = yargs(hideBin(process.argv))
	.option('to', {
		type: 'string',
		description: 'Date string to measure time until',
	})
	.option('verbose', {
		alias: 'v',
		type: 'boolean',
		description: 'Run with verbose logging',
	})
	.parseSync()

// const { values } = parseArgs({
// 	options: {
// 		to: {
// 			type: 'string',
// 			description: 'Date string to measure time until',
// 		},
// 	},
// })

const timeTo = calculateTimeFromNowTo(values.to)
console.log(timeTo)