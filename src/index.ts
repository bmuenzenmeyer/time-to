#!/usr/bin/env node

import chalk from 'chalk'
import 'dotenv/config'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

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

console.log(chalk.bgBlue(`time-to ${options.to}`))
console.log({LOCALE})