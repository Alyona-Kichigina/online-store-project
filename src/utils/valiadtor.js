import Validator from 'validatorjs'

export function getValidation (values, rules, options = {}) {
  const { onFail = () => null, onSuccess = () => null } = options

  const validation = new Validator(values, rules)

  if (validation.fails()) {
    onFail(validation.errors.all())
    throw Error(validation.errors.all())
  }
  onSuccess(values)
  return {}
}
