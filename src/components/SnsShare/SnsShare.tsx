"use client";
import React, { Suspense } from 'react';

// SNSボタンを遅延読み込み
const FacebookShareButton = React.lazy(() => import("next-share").then(module => ({ default: module.FacebookShareButton })));
const FacebookIcon = React.lazy(() => import("next-share").then(module => ({ default: module.FacebookIcon })));
const TwitterShareButton = React.lazy(() => import("next-share").then(module => ({ default: module.TwitterShareButton })));
const TwitterIcon = React.lazy(() => import("next-share").then(module => ({ default: module.TwitterIcon })));
const LineShareButton = React.lazy(() => import("next-share").then(module => ({ default: module.LineShareButton })));
const LineIcon = React.lazy(() => import("next-share").then(module => ({ default: module.LineIcon })));


interface SNSShareProps {
  url: string;
  title: string;
}

const size = 48;

export default function SNSShare({ url, title }: SNSShareProps) {
  return (
    <nav aria-label="SNSシェア" className="flex flex-col-reverse gap-2 items-center py-16">
      <h2 className="text-md font-bold text-center">よければSNSシェアしてください!</h2>
      <ul className="flex gap-4 justify-center items-center">
        <li className="p-0 list-none" data-tooltip-id="facebook">
          <Suspense fallback={<div className='w-[48px] h-[48px] rounded-full bg-gray-500'></div>}>
            <FacebookShareButton url={url} quote={title}>
              <FacebookIcon size={size} round className="bg-[#4267B2] rounded-full" />
            </FacebookShareButton>
          </Suspense>
        </li>
        <li className="p-0 list-none" data-tooltip-id="line">
          <Suspense fallback={<div className='w-[48px] h-[48px] rounded-full bg-gray-500'></div>}>
            <LineShareButton url={url} title={title}>
              <LineIcon size={size} round className="bg-[#00B900] rounded-full" />
            </LineShareButton>
          </Suspense>
        </li>
        <li className="p-0 list-none" data-tooltip-id="twitter">
          <Suspense fallback={<div className='w-[48px] h-[48px] rounded-full bg-gray-500'></div>}>
            <TwitterShareButton url={url} title={title}>
              <TwitterIcon size={size} round className="bg-gray-950 rounded-full" />
            </TwitterShareButton>
          </Suspense>
        </li>
      </ul>
    </nav>
  );
}