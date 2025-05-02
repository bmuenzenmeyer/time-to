#!/usr/bin/env node

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import { calculateTimeFromNowTo } from './lib/calculate.js'

const values = yargs(hideBin(process.argv))
	.option('to', {
		type: 'string',
		description: 'Date string to measure time until',
	})
	.parseSync()

const timeTo = calculateTimeFromNowTo(values.to)
console.log(timeTo)
