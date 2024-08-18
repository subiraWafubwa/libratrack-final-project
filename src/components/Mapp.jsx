import { useState } from "react";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

export default function Mapp({ toggleChatVisibility }) {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return (
      // <AuthPage
      //   onAuth={(user) => setUser(user)}
      //   toggleChatVisibility={toggleChatVisibility}
      // />
      <></>
    );
  } else {
    return (
      // <ChatsPage user={user} toggleChatVisibility={toggleChatVisibility} />
      <></>
    );
  }
}
