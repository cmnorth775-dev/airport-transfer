const tutorialSections = [
  {
    title: "客户端下载",
    text: "根据你的设备选择对应客户端。Windows、macOS、Android 和 iOS 的客户端入口可以后续放在这里，保持教程页独立维护。"
  },
  {
    title: "如何订阅",
    text: "在首页选择合适的机场卡片，点击“前往订阅”进入第三方订阅页面，再按照第三方页面提示完成注册或购买。"
  },
  {
    title: "如何导入",
    text: "订阅完成后，在第三方页面复制订阅链接，再回到客户端中选择导入订阅或添加订阅地址。不同客户端名称可能略有差异。"
  },
  {
    title: "使用前检查",
    text: "导入后建议先更新订阅，再选择节点测试连接。若无法连接，请检查订阅是否过期、客户端版本是否过旧、网络环境是否正常。"
  }
];

export default function GuidePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>教程</h1>
          <p>这里集中放客户端下载、如何订阅、如何导入等内容，首页只保留订阅入口。</p>
        </div>
      </section>
      <section className="container content-stack">
        {tutorialSections.map((section) => (
          <article className="content-block" key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </article>
        ))}
      </section>
    </>
  );
}
