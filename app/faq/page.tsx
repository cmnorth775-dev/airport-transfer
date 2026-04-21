const faqs = [
  {
    question: "如何订阅？",
    answer: "在首页选择一个机场卡片，点击“前往订阅”后会跳转到对应第三方页面，请根据页面提示完成订阅。"
  },
  {
    question: "为什么跳转到第三方页面？",
    answer: "本站只整理机场订阅入口，不提供第三方服务本身。注册、购买、套餐和售后都以第三方页面说明为准。"
  },
  {
    question: "邀请链接是什么？",
    answer: "邀请链接通常包含推荐码或渠道参数。是否自动识别、是否生效，以第三方订阅页面实际显示为准。"
  },
  {
    question: "链接失效怎么办？",
    answer: "链接可能因为第三方调整而失效。你可以返回首页选择其他入口，或等待站点维护者更新对应链接。"
  }
];

export default function FaqPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>常见问题</h1>
          <p>把订阅、跳转、邀请链接和链接失效等问题集中放在这里，避免首页变复杂。</p>
        </div>
      </section>
      <section className="container content-stack">
        {faqs.map((faq) => (
          <article className="content-block" key={faq.question}>
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
          </article>
        ))}
      </section>
    </>
  );
}
