import React, { ChangeEvent, Component, SyntheticEvent } from 'react'

import { CardList } from '../cardList/CardList'
import { SearchField } from '../searchField/SearchField'
import { Monster } from '../../common/interfaces'

import './app.css'

interface AppProps {}

interface AppState {
  monsters: Monster[]
  term: string
}

export class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
    this.state = { monsters: [], term: '' }
  }

  async componentDidMount() {
    const endpoint = 'https://jsonplaceholder.typicode.com/users'
    const response = await fetch(endpoint)
    const monsters: Monster[] = await response.json()
    this.setState({ monsters })
  }

  handleTerm = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const term = event.target.value.toLowerCase().trim()
    this.setState({ term })
  }

  render() {
    const { monsters, term } = this.state
    const monsterList = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(term)
    )
    return (
      <main className="page-wrapper">
        <SearchField
          term={term}
          onChange={this.handleTerm}
          placeholder="search monsters"
        />
        <CardList monsters={monsterList} />
      </main>
    )
  }
}
