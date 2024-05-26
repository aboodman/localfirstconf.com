export const SpeakerBadge = () => {
  return (
    <div className="relative mt-2">
      <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute h-8 fill-current text-magenta">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M256 0C292.8 0 324.8 20.7 340.9 51.1C373.7 41 411 49 437 75C463 101 471 138.2 460.9 171.1C491.3 187.2 512 219.2 512 256C512 292.8 491.3 324.8 460.9 340.9C471 373.7 463 411 437 437C411 463 373.8 471 340.9 460.9C324.8 491.3 292.8 512 256 512C219.2 512 187.2 491.3 171.1 460.9C138.3 471 101 463 75 437C49 411 41 373.8 51.1 340.9C20.7 324.8 0 292.8 0 256C0 219.2 20.7 187.2 51.1 171.1C41 138.3 49 101 75 75C101 49 138.2 41 171.1 51.1C187.2 20.7 219.2 0 256 0ZM290.435 137.412C313.651 114.196 351.371 114.196 374.588 137.412C397.804 160.629 397.804 198.349 374.588 221.565L372.091 224.062L287.938 139.909L290.435 137.412ZM273.435 154.413L275.932 151.916L360.084 236.068L357.587 238.565C344.624 251.528 327.199 257.266 310.305 255.778L256.222 201.696C254.734 184.801 260.472 167.376 273.435 154.413ZM234.652 219.334L241.718 211.205L300.795 270.282L292.666 277.348L273.01 294.348V374.995C273.01 384.398 265.413 391.995 256.009 391.995C246.606 391.995 239.009 384.398 239.009 374.995V323.834L165.163 387.851C158.415 393.695 148.321 393.323 141.999 387.001L124.999 370.001C118.677 363.679 118.305 353.585 124.149 346.837L234.652 219.334Z"
        />
      </svg>
      <span className="ml-1 mt-1 inline-block h-6 rounded-full bg-white/20 pl-9 pr-3">Speaker</span>
    </div>
  )
}