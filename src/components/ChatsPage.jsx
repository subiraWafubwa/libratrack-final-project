import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

import close from "../../assets/close.png";

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    "92e73f07-6581-4be3-becf-e0ef5915a1ca",
    props.user.username,
    props.user.secret
  );

  return (
    <div className="chat-wrapper">
      <button id="remove-chat" style={{ zIndex: "1000" }}>
        <img
          src={close}
          alt="plus image"
          onClick={() => {
            props.toggleChatVisibility();
          }}
        />
      </button>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} className="chat-box" />
    </div>
  );
};

export default ChatsPage;
