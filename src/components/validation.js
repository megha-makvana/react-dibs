const validate = values => {
    const errors = {}    
    const requiredFields = [
      'business_name',
      'business_category',
      'open',
      'close',
      'days',
      'contact_number',
      'address',
      '0service_name',
      '1service_name',
      '2service_name',
      '0service_duration',
      '1service_duration',
      '2service_duration',
    ]
  
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Required'
      }
    })

    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
      errors.email = 'Invalid email address'
    }
    return errors
  }

  export default validate;