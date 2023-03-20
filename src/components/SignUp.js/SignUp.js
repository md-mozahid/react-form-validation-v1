import React, { useState } from 'react'
import Button from '../Button'
import Checkbox from '../Checkbox'
import InputText from '../InputText'
import PasswordValidation from '../PasswordValidation'

const initialData = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
  checkBox: false,
}

const SignUp = () => {
  const [userData, setUserData] = useState(initialData)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState(false)

  // destructure
  const { firstName, lastName, email, phoneNumber, confirmPassword } =
    userData

  const handleSubmit = (evt) => {
    evt.preventDefault()

    // validation part
    const userError = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      checkBox: false,
    }

    let isError = false

    if (firstName === '') {
      isError = true
      userError.firstName = 'Please fill the input'
    } else if (firstName.length <= 2) {
      isError = true
      userError.firstName = 'Minimum 3 character'
    }

    if (lastName === '') {
      isError = true
      userError.lastName = 'Please fill the input'
    } else if (lastName.length <= 2) {
      isError = true
      userError.lastName = 'Minimum 3 character'
    }

    const ValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
    if (email === '') {
      isError = true
      userError.email = 'Please input email'
    } else if (!ValidEmail) {
      isError = true
      userError.email = 'Invalid email address'
    }

    const phoneNoValid = /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/i.test(
      phoneNumber
    )
    if (phoneNumber === '') {
      isError = true
      userError.phoneNumber = 'Please input phoneNumber'
    } else if (!phoneNoValid) {
      isError = true
      userError.phoneNumber = 'Invalid phone number'
    }

    // password validate

    setErrors(userError)
    if (isError) return

    setSubmitted(true)
    setUserData(initialData)
  }

  const handleChange = (evt) => {
    setUserData({ ...userData, [evt.target.name]: evt.target.value })
  }

  return (
    <div className="container">
      <h1>create an account</h1>
      {submitted}
      <form onSubmit={handleSubmit}>
        <InputText
          type="text"
          name="firstName"
          placeholder="First name"
          value={firstName}
          onChange={handleChange}
        />
        <span className="errMsg">{errors.firstName}</span>
        <InputText
          type="text"
          name="lastName"
          placeholder="Last name"
          value={lastName}
          onChange={handleChange}
        />
        <span className="errMsg">{errors.lastName}</span>
        <InputText
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <span className="errMsg">{errors.email}</span>
        <InputText
          type="text"
          name="phoneNumber"
          placeholder="Phone number"
          value={phoneNumber}
          onChange={handleChange}
        />
        <span className="errMsg">{errors.phoneNumber}</span>
        <PasswordValidation />
        <InputText
          type="password"
          name="ConfirmPassword"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={handleChange}
        />
        <span className="errMsg">{errors.confirmPassword}</span>
        <div className='checkBox'>
          <Checkbox /> <span className='agree'>I agree all statements in Terms of service</span>
        </div>
        <Button type="submit" className="btn btn-fw">
          Register
        </Button>
        <span className="footerText">Have already an account? Login here</span>
      </form>
    </div>
  )
}

export default SignUp
