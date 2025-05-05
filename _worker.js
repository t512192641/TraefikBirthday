export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const response = await fetch(request);
    
    // 克隆响应以便修改
    const newResponse = new Response(response.body, response);
    
    // 为不同文件类型设置正确的内容类型头
    if (url.pathname.endsWith('.js')) {
      newResponse.headers.set('Content-Type', 'application/javascript');
    } else if (url.pathname.endsWith('.css')) {
      newResponse.headers.set('Content-Type', 'text/css');
    } else if (url.pathname.endsWith('.svg')) {
      newResponse.headers.set('Content-Type', 'image/svg+xml');
    } else if (url.pathname.endsWith('.json')) {
      newResponse.headers.set('Content-Type', 'application/json');
    } else if (url.pathname.endsWith('.woff')) {
      newResponse.headers.set('Content-Type', 'font/woff');
    } else if (url.pathname.endsWith('.woff2')) {
      newResponse.headers.set('Content-Type', 'font/woff2');
    } else if (url.pathname.endsWith('.ttf')) {
      newResponse.headers.set('Content-Type', 'font/ttf');
    }
    
    // 添加缓存控制
    newResponse.headers.set('Cache-Control', 'public, max-age=31536000');
    
    return newResponse;
  }
}; 