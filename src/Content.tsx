import React from 'react'
import { useUser } from './UserContext';

function Content() {
  const {data} = useUser();

  if(!data) return null
  return (
    <div>
        <h3>Preferencias</h3>
        <p>Qualidade: {data.preferencias.qualidade}</p>
        <p>Playback: {data.preferencias.playback}</p>
        <p>Volume: {data.preferencias.volume}</p>
    </div>
  )
}

export default Content