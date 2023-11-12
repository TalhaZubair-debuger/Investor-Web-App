import React from 'react'

const SignInDistributor = () => {
  return (
    <main className="signin-investor-main">
    <div className="header">
      Distrbutor's SignIn
    </div>
    <form action="/" method="post" className="signin-form">
      <label htmlFor="email">
      Email
      </label>
      <input type="email" name="email" id="email" className="input-text"/>

      <label htmlFor="password">
        Password
      </label>
      <input type="password" name="password" id="password" className="input-text"/>

      <button className="btn-signin">Sign In</button>
    </form>
  </main>
  )
}

export default SignInDistributor