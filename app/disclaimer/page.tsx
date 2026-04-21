const sections = [
  {
    title: "风险提示",
    text: "本站展示的机场订阅入口和说明仅供参考，不构成对第三方服务质量、稳定性、可用性或结果的承诺。"
  },
  {
    title: "第三方平台说明",
    text: "点击订阅后会进入第三方页面。套餐、价格、注册规则、售后服务和页面内容均由对应第三方负责。"
  },
  {
    title: "内容免责声明",
    text: "本站会尽量保持信息清楚，但不保证所有内容实时更新。用户应以第三方页面的实际说明为准。"
  }
];

export default function DisclaimerPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>免责声明</h1>
          <p>请在跳转订阅前了解第三方页面和服务风险。</p>
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
