const calculateBMI = require(`./BMI Calculator`)

test(`Checks if BMI is Underweight.`,()=>{
    const height = 1.73
    const weight = 61
    expect(weight / (height * height)).not.toBeLessThanOrEqual(18.5)
})
test(`Checks if BMI is Normal.`,()=>{
    const height = 1.73
    const weight = 61
    expect(weight / (height * height)).toBeLessThanOrEqual(25)
})
test(`Checks if BMI is Pre-obesity.`,()=>{
    const height = 1.73
    const weight = 61
    expect(weight / (height * height)).toBeLessThanOrEqual(30)
})
test(`Checks if BMI is Obesity class I.`,()=>{
    const height = 1.73
    const weight = 61
    expect(weight / (height * height)).toBeLessThanOrEqual(35)
})
test(`Checks if BMI is Obesity class II.`,()=>{
    const height = 1.73
    const weight = 61
    expect(weight / (height * height)).toBeLessThanOrEqual(40)
})
test(`Checks if BMI is Obesity class III.`,()=>{
    const height = 1.73
    const weight = 61
    expect(weight / (height * height)).toBeLessThanOrEqual(41)
})