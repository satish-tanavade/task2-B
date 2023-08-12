import React, { useState } from 'react'

function CompForm() {

    const [isSelect, setIsSelect] = useState()

   
    const handleChange = (e) =>{
        console.log(e.target.value);
        setIsSelect(e.target.value)
    }
  return (
    <>
       <div className='container border border-1 mx-auto mt-5 rounded'>
        <form className='row p-4'>
          <div className='w-50 col-6 mb-4 form-group'>
            <label>First Name</label><br />
            <input type='text' className='form-control' name='fname'  required/>
          </div>

          <div className='w-50 col-6 mb-4 form-group'>
            <label>Last Name</label><br />
            <input type='text' className='form-control' name='lname'  required />
          </div>

          <div className='w-50 col-6 mb-4 '>
            <label>How should we contact you?</label><br />
            
            <input type='radio' className='form-check-input mx-2' name='gender' value={'Phone'} id='phoneCheck' onChange={handleChange}/> 
            <label className='form-check-label' for="phoneCheck">Phone</label>

            <span className='mx-3'>
            <input type='radio' className='form-check-input mx-2' name='gender' value={'Email'} id='emailCheck' onChange={handleChange}/>
            <label className='form-check-label' for="emailCheck">Email</label>
            </span>
            
          </div>

          {isSelect === "Phone" && <div className='w-50 col-6 mb-4 form-group '>
            <label>Phone</label><br />
            <input type='number' className='form-control' name='number'   required/>
          </div>}

          {isSelect === "Email" && <div className='w-50 col-6 mb-4 form-group '>
            <label>Email</label><br />
            <input type='email' className='form-control' name='email'   required/>
          </div>}

        </form>
      </div> 
    </>
  )
}

export default CompForm