import React from 'react'
import './Repo.scss'
import Link from 'next/link';

export default function Repo({repo}: any) {
  return (
    <div className="repo">
      <div className="repo-infos">
        <h3 className="name">{repo.name}</h3>
        <p className="description">{repo.description}</p>
        <p className="language">{repo.language}</p>
      </div>
    </div>
  )
}
