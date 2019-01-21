// импортирум класс Validator
import Validator from 'validatorjs'

export function getValidation (values, rules, options = {}) {
  // если не передается функция onFail или onSuccess, то по умолчанию в ней будет null
  const { onFail = () => null, onSuccess = () => null } = options

  const validation = new Validator(values, rules)

  // вызываем функцию класса
  // если валидация не прошла
  if (validation.fails()) {
    // вызываем функцию и в нее передаем ошибку
    onFail(validation.errors.all())
    // вызываем ошибку
    throw Error(validation.errors.all())
  }
  // вызываем эту функцию если валидация прошла успешно
  onSuccess(values)
  return {}
}
