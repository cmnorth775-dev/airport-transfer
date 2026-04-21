import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>本站仅整理第三方机场订阅入口，跳转后的服务与页面由第三方提供。</span>
        <div className="footer-links">
          <Link href="/privacy">隐私政策</Link>
          <Link href="/disclaimer">免责声明</Link>
        </div>
      </div>
    </footer>
  );
}
