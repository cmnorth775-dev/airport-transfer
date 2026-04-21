const sections = [
  {
    title: "日志记录说明",
    text: "当用户点击订阅入口时，本站可能记录机场 slug、点击时间、来源页、UA、UTM 参数和实际跳转目标。"
  },
  {
    title: "统计用途说明",
    text: "点击日志主要用于统计入口表现、来源渠道和链接状态，不用于出售个人数据。"
  },
  {
    title: "设备信息说明",
    text: "第一版不依赖 Cookie 做身份识别。设备类型会根据 user-agent 粗略判断，IP 会哈希后保存。"
  }
];

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>隐私政策</h1>
          <p>这里说明本站记录哪些基础访问日志，以及这些日志的用途。</p>
        </div>
      </section>
      <section className="container content-stack">
        {sections.map((section) => (
          <article className="content-block" key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </article>
        ))}
      </section>
    </>
  );
}
