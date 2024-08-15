import { useState } from "react";

import "./chat.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

export default function Mapp() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

