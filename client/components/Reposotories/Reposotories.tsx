import React from 'react'
import Repo from './Repo/Repo';
import './Reposotories.scss'

export default function Reposotories({repos}: any) {
  const [reposList, setReposList] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetch(repos).then(res => res.json()).then(data => {
      setReposList(data);
      console.log(data);
    }).catch(err => {
      console.log(err);
    });
  }, [repos]);
  return (
    <div className="repos">
      <h2 className='text-center my-4 text-2xl text-slate-100 uppercase'>Reposotories</h2>
      <div className="repos-list">
        {reposList.filter((repo) => {
          return repo.fork === false;
        }).map((repo: any) => (
          <Repo repo={repo} key={repo.id} />
        ))}
      </div>
    </div>
  )
}
