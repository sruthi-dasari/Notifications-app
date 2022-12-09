const Notification = (props) => {
  const { notificationType, icon, box } = props;

  return (
    <div className={`notification-box ${box}`}>
      <img src={icon} className="image-icon" />
      <p className="text">{notificationType}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <Notification
      notificationType="Information Message"
      //   bgColor="#0b69ff"
      icon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      box="blue"
    />
    <Notification
      notificationType="Success Message"
      //   bgColor="#2dca73"
      icon="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      box="green"
    />
    <Notification
      notificationType="Warning Message"
      //   bgColor="#ffb800"
      icon="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      box="yellow"
    />
    <Notification
      notificationType="Error Message"
      //   bgColor="#ff0b37"
      icon="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      box="red"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
