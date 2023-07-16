
import * as React from 'react';
import Banner from './Slider';

const Player = React.forwardRef(function Player(props: { className?: string },ref: React.ForwardedRef<HTMLDivElement>) {
  const { className = '', ...other } = props;

  return (
    <div
      className={`max-w-[600px] max-h-[240px] m-auto ${className}`}
      {...other}
      ref={ref}
    >
      <div className="bg-white border-slate-100 dark:bg-slate-800 dark:border-slate-500 border-b rounded-t-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
        <div className="flex items-center space-x-4">
          <img
            src="data:image/png;base64,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"
            alt=""
            width="88"
            height="88"
            className="flex-none rounded-lg bg-slate-100"
            loading="lazy"
          />
          <div className="min-w-0 flex-auto space-y-1 font-semibold">
            <p className="text-cyan-500 dark:text-cyan-400 text-sm leading-6">
              <abbr title="Episode">Ep.</abbr> 128
            </p>
            <h2 className="text-slate-500 dark:text-slate-400 text-sm leading-6 truncate">
              Scaling CSS at Heroku with Utility Classes
            </h2>
            <p className="text-slate-900 dark:text-slate-50 text-lg">
              Full Stack Radio
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="relative">
            <Banner />
          </div>
          <div className="flex justify-between text-sm leading-6 font-medium tabular-nums">
            <div className="text-cyan-500 dark:text-slate-100">24:16</div>
            <div className="text-slate-500 dark:text-slate-400">75:50</div>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 text-slate-500 dark:bg-slate-600 dark:text-slate-200 rounded-b-xl flex items-center">
        <div className="flex-auto flex items-center justify-evenly">
          <button type="button" aria-label="Add to favorites">
            <svg width="24" height="24">
              <path
                d="M7 6.931C7 5.865 7.853 5 8.905 5h6.19C16.147 5 17 5.865 17 6.931V19l-5-4-5 4V6.931Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className="hidden sm:block lg:hidden xl:block"
            aria-label="Previous"
          >
            <svg width="24" height="24" fill="none">
              <path
                d="m10 12 8-6v12l-8-6Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6v12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button type="button" aria-label="Rewind 10 seconds">
            <svg width="24" height="24" fill="none">
              <path
                d="M6.492 16.95c2.861 2.733 7.5 2.733 10.362 0 2.861-2.734 2.861-7.166 0-9.9-2.862-2.733-7.501-2.733-10.362 0A7.096 7.096 0 0 0 5.5 8.226"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 5v3.111c0 .491.398.889.889.889H9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <button
          type="button"
          className="bg-white text-slate-900 dark:bg-slate-100 dark:text-slate-700 flex-none -my-2 mx-auto w-20 h-20 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center"
          aria-label="Pause"
        >
          <svg width="30" height="32" fill="currentColor">
            <rect x="6" y="4" width="4" height="24" rx="2" />
            <rect x="20" y="4" width="4" height="24" rx="2" />
          </svg>
        </button>
        <div className="flex-auto flex items-center justify-evenly">
          <button type="button" aria-label="Skip 10 seconds">
            <svg width="24" height="24" fill="none">
              <path
                d="M17.509 16.95c-2.862 2.733-7.501 2.733-10.363 0-2.861-2.734-2.861-7.166 0-9.9 2.862-2.733 7.501-2.733 10.363 0 .38.365.711.759.991 1.176"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 5v3.111c0 .491-.398.889-.889.889H15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className="hidden sm:block lg:hidden xl:block"
            aria-label="Next"
          >
            <svg width="24" height="24" fill="none">
              <path
                d="M14 12 6 6v12l8-6Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 6v12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className="rounded-lg text-xs leading-6 font-semibold px-2 ring-2 ring-inset ring-slate-500 text-slate-500 dark:text-slate-100 dark:ring-0 dark:bg-slate-500"
          >
            1x
          </button>
        </div>
      </div>
    </div>
  );
});

export default Player;