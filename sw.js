// 최소 서비스워커: 크롬 PWA "설치" 기능이 인식하려면 fetch 핸들러가 등록된
// 서비스워커가 필요합니다. 이 앱은 실시간 Firebase 데이터를 쓰므로
// 별도 오프라인 캐싱 없이 네트워크로 그대로 통과시킵니다.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
