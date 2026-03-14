# 📘 พระไตรปิฎกสามสาย · Timeline

Visual timeline แสดงเหตุการณ์สำคัญของพระไตรปิฎก 3 สาย ตลอด 2,600 ปี

**Live**: https://tripitaka-timeline-pwa.pages.dev

## Features

- Timeline แบบ interactive · hover ดูรายละเอียดแต่ละเหตุการณ์
- ครอบคลุม 14 เหตุการณ์สำคัญ ตั้งแต่พุทธกาลถึงยุคปัจจุบัน
- 4 สาย: ยุคเริ่มแรก (มุขปาฐะ), เถรวาท (บาลี), มหายาน (จีน), วัชรยาน (ทิเบต)
- ข้อมูลเชิงลึก พระคาถาพระอุษณีษะชยาวีชัย
- รองรับ PWA (ติดตั้งบนมือถือได้ / Offline)

## Tech Stack

- Single-page HTML + CSS + JavaScript (ไม่มี framework)
- Inter font + Font Awesome icons
- PWA: Service Worker (network-first) + Web App Manifest
- Cloudflare Pages + GitHub Actions

## Project Structure

```
├── index.html       # หน้า Timeline (HTML + CSS + JS ในไฟล์เดียว)
├── manifest.json    # PWA manifest
├── sw.js            # Service Worker (network-first, offline cache)
├── README.md
└── .github/
    └── workflows/
        └── deploy.yml   # Auto deploy to Cloudflare Pages
```

## Development

```bash
git clone https://github.com/monthop-gmail/tripitaka-timeline-pwa.git
cd tripitaka-timeline-pwa
npx serve .
```

## Deploy

Push to `master` → GitHub Actions auto deploy to Cloudflare Pages

## Related

- [tripitaka-pwa](https://github.com/monthop-gmail/tripitaka-pwa) — พระไตรปิฎก สังคายนา 9 ครั้ง + พระสูตร + ค้นหา
