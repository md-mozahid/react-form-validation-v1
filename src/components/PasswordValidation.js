import React, { useState } from 'react'
import { Icon } from 'react-icons-kit'
import { circle } from 'react-icons-kit/ikons/circle'
import { circle_ok } from 'react-icons-kit/ikons/circle_ok'

export default function PasswordValidation() {
  // password validation
  const [type, setType] = useState('password')
  const [lowerValidate, setLowerValidate] = useState(false)
  const [upperValidate, setUpperValidate] = useState(false)
  const [numberValidate, setNumberValidate] = useState(false)
  const [specialValidate, setSpecialValidate] = useState(false)
  const [lengthValidate, setLengthValidate] = useState(false)
  // const [passCon, setPassCon] = useState(false)

  const handleChange = (evt) => {
    // password validate start
    const lower = new RegExp('(?=.*[a-z])')
    const upper = new RegExp('(?=.*[A-Z])')
    const number = new RegExp('(?=.*[0-9])')
    const special = new RegExp('(?=.*[!@#$%^&*])')
    const length = new RegExp('(?=.{8,})')

    // lowercase validate
    if (lower.test(evt)) {
      setLowerValidate(true)
    } else {
      setLowerValidate(false)
    }
    // uppercase validate
    if (upper.test(evt)) {
      setUpperValidate(true)
    } else {
      setUpperValidate(false)
    }
    // number validate
    if (number.test(evt)) {
      setNumberValidate(true)
    } else {
      setNumberValidate(false)
    }
    // special character validate
    if (special.test(evt)) {
      setSpecialValidate(true)
    } else {
      setSpecialValidate(false)
    }
    // length validate
    if (length.test(evt)) {
      setLengthValidate(true)
    } else {
      setLengthValidate(false)
    }
  }

  return (
    <div className="passwordField">
      <div className="inputShowHide">
        <input
          className="inputText"
          type={type}
          placeholder="Password"
          onChange={(e) => handleChange(e.target.value)}
        />
        {type === 'password' ? (
          <span className="showPassword" onClick={() => setType('text')}>
            Show
          </span>
        ) : (
          <span className="showPassword" onClick={() => setType('password')}>
            Hide
          </span>
        )}
      </div>
      <div className="trackerBox">
        <div className={lowerValidate ? 'validated' : 'notValidated'}>
          {lowerValidate ? (
            <span>
              <Icon className="iconCircle" icon={circle_ok} />
            </span>
          ) : (
            <span>
              <Icon className="iconCircle" icon={circle} />
            </span>
          )}
          <span className="conditionText">At list one lowercase</span>
        </div>
        <div className={upperValidate ? 'validated' : 'notValidated'}>
          {upperValidate ? (
            <span>
              <Icon className="iconCircle" icon={circle_ok} />
            </span>
          ) : (
            <span>
              <Icon className="iconCircle" icon={circle} />
            </span>
          )}
          <span className="conditionText">At list one uppercase</span>
        </div>
        <div className={numberValidate ? 'validated' : 'notValidated'}>
          {numberValidate ? (
            <span>
              <Icon className="iconCircle" icon={circle_ok} />
            </span>
          ) : (
            <span>
              <Icon className="iconCircle" icon={circle} />
            </span>
          )}
          <span className="conditionText">At list one number</span>
        </div>
        <div className={specialValidate ? 'validated' : 'notValidated'}>
          {specialValidate ? (
            <span>
              <Icon className="iconCircle" icon={circle_ok} />
            </span>
          ) : (
            <span>
              <Icon className="iconCircle" icon={circle} />
            </span>
          )}
          <span className="conditionText">At list one special character</span>
        </div>
        <div className={lengthValidate ? 'validated' : 'notValidated'}>
          {lengthValidate ? (
            <span>
              <Icon className="iconCircle" icon={circle_ok} />
            </span>
          ) : (
            <span>
              <Icon className="iconCircle" icon={circle} />
            </span>
          )}
          <span className="conditionText">At list 8 character</span>
        </div>
      </div>
    </div>
  )
}
