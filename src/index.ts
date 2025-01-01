#!/usr/bin/env node

import 'dotenv/config'
import chalk from 'chalk'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import { calculateTimeFromNowTo, formatDateAndTime } from './lib/calculate.js'

const {LOCALE} = process.env

const options = yargs(hideBin(process.argv))
.option('to', {
    type: 'string',
    description: 'Date string to measure time until'
  })
.option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Run with verbose logging'
  })
.parseSync()

console.log(chalk.bgBlue(`time-to ${options.to} in ${LOCALE}`))

if (options.verbose) {
    const preamble = formatDateAndTime(options.to, LOCALE)
    console.log(chalk.yellow(preamble))
}

const timeTo = calculateTimeFromNowTo(options.to)
console.log(chalk.green(timeTo))