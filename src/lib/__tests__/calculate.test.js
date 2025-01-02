import {describe, it} from 'node:test'
import { createUTCDate } from '../calculate.js'

describe('createUTCDate', () => {
	it('should create a date in UTC time', (
		test
	) => {
		const date = createUTCDate(2026, 0, 1)
		// expect(date.toISOString()).toEqual('2026-01-01T00:00:00.000Z')ss
		test.assert.strictEqual(date.toISOString(),'2026-01-01T00:00:00.000Z')
	})
})
