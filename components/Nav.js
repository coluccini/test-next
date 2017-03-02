import React from 'react'
import { connect } from 'react-redux'
import {FormattedMessage} from 'react-intl'
import Link from 'next/link'
import { setNames } from '../actions/names'

const Nav = ({names, dispatch}) => (
  <nav>
    <li>
      <Link href='/'>
        <a><FormattedMessage id='nav.home' defaultMessage='Home' /></a>
      </Link>
    </li>
    <li>
      <Link href='/about'>
        <a><FormattedMessage id='nav.about' defaultMessage='About' /></a>
      </Link>
    </li>
    <li>
      <button style={{ background: 'red', color: 'white', border: 0, borderRadius: 5, fontSize: '14px', marginRight: 10 }} onClick={()=>dispatch(setNames())}>Load other names</button>
      {names.map((name) =>
        <i key={name}>{name}</i>
      )}
    </li>

    <style jsx>{`
      nav {
        display: flex;
      }
      li {
        list-style: none;
        margin-right: 1rem;
      }
    `}</style>
  </nav>
)

export default connect(state => state)(Nav)
