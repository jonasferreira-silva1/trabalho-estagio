import React from 'react';

export default function Foote(){
    return (
      <footer className="bg-black text-center py-3 w-full flex">
      <div className="container px-5">
          <div className="text-white-50 small">
              <div className="mb-2">&copy; Organiza+ 2023. All Rights Reserved.</div>
              <a href="#!">Privacy</a>
              <span className="mx-1">&middot;</span>
              <a href="#!">Terms</a>
              <span className="mx-1">&middot;</span>
              <a href="#!">FAQ</a>
          </div>
      </div>
  </footer>
    );
}