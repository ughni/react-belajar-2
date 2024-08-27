import React from 'react'
import { useEffect, useState } from 'react'

const Belajar = () => {
  const [waktu, setWaktu] = useState(0)
  const [calculator, setCalculator] = useState(0)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setWaktu((wak) => wak - 1)
  //   }, 1000)
  // }, [])

  useEffect(() => {
    setCalculator(() => waktu * 2)
  }, [waktu])

  return (
    <>
      {/* useEffect yang tidak ada perameter */}
      <div>Menit tambah  {waktu}</div>
      <button onClick={() => setWaktu((wak) => wak - 1)}>Waktu Click</button>
      <div className="">Waktu dikali {calculator}</div>
    </>
  )
}

export default Belajar