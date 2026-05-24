import React, {
  useContext,
  useState
} from 'react'

import Context from '../context/Context'

const Card = ({ item }) => {

  const {
    deleteUser,
    updateUser
  } = useContext(Context)

  const [isEdit, setIsEdit] =
    useState(false)

  // OLD VALUES STAY INSIDE INPUTS
  const [name, setName] =
    useState(item.name)

  const [age, setAge] =
    useState(item.age)

  const [email, setEmail] =
    useState(item.email)

  const [details, setDetails] =
    useState(item.details)

  // UPDATE
  const handleUpdate = () => {

    const updatedData = {
      id: item.id,
      name,
      age,
      email,
      details
    }

    updateUser(updatedData)

    setIsEdit(false)
  }

  return (

    <div className='card-container'>

      <div className='card-content'>

        {
          isEdit ? (

            <div className='edit-box'>

              <input
                type='text'
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                placeholder='Name'
              />

              <input
                type='text'
                value={age}
                onChange={(e) =>
                  setAge(e.target.value)
                }
                placeholder='Age'
              />

              <input
                type='text'
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder='Email'
              />

              <input
                type='text'
                value={details}
                onChange={(e) =>
                  setDetails(e.target.value)
                }
                placeholder='Details'
              />

              <button
                className='update-btn'
                onClick={handleUpdate}
              >
                Update
              </button>

            </div>

          ) : (

            <div>

              <p>
                <strong>Name:</strong>
                {' '}
                {item.name}
              </p>

              <p>
                <strong>Age:</strong>
                {' '}
                {item.age}
              </p>

              <p>
                <strong>Email:</strong>
                {' '}
                {item.email}
              </p>

              <p>
                <strong>Details:</strong>
                {' '}
                {item.details}
              </p>

              <div className='btns'>

                <button
                  className='edit-btn'
                  onClick={() =>
                    setIsEdit(true)
                  }
                >
                  Edit
                </button>

                <button
                  className='delete-btn'
                  onClick={() =>
                    deleteUser(item.id)
                  }
                >
                  Delete
                </button>

              </div>

            </div>

          )
        }

      </div>

    </div>
  )
}

export default Card