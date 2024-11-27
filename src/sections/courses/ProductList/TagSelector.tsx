
interface TagSelectorProps {
  onSelectTags: (selectedTags: string[]) => void
}

const availableTags = ['electronics', 'clothing', 'home', 'gadgets', 'accessories', 'decor', 'computers', 'fashion']

export default function TagSelector({ onSelectTags }: TagSelectorProps) {
  const handleTagChange = (tag: string, isChecked: boolean) => {
    onSelectTags(
      isChecked
        ? [...availableTags.filter(t => document.getElementById(t) instanceof HTMLInputElement && (document.getElementById(t) as HTMLInputElement).checked), tag]
        : availableTags.filter(t => t !== tag && document.getElementById(t) instanceof HTMLInputElement && (document.getElementById(t) as HTMLInputElement).checked)
    )
  }

  return (
    <div className="space-y-2">
      {availableTags.map(tag => (
        <div key={tag} className="flex items-center">
          <input
            type="checkbox"
            id={tag}
            onChange={(checked) => handleTagChange(tag, checked as unknown as boolean)}
          />
          <label htmlFor={tag} className="ml-2 text-sm">
            {tag}
          </label>
        </div>
      ))}
    </div>
  )
}

