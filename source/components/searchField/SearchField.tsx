import React, { FunctionComponent } from 'react'

import './searchField.css'

interface SearchFieldProps {
  term: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}

export const SearchField: FunctionComponent<SearchFieldProps> = (
  props: SearchFieldProps
): JSX.Element => {
  const { onChange, placeholder } = props
  return (
    <div className="searchBox">
      <input
        className="searchField"
        type="search"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}
