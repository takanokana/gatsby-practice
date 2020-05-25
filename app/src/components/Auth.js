import React, { Component } from "react"
import { handleLogin, isLoggedIn} from "../service/auth"
import { navigate, Link } from "gatsby"

export default class Auth extends Component {
  state = {
    username: ``,
    password: ``
  }

  handleUpdate(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    handleLogin(this.state)
    navigate(`/app/secret`)
  }
  render() {
    return (
      <div>
        認証ページ
        {isLoggedIn() ?
        <Link
          to="/app/secret"
        >認証後ページへ</Link>
        :
        <>
          <dl>
            <dt>名前</dt>
            <dd>
              <input
                name="username"
                onChange={e => this.handleUpdate(e)}
              ></input>
            </dd>
          </dl>
          <dl>
            <dt>パスワード</dt>
            <dd>
              <input
                name="password"
                onChange={e => this.handleUpdate(e)}
              />
            </dd>
          </dl>
          <button
          type="submit"
          onClick={e => this.handleSubmit(e)}
        >送信</button>
        </>
        }
      </div>
    )
  }
}
