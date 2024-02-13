/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

const nextConfig = {
    // 다른 구성 옵션들...
  
    // 페이지 사전 렌더링 설정
    experimental: {
      prerender: {
        // prerender-manifest.js 파일을 사용하도록 설정합니다.
        manifest: true
      }
    }
  };
  
  export default nextConfig;
