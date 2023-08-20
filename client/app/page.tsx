'use client'
import './page.scss';
import { useEffect, useState, useRef } from 'react';
import Profile from '../components/Profile/Profile';

export default function Home() {

  const githubApi = 'https://api.github.com/users/';

  const labelRef = useRef<HTMLLabelElement>(null);
  const emptyRef = useRef<HTMLDivElement>(null);
  const noUserRef = useRef<HTMLDivElement>(null);
  const [username, setUsername] = useState('');
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    if (username.length > 0 && labelRef.current) {
      labelRef.current.classList.add('top-0');
      labelRef.current.classList.remove('top-1/2');
    } else if (labelRef.current) {
      labelRef.current.classList.remove('top-0');
      labelRef.current.classList.add('top-1/2');
    }
  }, [username]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    emptyRef.current?.classList.add('hidden');
    noUserRef.current?.classList.add('hidden');
    if (username.length === 0) {
      emptyRef.current?.classList.remove('hidden');
      return;
    }
    fetch(githubApi + username).then(res => {
      if (res.status === 404) {
        noUserRef.current?.classList.remove('hidden');
        return;
      }
      return res.json();
    }).then(data => {
      if (data) {
        console.log(data);
        setUser(data);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  return (
    <main className="main-content">
      <div className="container">
        <div className="form p-8 py-6 w-96 mx-auto rounded">
          <form action="">
            <div className="input">
              <input type="text" id='username' autoComplete='off' className='p-2 px-4 w-full border-none outline-none rounded' onChange={(e) => setUsername(e.target.value)} />
              <label ref={labelRef} htmlFor='username' className="label top-1/2">username</label>
              {/* <input type="submit" value="submit" /> */}
            </div>
            <div className="input-error mt-2">
              <div ref={emptyRef} className="empty text-red-500 capitalize text-xs hidden">username cannot be empty!</div>
              <div ref={noUserRef} className="empty text-red-500 capitalize text-xs hidden">No Username!</div>
            </div>
            <button className='btn' onClick={handleSubmit} >submit</button>
          </form>
        </div>
        {user.login ? <Profile data={user} /> : ''}
      </div>
    </main>
  )
}
