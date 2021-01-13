import React, { FunctionComponent } from 'react'
import { Monster } from '../../common/interfaces'
import { Card } from '../card/Card'

import './cardList.css'

interface CardListProps {
  monsters: Monster[]
}

export const CardList: FunctionComponent<CardListProps> = (
  props: CardListProps
) => {
  const { monsters } = props
  return (
    <div className="cardList">
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  )
}
