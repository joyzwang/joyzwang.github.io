export const Languages = {
  English: "en",
  Chinese: "cn",
};

function Home(notification, content) {
  this.notification = notification;
  this.content = content;
}

export const homeContent = {
  en: new Home(
    "Notification in English",
    "This is the content of the home page.",
  ),
  cn: new Home("通知", "这是主页的内容。"),
};
