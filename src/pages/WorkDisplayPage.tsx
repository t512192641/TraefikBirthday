import React from 'react';
import { useParams } from 'react-router-dom';

function WorkDisplayPage() {
  // 从 URL 获取 workId 参数，例如 "birthday-card"
  const { workId } = useParams<{ workId: string }>();

  // 构建指向 public 目录下对应 index.html 的路径
  // 确保 workId 存在，避免潜在的 undefined 问题
  const iframeSrc = workId ? `/works/${workId}/index.html` : '/';

  return (
    <div className="w-full h-screen -mt-24"> {/* Negative margin, full screen height */}
      {workId ? (
        <iframe
          src={iframeSrc}
          title={`Work - ${workId}`}
          className="w-full h-full border-none overflow-hidden" /* Full size, hide scrollbars */
          sandbox="allow-scripts allow-same-origin"
        />
      ) : (
        // 如果 workId 无效或丢失，显示错误消息或重定向
        <p className="p-8 text-center text-red-500">无法加载作品，无效的作品 ID。</p>
      )}
    </div>
  );
}

export default WorkDisplayPage; 