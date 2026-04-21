# 推荐卖家导航站

这是一个 Next.js App Router 第一版，实现了推荐卖家首页、卖家详情页、使用说明、FAQ、免责声明、隐私政策和统一跳转接口。

## 主要文件

- `app/page.tsx`：首页
- `app/seller/[slug]/page.tsx`：卖家详情页
- `app/go/[slug]/route.ts`：跳转接口，成功时返回 302
- `lib/sellers.ts`：第一版卖家配置
- `lib/tracking.ts`：点击日志写入逻辑
- `db/schema.sql`：后续接数据库时的建表草案

## 跳转逻辑

访问 `/go/seller-a` 时会：

1. 校验 slug 是否存在
2. 检查卖家是否为 `active`
3. 读取 `inviteUrl`
4. 记录点击日志到 `logs/click_logs.ndjson`
5. 返回 302 跳转到第三方注册链接

日志写入失败时仍会继续跳转，避免统计问题阻断用户注册。

## 本地运行

```bash
npm install
npm run dev
```

然后打开 `http://localhost:3000`。

## 上线前建议

- 把 `lib/sellers.ts` 里的示例卖家改成真实信息
- 设置环境变量 `IP_HASH_SALT`
- 将文件日志迁移到数据库中的 `click_logs`
- 替换 `public/logos` 下的占位 logo
