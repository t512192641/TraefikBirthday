import { Mail, Twitter } from 'lucide-react';
import { contactInfo } from '../config/contact';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">不知的AI冲浪录</h3>
            <p className="text-sm">探索AI的无限可能</p>
          </div>
          
          <div className="flex space-x-6 items-center">
            <a
              href={`mailto:${contactInfo.email}`}
              className="hover:text-white transition-colors inline-block align-middle"
              title="邮件联系"
            >
              <Mail className="w-7 h-7" />
            </a>
            <a
              href={contactInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-block align-middle"
              title="Twitter"
            >
              <Twitter className="w-7 h-7" />
            </a>
            <a
              href={contactInfo.xiaohongshu}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-block align-middle"
              title="小红书"
            >
              <span className="text-xl">小红书</span>
            </a>
            <button
              onClick={() => window.open(contactInfo.wechat.qrcode)}
              className="hover:text-white transition-colors inline-block align-middle"
              title="微信公众号"
            >
              <span className="text-xl">公众号</span>
            </button>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} 不知的AI冲浪录. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}