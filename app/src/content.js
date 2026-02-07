function Home(notification, content) {
  this.notification = notification;
  this.content = content;
}

const homeContent = {
  HomeEN: new Home(
    "Notification in English",
    "This is the content of the home page.",
  ),
  HomeCN: new Home("通知", "这是主页的内容。"),
};
