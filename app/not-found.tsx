import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="container">
        <h1>页面不存在</h1>
        <p>你访问的页面可能已经移动、下线，或链接填写有误。</p>
        <div style={{ marginTop: 24 }}>
          <Link className="button button-secondary" href="/">
            返回首页
          </Link>
        </div>
      </div>
    </section>
  );
}
