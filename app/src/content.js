export const Languages = {
  en: "en",
  cn: "cn",
};

function Page(en, cn) {
  this.en = en;
  this.cn = cn;
}

// Navbar Content
export const navbarContent = new Page();
navbarContent.en = {
  about: "About",
  submissions: "Submissions",
};
navbarContent.cn = {
  about: "关于我们",
  submissions: "投稿",
};

// Homepage Content
export const homeContent = new Page();
homeContent.en = {
  notification: "Upcoming Dates",
  heading: "<i> Read the current issue of Between the Lines: </i>",
};
homeContent.cn = {
  notification: "重要日期",
  heading: "阅读《言外之意》当前一期",
};

//About page content
export const aboutContent = new Page();
aboutContent.en = {
  heading1: "About Between the Lines",
  p1: "Between the Lines is a bilingual literary and arts zine by and for Chinese queer womxn—those living within, across, and beyond borders. It centers the stories of individuals who have long had to live, love, and resist in subtext—navigating social stigma, political censorship, and cultural marginalization both in their homelands and diasporas. It explores the liminal geographies that they often inhabit. It holds space for the words, images, and ideas that survive between the lines. This project is published by United Proud Womxn, a nonprofit organization committed to empowering sexual minority womxn.",
  heading2: "About United Proud Womxn",
  p2: "United Proud Womxn is a non-profit organization dedicated to empowering sexual minority womxn by creating safe, brave, collaborative, and creative spaces to grow as individuals, connect with community, and organize collective actions for inclusive social change.",
};
aboutContent.cn = {
  heading1: "关于《言外之意》",
  p1: "《言外之意》 是一本由华人酷儿女性主创的双语文学与艺术杂志，立足边界，写在缝隙，讲述那些不被允许直说的故事。它由非营利组织联合骄傲女性发起，致力于支持性少数女性的表达与自主。许多声音被迫低语，被遮蔽、被删改，被夹在词与词之间的空白中。我们倾听它们，也愿让它们发出回响。这里是属于她们的语言地带，是在沉默与否定之外，继续存在、思考与热爱的空间。",
  heading2: "关于联合骄傲女性",
  p2: "联合骄傲女性是一个非营利组织。它的主要目标是为多元化群体女孩提供安全、勇敢、协作和创造性的空间，使她们作为个人成长，与社区成员联系，并组织集体行动，推动包容性社会变革。",
};

//Submission Page Content
export const submissionContent = new Page();
submissionContent.en = {
  heading1: "Submissions",
  p1: "Submissions for the 2027 Between the Lines issue will open in August 2026. Please revisit this page at that time for the submission link.",
  heading2: "Submissions FAQs",
  p2: "Who can submit? Anyone who identifies as a queer Chinese womxn is welcome to submit!",
};
submissionContent.cn = {
  heading1: "投稿",
  p1: "2027年 《言外之意》 的投稿将在 2026年8月 开放。届时请再次访问此页面以获取投稿链接。",
  heading2: "投稿常见问题",
  p2: "谁可以投稿? 只要认同自己是酷儿华人女性，都欢迎投稿。",
};
