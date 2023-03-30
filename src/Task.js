import React from 'react'

import {GiBoomerangCross} from 'react-icons/gi'

const Task = ({tselect, onClick, onReminder}) => {
  return (
    <div className ={`event ${tselect.trem ? 'reminder' : ''}`} onDoubleClick ={()=>
      onReminder(tselect.id)
    }>
        <h2>{tselect.tname} {'  '}
         <GiBoomerangCross onClick={()=>onClick(tselect.id)}></GiBoomerangCross>
        
        </h2>
    </div>
  )
}

export default Task