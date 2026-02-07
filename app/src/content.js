function Home(notification, content) {
  this.notification = notification;
  this.content = content;
}

export const homeContent = {
  EN: new Home(
    "Notification in English",
    "This is the content of the home page.",
  ),
  CN: new Home("通知", "这是主页的内容。"),
};
