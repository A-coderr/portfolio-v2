export function SystemsVisual() {
  return (
    <div className="relative mx-auto aspect-5/4 w-full max-w-130 overflow-hidden rounded-lg border border-border bg-surface p-4 sm:p-6">
      <svg
        aria-hidden="true"
        focusable="false"
        className="h-full w-full"
        viewBox="0 0 560 448"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="1"
          width="558"
          height="446"
          rx="7"
          stroke="#2A2F37"
          strokeWidth="1"
        />

        <g opacity="0.36" stroke="#2A2F37" strokeWidth="1">
          <path d="M96 332H464" />
          <path d="M96 280H464" />
          <path d="M96 228H464" />
          <path d="M96 176H464" />
          <path d="M148 124V360" />
          <path d="M228 92V392" />
          <path d="M308 92V392" />
          <path d="M388 124V360" />
        </g>

        <g className="systems-visual__float">
          <path
            d="M128 146L280 70L432 146L280 224L128 146Z"
            fill="#0B0D10"
            stroke="#2A2F37"
            strokeWidth="1.5"
          />
          <path
            d="M128 146V274L280 354V224L128 146Z"
            fill="#111419"
            stroke="#2A2F37"
            strokeWidth="1.5"
          />
          <path
            d="M432 146V274L280 354V224L432 146Z"
            fill="#151920"
            stroke="#2A2F37"
            strokeWidth="1.5"
          />

          <path
            d="M178 170L280 118L382 170L280 224L178 170Z"
            stroke="#A6ABB3"
            strokeOpacity="0.38"
            strokeWidth="1.2"
          />
          <path
            d="M180 236L280 288L380 236"
            stroke="#A6ABB3"
            strokeOpacity="0.32"
            strokeWidth="1.2"
          />
          <path
            d="M280 118V288"
            stroke="#A6ABB3"
            strokeOpacity="0.28"
            strokeWidth="1.2"
          />

          <g stroke="#2A2F37" strokeWidth="1.4">
            <rect x="208" y="137" width="68" height="40" rx="6" fill="#12151A" />
            <rect x="297" y="162" width="68" height="40" rx="6" fill="#12151A" />
            <rect x="194" y="240" width="72" height="42" rx="6" fill="#12151A" />
            <rect x="300" y="245" width="62" height="38" rx="6" fill="#12151A" />
          </g>

          <g
            fill="#A6ABB3"
            fontFamily="var(--font-geist-mono)"
            fontSize="10"
            fontWeight="500"
          >
            <text x="226" y="161">
              REACT
            </text>
            <text x="316" y="186">
              UNITY
            </text>
            <text x="217" y="265">
              C#
            </text>
            <text x="319" y="270">
              TOOLS
            </text>
          </g>

          <g fill="#0B0D10" stroke="#2A2F37" strokeWidth="1.5">
            <circle cx="128" cy="146" r="9" />
            <circle cx="280" cy="70" r="12" />
            <circle cx="432" cy="146" r="9" />
            <circle cx="128" cy="274" r="8" />
            <circle cx="280" cy="354" r="12" />
            <circle cx="432" cy="274" r="8" />
            <rect x="270" y="215" width="20" height="20" rx="4" />
          </g>

          <g className="systems-visual__signal">
            <path
              d="M304 202C330 188 360 187 390 205"
              stroke="#FF6846"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="398" cy="210" r="7" fill="#FF6846" />
          </g>
        </g>

        <g opacity="0.5" stroke="#2A2F37" strokeWidth="1.2">
          <path d="M92 86H168V128" />
          <path d="M468 334H392V292" />
          <circle cx="92" cy="86" r="5" fill="#12151A" />
          <rect x="462" y="328" width="12" height="12" rx="2" fill="#12151A" />
        </g>
      </svg>
    </div>
  );
}