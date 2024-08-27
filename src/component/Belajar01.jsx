import React from 'react'
import { useState } from 'react'

const Belajar01 = () => {
  // const [color, setColor] = useState("");
  const [saya, setSaya] = useState("");
  const [nama, setNama] = useState("");
  const [daerah, setDaerah] = useState("");
  const [umur, setUmur] = useState("");


  const [st, setStyle] = useState({
    color: "aku punya",
    bg: 'Motor',
    nama: "mughni",
    aku: 'hehe'
  })

//operactor javascript
  const uploadBaru = () => {
    setStyle(gaya => {
      return{...gaya, aku: 'haha'}
    })
  }

  return (
    <>
      {/* <h1>{color} {saya} {nama} {daerah} {umur}</h1> */}
      <button type='button' onClick={() => setColor("Perkenalan")}>Click</button>
      <button type='button' onClick={() => setSaya("nama Saya")}>Saya</button>
      <button type='button' onClick={() => setNama("Muhgni")}>Nama</button>
      <button type='button' onClick={() => setDaerah("dari Pekalongan")}>daerah</button>
      <button type='button' onClick={() => setUmur("Umur saya 18 tahun")}>umur</button>

      <br /><br />

      <h1>Helo {st.color} {st.bg} {st.nama} {st.aku} </h1>
      <button type='button' onClick={uploadBaru}>click</button>
    </>

  )
}

export default Belajar01