const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value:{ type: Number, min: 0, required: true}
})

const debSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, min: 0, required: [true, 'Informe o valor do débito'] },
  status: { type: String, required: false, uppercase: true,
    status: ['PAGO', 'PENDENTE', 'AGENDADO']}
})

const billingCicleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  month: { type: Number, min: 1, max: 12, required: true },
  credits: [creditSchema],
  debts: [debSchema]
})



module.exports = restful.model('BillingCicle', billingCicleSchema)