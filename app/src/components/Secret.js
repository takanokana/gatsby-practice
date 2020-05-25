import React from "react"
import { logout } from "../service/auth"
import { navigate } from "gatsby"
export default function Auth() {
  const logoutHandler = () => {
    navigate('/')
    return
  }
  return (
    <div>認証後ページ　🎉

    <button
      type="button"
      onClick={e => logout(logoutHandler)}
    >ログアウトする</button>
    </div>
  )
}
