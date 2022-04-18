function LinkFooterComponent ({href, iconPath}){
    return<a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="text-gray-400 hover:text-gray-500"
  >
    <svg
      className="w-6 h-6"
      aria-hidden="true"
      fill="#bf3088"
      viewBox="0 0 24 24"
    >
      <path
        d={iconPath}
      ></path>
    </svg>
  </a>
}

export default LinkFooterComponent