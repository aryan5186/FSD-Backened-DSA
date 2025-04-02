import React from 'react'

const Update = () => {

  const handleUpdate= async (e)=>{
    e.preventDefault()
    const id = e.target.id.value
    const name = e.target.name.value
    const age = e.target.age.value
    const data={name,age}
    await axios.put(`https://localhost:9000/users/${id}`,data)
    alert("success")
  }
  return (
    <div>Update</div>
  )
}

export default Update