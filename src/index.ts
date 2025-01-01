import chalk from 'chalk'
import 'dotenv/config'

const {LOCALE} = process.env

console.log(chalk.bgBlue('time-to!!!'))
console.log({LOCALE})