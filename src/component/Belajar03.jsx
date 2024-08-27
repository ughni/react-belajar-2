import React from 'react'
import { useState } from 'react'

const Belajar03 = () => {
  const [nama, setNama] = useState("M Mughni")
  return (
    <>
      <div>Nama Saya {nama}</div>
      <Latihan1 nama={nama} />
    </>
  )
}

const Latihan1 = ({ nama }) => {
  return (
    <>
      <h1>heloooopagii {nama}</h1>
      <Latihan2 nama={nama} />
    </>
  )
}

const Latihan2 = ({ nama }) => {
  return (
    <>
      <h2>Aku Adalah {nama} Dari Pekalongan</h2>
    </>
  )
}
export default Belajar03