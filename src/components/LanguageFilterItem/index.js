import './index.css'

const LanguageFilterItem = props => {
  const {languageDetails, isActive, setActiveLanguageFilterId} = props
  const {language, id} = languageDetails

  const btnClassName = isActive ? 'language-btn active' : 'language-btn'

  const onClickLanguageFilter = () => {
    setActiveLanguageFilterId(id)
  }

  return (
    <li className="language-item">
      <button
        type="button"
        onClick={onClickLanguageFilter}
        className={btnClassName}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
