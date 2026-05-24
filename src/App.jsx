import React, {
  useEffect,
  useReducer,
  useRef,
  useState
} from 'react'

import axios from 'axios'

import './App.css'

import Card from './components/Card'

import Context from './context/Context'

import { reducer }
from './reducer/Reducers'

const App = () => {

  const [state, dispatch] =
    useReducer(reducer, [])

  const [showPopup, setShowPopup] =
    useState(false)

  // ONLY NEWLY ADDED CARD
  const [newCard, setNewCard] =
    useState(null)

  const nameRef = useRef()
  const ageRef = useRef()
  const emailRef = useRef()
  const detailsRef = useRef()

  // FETCH USERS
  const fetchUsers = async () => {

    try {

      const res =
        await axios.get('/')

      // DO NOT SHOW OLD BACKEND CARDS
      // ONLY KEEP DATA INTERNALLY

      dispatch({
        type: 'GET',
        payload: res.data
      })

    } catch (error) {
      console.log(error)
    }
  }

  // ADD USER
  const addUser = async () => {

    if (
      !nameRef.current.value ||
      !ageRef.current.value ||
      !emailRef.current.value ||
      !detailsRef.current.value
    ) {
      alert('Please fill all fields')
      return
    }

    const userData = {
      name: nameRef.current.value,
      age: ageRef.current.value,
      email: emailRef.current.value,
      details: detailsRef.current.value
    }

    try {

      const res =
        await axios.post(
          '/',
          userData
        )

      // SHOW ONLY NEW CARD
      setNewCard(res.data)

      dispatch({
        type: 'ADD',
        payload: res.data
      })

      // CLEAR INPUTS
      nameRef.current.value = ''
      ageRef.current.value = ''
      emailRef.current.value = ''
      detailsRef.current.value = ''

      // CLOSE POPUP
      setShowPopup(false)

    } catch (error) {
      console.log(error)
    }
  }

  // DELETE USER
  const deleteUser = async (id) => {

    try {

      await axios.delete(`/${id}`)

      // REMOVE ONLY SECOND CARD
      if (newCard?.id === id) {
        setNewCard(null)
      }

      dispatch({
        type: 'DELETE',
        payload: id
      })

    } catch (error) {
      console.log(error)
    }
  }

  // UPDATE USER
  const updateUser =
    async (updatedData) => {

    try {

      const res =
        await axios.put(
          `/${updatedData.id}`,
          updatedData
        )

      // UPDATE ONLY SECOND CARD
      setNewCard(res.data)

      dispatch({
        type: 'UPDATE',
        payload: res.data
      })

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (

    <Context.Provider
      value={{
        deleteUser,
        updateUser
      }}
    >

      <div className='container'>

        {/* HEADER */}

        <div className='header'>

          <h1>
            User Datas
          </h1>

          <button
            className='plus-btn'
            onClick={() =>
              setShowPopup(true)
            }
          >
            +
          </button>

        </div>

        {/* CARDS */}

        <div className='cards-container'>

          {/* STABLE CARD */}

          <Card
            item={{
              id: 1,
              name: 'Harshaa SG',
              age: '21',
              email: 'harshaavardhan8@gmail.com',
              details: 'Aspiring MERN Stack Developer'
            }}
          />

          {/* ONLY SHOW AFTER ADDING */}

          {
            newCard && (

              <Card
                item={newCard}
              />

            )
          }

        </div>

        {/* POPUP */}

        {
          showPopup && (

            <div className='popup-overlay'>

              <div className='popup-box'>

                <button
                  className='close-btn'
                  onClick={() =>
                    setShowPopup(false)
                  }
                >
                  ×
                </button>

                <input
                  ref={nameRef}
                  type='text'
                  placeholder='Name'
                />

                <input
                  ref={ageRef}
                  type='text'
                  placeholder='Age'
                />

                <input
                  ref={emailRef}
                  type='text'
                  placeholder='Email'
                />

                <input
                  ref={detailsRef}
                  type='text'
                  placeholder='Mobile no'
                />

                <button
                  className='add-user-btn'
                  onClick={addUser}
                >
                  Add
                </button>

              </div>

            </div>

          )
        }

      </div>

    </Context.Provider>
  )
}

export default App
