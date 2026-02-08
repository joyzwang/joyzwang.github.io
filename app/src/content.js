export const Languages = {
  en: "en",
  cn: "cn",
};

function Page(en, cn) {
  this.en = en;
  this.cn = cn;
}

export const homeContent = new Page();
homeContent.en = {
  notification: "Welcome to the BTLM website!",
  content: "This is the home page content in English.",
};
homeContent.cn = {
  notification: "欢迎来到BTLM网站！",
  content: "这是主页内容的中文版本。",
};
