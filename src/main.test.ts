export {}

describe('testing pipeline tests', () => {
  it('should pass', () => {
    expect(true).toBe(true)
  })

  it('promise should pass', async () => {
    expect(await new Promise((resolve) => resolve(true))).toBeTruthy()
  })

  it('import should pass', () => {
    expect(import('process')).toBeTruthy()
  })
})
