import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Reposotories from '../Reposotories/Reposotories'
import './Profile.scss'

export default function Profile({data}: any) {
  return (
    <div className="profile mt-20">
      <div className="container">
        <div className="user-card">
          <div className="infos">
            <div className="personal-infos">
              <h2 className="name mb-2">{data.name} <span className='font-normal' >({data.login})</span> </h2>
              <h3 className='bio'>{data.bio}</h3>
              <p className="location mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="12" cy="11" r="3" />
                  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                </svg>
                {data.location}
              </p>
              <p className="time-on-github">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clock" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="12" cy="12" r="9" />
                  <polyline points="12 7 12 12 15 15" />
                </svg>
                Joined {new Date(data.created_at).toLocaleDateString()}
              </p>
              <p className="repos-number font-semibold mt-4">
                {data.public_repos} repos have been created so far by <Link target='_blank' href={`https://github.com/${data.login}`} >{data.login}</Link>
              </p>
            </div>
            <div className="github-infos">
              <div className="avatar">
                <Image src={data.avatar_url} alt="avatar" width={200} height={200} />
              </div>
              <div className="follow-infos">
                <div className="followers">
                  <h4 className="title">Followers</h4>
                  <p className="count">{data.followers}</p>
                </div>
                <div className="following">
                  <h4 className="title">Following</h4>
                  <p className="count">{data.following}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Reposotories repos={data.repos_url} />
      </div>
    </div>
  )
}
