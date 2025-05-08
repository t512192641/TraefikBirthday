import React from 'react';
import { FaEnvelope, FaTwitter, FaWeixin } from 'react-icons/fa';
import { SiXiaohongshu } from "react-icons/si";
import { contactDetails } from '../config/contact';

const Footer: React.FC = () => {
  const { email, twitter, xiaohongshu, wechatPublic } = contactDetails;

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 matrix-text">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <p className="text-sm">&copy; {new Date().getFullYear()} 不知的AI冲浪录. All rights reserved.</p>
          </div>
          <div className="flex justify-center md:justify-end space-x-6 items-center">
            {email && (
              <a
                href={`mailto:${email}`}
                className="hover:text-green-400 transition-colors inline-block align-middle"
                title="邮件联系"
              >
                <FaEnvelope className="w-6 h-6" />
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors inline-block align-middle"
                title="Twitter"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            )}
            {xiaohongshu && (
              <a
                href={xiaohongshu}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors inline-block align-middle"
                title="小红书"
              >
                <SiXiaohongshu className="w-6 h-6" />
              </a>
            )}
            {wechatPublic && (
              <div className="inline-block align-middle" title={`微信公众号: ${wechatPublic}`}>
                <FaWeixin className="w-6 h-6" />
              </div>
            )}
          </div>
        </div>

        {/* AI Tools Section */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <h3 className="text-md font-semibold text-gray-400 mb-4">
            我常用的AI工具
          </h3>
          <div className="flex justify-center items-center">
            <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gray-300 hover:text-green-400 transition-colors duration-200">
              <img src="/images/cursor.jpeg" alt="Cursor Logo" className="h-8 w-8 mr-2" />
              <span>Cursor</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;