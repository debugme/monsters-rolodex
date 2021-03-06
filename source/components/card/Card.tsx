import React, { FunctionComponent } from 'react'
import { Monster } from '../../common/interfaces'

import './card.css'

interface CardProps {
  monster: Monster
}

export const Card: FunctionComponent<CardProps> = (props: CardProps) => {
  const {
    monster: { id, name, email },
  } = props
  const endpoint = `https://robohash.org/${id}?set=set2&size=180x180`
  return (
    <div className="card">
      <img alt="monster" src={endpoint} />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  )
}
